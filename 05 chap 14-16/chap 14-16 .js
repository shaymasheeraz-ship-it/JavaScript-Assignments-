// Q:1
var array = [];
// Q:2

var myArray = new Array();
console.log(array, myArray);

// Q:3

var array2 = ["Ahmed", "Ali", "Shazia"];
console.log(array2);
// Q:4
var num = [22, 33, 45];
console.log(num);
// Q:5
var boolean = [true];
console.log(boolean);
// Q:6
var mixed = ["Shazia", 10, true, undefined, null];
console.log(mixed);

// Q:7

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
var naming = [`${numbers[0]}  ${qualifications[0]} <br> ${numbers[1]}  ${qualifications[1]} <br>  ${numbers[2]}  ${qualifications[2]} <br>  ${numbers[3]}  ${qualifications[3]}  <br>  ${numbers[4]}  ${qualifications[4]}  <br>  ${numbers[5]}  ${qualifications[5]}  <br>  ${numbers[6]}  ${qualifications[6]} <br>  ${numbers[7]}  ${qualifications[7]} <br><br>`]
document.write(naming);

// Q:8
var studentNames = ["Shazia", "Ali", "Ahmed"];
var studentScores = [385, 466, 358];

 document.write(`Score of ${studentNames[0]} is ${studentScores[0]} Percentage of ${studentNames[0]} is ${(studentScores[0] / 500) * 100}% <br>
 Score of ${studentNames[1]} is ${studentScores[1]} Percentage of ${studentNames[1]} is ${(studentScores[1] / 500) * 100}%<br>
Score of ${studentNames[2]} is ${studentScores[2]}   Percentage of ${studentNames[2]} is ${(studentScores[2] / 500) * 100}% <br><br>`)



// Q:9
var colorNames = ["Red", "Green", "Blue", "Yellow", "Orange"];
console.log(colorNames);
// a
var coloradd = prompt ("Enter the color u want at beginning");
colorNames.unshift(coloradd);
console.log(colorNames);

// b
var coloradd = prompt ("Enter the color u want at end");
colorNames.push(coloradd);
console.log(colorNames);

// c

colorNames.unshift("Mint green", "Pink");
console.log(colorNames);

// d
colorNames.shift();
console.log(colorNames);

// e
colorNames.pop();
console.log(colorNames);

// f
var index = +prompt("Enter the index where you want to add color");
var coloradd = prompt("Enter the color you want to add");
colorNames.splice(index, 0, coloradd);
console.log(colorNames);


// g
var dlet = +prompt("Enter the index where you want to delete color");
colorNames.splice(dlet, 2);
console.log(colorNames);




// Q:10
var scofst = [320, 230, 480, 120];
var sort = scofst.sort();
document.write(` Ordered Scores of Students: ${sort} <br> <br>`);

// Q:11

var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cityName.slice(2, 4);
// 2 is included nd 4 is excluded
console.log(selectedCities);


// Q:12

var arr = ["This", "is", "my", "cat"];
var join = arr.join(" ");
console.log(join);

// Q:13

// var arr1 = [];
// arr1.push("Keyboard");
// arr1.push("Mouse");
// console.log(arr1);


// Q13 In FIFO, you add from the end with push() and take out from the start with shift().
var stationary = [];
stationary.push("pencil");
stationary.push("eraser");
stationary.push("sharpener");
stationary.push("Ruler");
console.log("Stationary: " + stationary);

console.log("First In First Out:");
console.log("1st: " + stationary[0] );
console.log("2nd: " + stationary[1] );
console.log("3rd: " + stationary[2] );
console.log("4th: " + stationary[3] );

var firstOut = stationary.shift(); 
console.log("Out: " + firstOut );
console.log("Remaining: " + stationary);

// End