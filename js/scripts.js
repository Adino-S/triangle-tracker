function triangles () {
  var a= parseInt(prompt("Enter the value of side a"));
  var b= parseInt(prompt("Enter the value of side b"));
  var c= parseInt(prompt("Enter the value of side c"));

  if (a===b && b===c && a===c){
   console.log("Equilateral!");
  }
  else if (a===b && b===c && a!==c) {
      console.log("iscosceles");
    }
  else if (a===c && c===b && b!==a) {
      console.log("iscoscele");
    }
  else if (a===b && a===c && c!==b) {
      console.log("iscoscele");
    }
  else if (a!==b!==c);{
    console.log("scalene");
    }
    else {
    console.log ("NOT A TRIANGLE");
    }
  }
