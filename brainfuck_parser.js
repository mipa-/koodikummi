var Paula = "++++++++[>+++[>+++>++++>+++++>+++++<<<<-]>+>>>--[<]<-]>>.>+.>---.>++++.<<.";
var HelloWorld = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";


function brainfuck_parser(code) {

  var cells = [];
  var cellIndex = 0;
  var toPrint = '';
  var loopStart = [];  
  var loopEnd = []; 

  var j = 0;

  for (i = 0; i < code.length ; i++) {

    //console.log("cells: " , i, cells)
    //console.log("i: " , i)

    if (code.charAt(i) === '+') {
      //console.log("cells[cellIndex]: ", cells[cellIndex])

      if(cells[cellIndex] != undefined) {
        var item = cells[cellIndex];
        //console.log("item: " , item)
        cells.splice(cellIndex,1);
        item++;
        cells.splice(cellIndex,0,item);
        //console.log("cells: " , cells)
      }
      else cells.push(1);
      //console.log("+++: ", cells[cellIndex])
    }

    else if (code.charAt(i) === '-') {
      //console.log("joo-")
      if(cells[cellIndex] != undefined) {
        var item = cells[cellIndex];
        //console.log("item: " , item)
        cells.splice(cellIndex,1);
        item--;
        cells.splice(cellIndex,0,item);
        //console.log("cells: " , cells)
      }
      else cells.push(1);
      //console.log("---: " , cells[cellIndex])
    }

    else if (code.charAt(i) === '>') {
      cellIndex++;
      //console.log(">>>: " , cellIndex)
    }

    else if (code.charAt(i) === '<') {
      cellIndex--;
      //console.log("<<<: " , cellIndex)
    }

    else if (code.charAt(i) === '[') {
      //i = loopEnd.pop();
      //console.log("joo: " , cells[cellIndex])
      if (cells[cellIndex] === 0) {
        //console.log("menee tänne")
        i = loopEnd.pop();
        //console.log("loopend: " , loopEnd , i)
      }

      //else loopEnd.pop();

      else {
        loopStart.push(i);
        loopEnd.pop();
      }
      //console.log("[[[: " , loopStart)
    }
  
    else if (code.charAt(i) === ']') {
      loopEnd.push(i);
      i = loopStart.pop() - 1;
      //console.log("]]]: " , loopEnd)
    }

    else if (code.charAt(i) === '.') {
      toPrint += String.fromCharCode(cells[cellIndex]);
      //console.log("toPrint: " , toPrint)
    }
    j++;
  }
  return toPrint;
}

console.log(brainfuck_parser(Paula))
console.log(brainfuck_parser(HelloWorld))



