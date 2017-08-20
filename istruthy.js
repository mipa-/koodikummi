//actual function
function isTruthy(item) {
  return Boolean(item);
}

//testing double negation
function isTruthy2(item) {
  return !!item;
}

//testing ?
var isTruthy3 = Boolean;

//test cases
console.log(isTruthy()); // false
console.log(isTruthy(1)); // true
console.log(isTruthy(false)); // false
console.log(isTruthy(true)); // true
console.log(isTruthy({})); // true
console.log(isTruthy('')); // false
console.log(isTruthy(NaN)); //false
console.log(isTruthy("false")); //true
console.log(isTruthy("-1")); //true