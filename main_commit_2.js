
//user arguments
var myArgs = process.argv.slice(2);

//arguments in array format
var arrayOfNumbers = myArgs.map(Number);

// args in string format
var digits = arrayOfNumbers.toString();

var numWords = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

var i =0;

myArgs.forEach(function (number) {

//get single argument in string
    arg = "";
//split that argument for conversion
    digits = number.split("");
   
    digits.forEach(function(digit) {

        // convert arg to string equivalent in numwords array
        arg = arg + numWords[parseInt(digit)];
    })
   
})

//display converted arguments in string
console.log(arg)
