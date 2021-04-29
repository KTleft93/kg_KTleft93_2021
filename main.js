
//Arguments from user
var myArgs = process.argv.slice(2);

var numWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
// For holding the text equivalent of numbers
var words = [];

// loop counter
var i = 0;

myArgs.forEach(function (number) {
    
    arg = "";
    // Split the number into digits
    digits = number.split("");
   
    digits.forEach(function(digit) {
        // convert arg to string equivalent in numwords array
        arg += numWords[parseInt(digit)];
    })
    // Add converted arg to string array
    words[i] = arg;
    // go to next arg 
    i++;
})
// join text in string
console.log(words.join(","))
