
//test case 1
var list = [1, 2, 3];
var callback = function(item) { return item === 2 };

//test case 2
var list = [{key: 'hello', value: 'world'}, {key: 'ship', value: 'silja line'}];
var callback = function(item) { return item.key === 'ship' };

//filter function for non native implementation
function filterNonNative(list, callback) {
  var newList = [];
    for(i = 0; i < list.length; i++) {
      //console.log("\ni: " + i);
      //console.log("callback(i): " + callback(list[i]));
      //console.log("list[i]: " , list[i]);

      if(callback(list[i]) == true) {
        newList.push(list[i]);
      }
    }
  //console.log("\nnewList: " , newList);
  return newList;
}

//test for filterNonNative function
//list.filter = null;

//filter function and two parameters
function filter(list, callback) {
  var filteredList;
  //test if native filter function exists
  if (typeof list.filter === "function") {
    filteredList = list.filter(callback);
  } 
  //if there is no native filter function, use non-native filter function
  else {
    filteredList = filterNonNative(list, callback);
  }
  return filteredList;
}

//testing filterFunction output
console.log("list: " , list);
console.log("filteredList: " , filter(list,callback));

