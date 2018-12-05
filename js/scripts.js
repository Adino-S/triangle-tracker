function triangles() {
  var a= parseInt(document.getElementById("a").value);
  var b= parseInt(document.getElementById("b").value);
  var c= parseInt(document.getElementById("c").value);

  if (a===b && b===c && a===c){
   alert("Equilateral");
  }
  else if (a==b && a!==c) {
      alert("Scalene");
    }
  else if (a!==b || b!==c|| a!==c) {
      alert("Isosceles");
    }
   else {
    alert("Not a triangle");
  }
}
