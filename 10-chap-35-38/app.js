// FUNCTIONS


// 1

// var date = new Date()
// var time = date.toLocaleTimeString()
// console.log(time + date); 


// // 2
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// console.log("Welcome," + firstName  + lastName );



// 3

// var num1 = +prompt("Enter First Number")
// var num2 = +prompt("Enter Second Number")

// var sum = num1 + num2

// console.log(sum);


// 4

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var operator = prompt("Enter Operator");

// var result; 

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// } else if (operator === "%") {
//     result = num1 % num2;
// } else {
//     result = "Invalid operator";
// }

// console.log(result);




// 5

// var num = +prompt("Enter number");
// var square = num * num;

// document.write("Square of " + num + "is :" + square);



// 6

// var num = +prompt("Enter number");
// var factorial = 1;

// for (var i = 1; i <= num; i++) {
//     factorial = factorial * i;
// }

// console.log(factorial);



// 7


// var start = +prompt("Enter start number");
// var end = +prompt("Enter end number");

// for(var i = start; i <= end; i++){
//     console.log(i);
// }


// 8

// 9

// i
// var width = 7
// var height = 5 
// var area = width * height 
// console.log("Area is: " + area);


// // ii
// var width = +prompt("Enter width");
// var height = +prompt("Enter height");

// var width ;
// var height ; 
// var area = width * height 

// console.log("Area is: " + area);



// 10

// var str = prompt("Enter a string");
// var reversedStr = str.split("").reverse().join("");

// if (str === reversedStr) {
//     console.log(str + " is Palindrome");
// } else {
//     console.log(str + " is NOT Palindrome");
// }

// 11
// var str = prompt("Enter string: e.g the quick brown fox");

// var words = str.split(" ");
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// var result = words.join(" ");
// console.log(result);


// 12



// var str = prompt("Enter string: e.g Web Development Tutorial");

// var words = str.split(" ");
// var longestWord = "";

// for (var i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }

// console.log("Longest word is: " + longestWord);



// 13
// var str = "JSResourceS.com"
// var letter = "o"
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//         count++;
//     }
// }

// console.log(count); 
