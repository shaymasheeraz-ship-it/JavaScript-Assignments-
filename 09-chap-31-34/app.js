// // 1
// var date = new Date()
// console.log(date);



// // 2

// var monthNames = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
// var today = new Date()
// var month = today.getMonth()
// var month = monthNames[month]
// console.log("current MOnth is : " + month);


// // 3

// var today = today.toString()
// var day = today.slice(0,3)
// console.log(day);



// // // 4
// var user = prompt("Enter day");
// var days = ["sunday", "saturday"];

// if (days.includes(user.toLowerCase())) { 
//     alert("It's Fun day"); 
// }



// 5

// var today = new Date();
// var date = today.getDate();

// if (date < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }


// 6|

// var date = new Date();

// var time = date.getTime();

// var divide = millisec / 60000;

// document.write("Current Date: " + date + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + divide);







// // 7

// var date = new Date();
// var hours = date.getHours();
// var mins = date.getMinutes();

// if (hours >= 12) {
//   ampm = "PM";
// } else {
//   ampm = "AM";
// }

// var hours = hours % 12;
// if (hours == 0) {
//   hours = 12;
// }

// console.log(hours + ":" + mins + " " + ampm);





// 8
// laterDate = new Date(2020, 12, 0)
// document.write("Later date: " + laterDate);



// // 9
// var firstRamadan = new Date("June 18, 2015")
// var today = new Date()
// // Diff in millisec
// var diff = today.getTime() - firstRamadan.getTime()

// var days = diff / (1000 * 60 * 60 * 24)
// var days = Math.floor(days);

// console.log(days + " days have passed since 1st Ramadan, 2015");



// 10

// var twentyfifteen = new Date("January 1, 2015");
//  var today = new Date()
// var diff = today.getTime() - twentyfifteen.getTime()
// var sec = diff / (1000)
// console.log(sec + " seconds have passed since 1st January, 2015");


// 11

// var current = new Date();
// var hours = current.getHours(); // hours extract

// console.log
// ("current date: " + current + "<br>");

// var ago = current.getHours(hours - 1); // 1 hour ahead reset

// console.log("1 hour ago, it was " + current);



// 12

// 13

// var age = +prompt("Enter your age");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is: " + birthYear);

