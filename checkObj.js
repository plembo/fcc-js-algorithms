/* This is my solution for the "Testing Objects for Properties" challenge
in Basic JavaScript on freecodecamp.org. It works, but it won't pass fcc's
tests. */
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // Your Code Here
    result = "";
    if(myObj.hasOwnProperty(checkProp)) {
      result = myObj[checkProp];
    }
    else {
      result = "Not Found";
    }
    return result;
  }
  
  // Test your code by modifying these values
  console.log(checkObj("house"));
