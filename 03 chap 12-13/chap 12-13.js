// Q:1

var input = 'H'; // Change this value to test ('a', 'Z', '5', etc.)

var asciiCode = typeof input === 'string' ? input.charCodeAt(0) : String(input).charCodeAt(0);

if (asciiCode >= 65 && asciiCode <= 90) {
    console.log(input + " is an Upper Case letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log(input + " is a Lower Case letter.");
} else if (asciiCode >= 48 && asciiCode <= 57) {
    console.log(input + " is a Number (Digit).");
} else {
    console.log(input + " is a Special Character or Not Recognized.");
}



// Q:2
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));


if(num1 > num2) {
    alert("The large number is" + num1);
}
else if (num2 > num1) {
    alert("The large number is" + num2);
}
else if (num1 === num2) {
    alert("Both numbers are equal");
}

// Q:3
var num1 = Number(prompt("Enter the number:"));

if(num1 > 0) {
    alert("The number is positive");
}
else if (num1 < 0) {
    alert("The number is negative");
}
else if (num1 === 0) {
    alert("The number is zero");
}

// Q:4
var chr = prompt("Enter a single character:");

if(chr === "a" || chr === "e" || chr === "i" || chr === "o" || chr === "u") {
    alert("The character is a vowel");
}
else if(chr !== "a" && chr !== "e" && chr !== "i" && chr !== "o" && chr !== "u"){
    alert("The character is a consonant,not a vowel");
}

// Q:5


var correctPassword = "abc123";
var chr = prompt("Enter a password:");

if(chr === "" || chr === null) {
    alert("Please enter your password");
} // null is having no value and no Box of text ; "" is having space of text bug not text itslf
else if(chr === correctPassword) {
    alert("Password is correct");
}
else if(chr !== correctPassword) {
    alert("Password is incorrect");
}


// Q:6
var greeting;
var hour = prompt("Enter the hour (0-23):");

if(hour === "" || hour === null) {
    alert("Please enter the hour");
} 
else if(hour < 18) {
    alert(greeting = "Good day");
}

else if(hour >= 18) {
   alert(greeting = "Good evening");

}

// Q:7

var greeting;
var hour = prompt("Enter the hour in 24hours format (0-23):");

if(hour === "" || hour === null) {
    alert("Please enter the hour");
} 
else if(hour > 0 && hour <= 12) {
    alert(greeting = "Good Morning");
}

else if(hour >= 13 && hour < 17) {
    alert(greeting = "Good Afternoon");
}
else if(hour > 17 && hour < 20) {
    alert(greeting = "Good Evening");
}
else if(hour > 20 && hour <= 24) {
    alert(greeting = "Good Night");
}







