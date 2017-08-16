
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
      if(callback(list[i])) {
        newList.push(list[i]);
      }
    }
  return newList;
}

//test for filterNonNative function
//list.filter = null;

//filter function and two parameters
function filter(list, callback) {
  //test if native filter function exists
  if (typeof list.filter === "function") {
    return list.filter(callback);
  } 
  //if there is no native filter function, use non-native filter function
  else {
    return filterNonNative(list, callback);
  }
}

//testing filterFunction output
console.log("list: " , list);
console.log("filtered list: " , filter(list,callback));

