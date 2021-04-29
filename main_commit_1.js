
// user arguments
var myArgs = process.argv.slice(2);

//args in array 
var arrayOfNumbers = myArgs.map(Number);

// args in string 
var digits = arrayOfNumbers.toString();

//array to hold converted digit
var answer = [];

//array to hold string of all converted digits
var joinedNums=[];


for (i = 0; i < digits.length; i++) {
			
		//if arg is '0'	
		if(digits[i] == '0'){
		
		//push it into array
			answer.push("Zero");
		}
		if(digits[i] == '1'){

		
			answer.push("One");
		}
		if(digits[i] == '2'){

			answer.push("Two");
		}
		if(digits[i] == '3'){

			answer.push("Three");
		}
		if(digits[i] == '4'){

			answer.push("Four");
		}
		if(digits[i] == '5'){

			answer.push("Five");
		}
		if(digits[i] == '6'){

			answer.push("Six");
		}
		if(digits[i] == '7'){

			answer.push("Seven");
		}
		if(digits[i] == '8'){

			answer.push("Eight");
		}
		if(digits[i] == '9'){

			answer.push("Nine");
		}
		
		//join words seperated by comma	
		joinedNums = answer.join(',');

}
console.log(joinedNums);


