function isTruthy(item) {
  return Boolean(item);
}

console.log(isTruthy()); // false
console.log(isTruthy(1)); // true
console.log(isTruthy(false)); // false
console.log(isTruthy(true)); // true
console.log(isTruthy({})); // true
console.log(isTruthy('')); // false
console.log(isTruthy(NaN)); //false
console.log(isTruthy("false")); //true
console.log(isTruthy("-1")); //true