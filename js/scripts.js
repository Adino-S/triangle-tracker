function triangles() {
  var a= parseInt(prompt("Enter the value of side a"));
  var b= parseInt(prompt("Enter the value of side b"));
  var c= parseInt(prompt("Enter the value of side c"));

  if (a===b && b===c && a===c){
   alert("Equilateral!");
  }
  else if (a!==b && b!==c) {
      alert("scalene");
    }
  else if (a===c && b!==a) {
      alert("Isosceles");
    }
  else if (a===b && c!==b) {
      alert("Isosceles");
    }
  else if (a===b && a!==c) {
      alert("Isosceles");
  } else {
    alert("Not a triangle");
  }
}
