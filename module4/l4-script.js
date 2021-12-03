



//any number devisable by 2 is odd else even

var i;
for(i=1;i<=20;i++)
{
if(i%2)
{
console.log(i+"odd")
}
else
{
console.log(i+"even")
}
}

//
var myArray = ["Apple","Orange", "Kiwi", "Lemon"];

var i=0;

while(i<myArray.length)
{
console.log(myArray[i])

i++;
}

// A Do Loop

do
{
alert("You must be at least 1.2 meters tall to join this ride.");
var userHeight=prompt("Please enter your height");
}

while(userHeight<1.2)
alert("Enjoy the ride");

//global and local variables.
//global 

var name=" kieron";

function  printName(name)
{
alert("welcome back"+(name));
}
printName(name);

//local 

var name=" kieron";

function  printName(name)
{
alert("welcome back"+(name));
}
printName("kieron everitt");


// return statement

var num1 = 5;
var num2 = 20;
var result;

function multiply(firstNumber,secondNumber)
{
return firstNumber*secondNumber;
}

result =multiply (num1,num2);
console.log(result);



//objects and properties.

var car ={ make:"BMW", model:"e90 318i SE", colour:"silver", year:"2009"}

console.log(car.year);

//constructors

function buildCar (make,model,colour)
{
this.make=make;
this.model=model;
this.colour=colour;
alert("your "+this.colour+" "+this.make+" "+this.model+" was successfully created!")
}

var myNewCar = new buildCar("BMW","m4 430 GT", "Orange")







