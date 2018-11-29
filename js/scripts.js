
a===b===c = equilateral
a===b; b===c; a!==c
a!==b!==c



var add= function(number1,number2){
  return number1+number2;
};

var subtract= function(number1,number2){
  return number1-number2;
};

var multiply= function(number1,number2){
  return number1*number2;
};

var divide= function(number1,number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var results = divide (number1, number2);
alert(results);


prompt("Do you want coffee or tea?")
var answer = prompt("Do you want coffee or tea?")

if(answer === "tea")
{
	alert("You have chosen tea!")
  console.log("You have chosen tea")
} else if (answer === "coffee")
{
alert("You have chosen coffee!")
console.log("You have chosen coffee!")
} else {alert("enter a valid answer!")}

var temperature = 30;
prompt("key in temperature today:");

if (temperature < 0) {
  console.log("Brr! Don't freeze out there!");
} else if (temperature < 15) {
  console.log("Don't forget a jacket!");
} else if (temperature < 25) {
  console.log("Have a nice day :)");
} else {
  console.log("Keep cool today!");
}
//function for calculating the triangle
var total = 0;
var summands = [1, 2, 3, 4, 5];
summands.forEach(function(summand) {
  total += summand;
});
alert(total);  // 15

//initializing the loop to a total of three counts for the triangle
var total = 0;
for (var currentNumber = 1; currentNumber <= 3; currentNumber += 1) {
  total += currentNumber;
}
alert("Total is: " + total);
//shopping list each listed on console
var shoppingItems = prompt ("key in item into shopping bag");

var responses = shoppingItems.split(",");

var item = responses.forEach(function(response){
	console.log(response);
});
