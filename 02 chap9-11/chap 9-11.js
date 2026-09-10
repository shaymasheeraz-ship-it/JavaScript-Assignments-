

// Q:1
var cityName = prompt("Enter the name of your city:")
if (cityName === "Karachi") {
    console.log("Welcome to the city of lights!");
}
// Q:2
var gender = prompt("Enter your gender:");
if (gender === "male") {
    console.log("Welcome, Sir!");
} else if (gender === "female") {
    console.log("Welcome, Ma'am!");
}
// Q:3

var trafficSignal = prompt("Enter the color of the traffic signal (red, yellow, green):");
if (trafficSignal === "red") {
    console.log("Must Stop");
} else if (trafficSignal === "yellow") {
   console.log("Ready to move");
} else if (trafficSignal === "green") {
    console.log("Move now");
}




// Q:4
var fuel = prompt("remaining fuel in car (in litres):");
if (fuel <= 0.25) {
    console.log("Please refill the fuel in your car.");
}
// Q:5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost=== laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
var car = ("car");
var cat = ("cat");
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Q:6




  var sub1 = Number(prompt("Enter marks of Subject 1:"));
  var sub2 = Number(prompt("Enter marks of Subject 2:"));
  var sub3 = Number(prompt("Enter marks of Subject 3:"));
  var total = 200;

  var marksObtained = sub1 + sub2 + sub3;
  var percentage = (marksObtained / total) * 100;
  var grade, remarks;

  if(percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
  }
  else if(percentage >= 70){
    grade = "A";
    remarks = "Good";
  }
  else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
  }
  else {
    grade = "Fail";
    remarks = "Sorry";
  }

  document.write("<h2>Result Sheet</h2>");
  document.write("Total Marks: " + total + "<br>");
  document.write("Marks Obtained: " + marksObtained + "<br>");
  document.write("Percentage: " + percentage + "%<br>");
  document.write("Grade: " + grade + "<br>");
  document.write("Remarks: " + remarks);








// Q:7
var secretNumber = 7;
var userGuess = Number(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer.");
}
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    console.log("Close enough to the correct answer.");
}

// Q:8
var num = Number(prompt("Enter a number:"));
var divideRule = ( num/ 3) ;

if (num%3 === 0 ) {
    console.log(num + " is divisible by 3.");
} 



// Q:9
var num = Number(prompt("Enter a number:"));
if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}

// Q:10
var temp = Number(prompt("Enter the temperature:"));
if (temp > 40) {
    console.log("It is too hot outside.");
}
var temp2 = Number(prompt ("Enter another temperature:"))
if (temp2 > 30) {
    console.log("The Weather today is Normal.");
}
var temp3 = Number(prompt ("Enter another temperature:"))
if (temp3 > 20) {
    console.log("Today's Weather is cool.");
}
var temp4 = Number(prompt ("Enter another temperature:"))
if (temp4 > 10) {
    console.log("OMG! Today's weather is so Cool.");
}

// Q:11
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else if (operation === "/") {
    console.log(num1 / num2);
} else if (operation === "%") {
    console.log(num1 % num2);
} // it gives  remainder

