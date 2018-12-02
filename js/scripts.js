function triangles() {
  var a= parseInt(prompt("Enter the value of side a"));
  var b= parseInt(prompt("Enter the value of side b"));
  var c= parseInt(prompt("Enter the value of side c"));

  if (a===b && b===c && a===c){
   console.log("Equilateral!");
  }
  else if (a!==b && b!==c) {
      console.log("scalene");
    }
  else if (a===c && b!==a) {
      console.log("Isosceles");
    }
  else if (a===b && c!==b) {
      console.log("Isosceles");
    }
  else if (a===b && a!==c) {
      console.log("Isosceles");
  } else {
    console.log("Not a triangle");
  }
}
