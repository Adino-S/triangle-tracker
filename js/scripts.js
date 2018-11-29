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
