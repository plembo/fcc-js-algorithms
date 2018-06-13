function confirmEnding(str, target) {
  var n = target.length;
  return str.substr(-n) === target;
}
console.log(confirmEnding("Bastian", "n"));
