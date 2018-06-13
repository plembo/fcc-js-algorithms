function repeatStringNumTimes(str, num) {
  // repeat after me
  var s = "";
  for(var i = num; i > 0; i--) {
      s = str + str;
  }
  return s;
}
repeatStringNumTimes("abc", 3);
