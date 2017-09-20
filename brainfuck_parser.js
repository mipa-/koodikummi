function brainfuck_parser(code,input) {

  var cells = [];
  var cellIndex = 0;
  var toPrint = '';
  var loopStart = [];  
  var loopEnd = [];
  var inputs = 0;

  for (i = 0; i < code.length ; i++) {

    //console.log("cells: " , i, cells)
    //console.log("i: " , i)

    if (code.charAt(i) === '+') {
      if(cells[cellIndex] != undefined) {
        var item = cells[cellIndex];
        cells.splice(cellIndex,1);
        item++;
        cells.splice(cellIndex,0,item);
      }
      else cells.push(1);
      //console.log("+++: ", cells[cellIndex])
    }

    else if (code.charAt(i) === '-') {
      if(cells[cellIndex] != undefined) {
        var item = cells[cellIndex];
        cells.splice(cellIndex,1);
        item--;
        cells.splice(cellIndex,0,item);
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
      if (cells[cellIndex] === 0) {
        i = loopEnd.pop();
      }
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

    else if (code.charAt(i) === ',') {
      cells[cellIndex] = input.charCodeAt(inputs);
      inputs++;
    }
  }
  return toPrint;
}

var Paula = "++++++++[>+++[>+++>++++>+++++>+++++<<<<-]>+>>>--[<]<-]>>.>+.>---.>++++.<<.";
var Paaba = "++++++++[>+++[>+++>++++>+++++>+++++<<<<-]>+>>>--[<]<-]>>.>+.>---,.>,.<.";
var HelloWorld = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";

console.log(brainfuck_parser(Paula))
console.log(brainfuck_parser(Paaba,'ab'))
console.log(brainfuck_parser(HelloWorld))



