var a = 10;

document.write("Result: <br>");
document.write("The value of a is: " + a + "<br>");
document.write("........................................... <br><br>");

var b = ++a;
document.write("The value of ++a is: " + b + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

var c = a++;
document.write("The value of a++ is: " + c + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

var d = --a;
document.write("The value of --a is: " + d + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

var e = a--;
document.write("The value of a-- is: " + e + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Q:2

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");

// Q:3
var userName = prompt("Enter your name:");
document.write("Hello, " + userName + "! Welcome." + "<br>");

// 5

var num = prompt("Enter a number for multiplication table:", "5");


if(num == "" || num == null){
  num = 5;
}

for(var i=1 ; i<=10 ; i++){
  document.write(num + " x " + i + " = " + num*i + "<br>");
}


    // Q:6
// a) 
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

// b)
var totalMarks = 100;

// c)
var obt1 = prompt("Enter obtained marks for " + sub1 + ":");
var obt2 = prompt("Enter obtained marks for " + sub2 + ":");
var obt3 = prompt("Enter obtained marks for " + sub3 + ":");

//
var o1 = Number(obt1);
var o2 = Number(obt2);
var o3 = Number(obt3);

// e)
var totalObtained = o1 + o2 + o3;
var totalAll = totalMarks * 3;
var percentage = (totalObtained / totalAll) * 100;

var per1 = (o1 / totalMarks) * 100;
var per2 = (o2 / totalMarks) * 100;
var per3 = (o3 / totalMarks) * 100;
document.write(`
<table border='1'>
<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>
<tr><td>${sub1}</td><td>${totalMarks}</td><td>${o1}</td><td>${per1}%</td></tr>
<tr><td>${sub2}</td><td>${totalMarks}</td><td>${o2}</td><td>${per2}%</td></tr>
<tr><td>${sub3}</td><td>${totalMarks}</td><td>${o3}</td><td>${per3}%</td></tr>
<tr><th></th><th>${totalAll}</th><th>${totalObtained}</th><th>${percentage}%</th></tr>
</table>
`);