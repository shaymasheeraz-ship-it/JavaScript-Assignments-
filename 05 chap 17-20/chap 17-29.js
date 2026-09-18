// Q:1
var arr =[ [  [ ] ] , [ ] , [ [ ] ] , [ ] , [ ]  ];
console .log(arr);

// Q:2

var multiarr = [ [ [0] , [1] , [2] , [3]] ,
 [ [1] , [0] , [1] , [2]] ,
  [ [2] , [1] , [0] , [1]] ];
console.log(multiarr[0][0][0], multiarr[0][1][0], multiarr[0][2][0], multiarr[0][3][0]);
console.log(multiarr[1][0][0], multiarr[1][1][0], multiarr[1][2][0], multiarr[1][3][0]);
console.log(multiarr[2][0][0], multiarr[2][1][0], multiarr[2][2][0], multiarr[2][3][0]);
;


// Q:3
for(var i = 1 ; i <= 10 ; i++){
    console .log(i);
}


// Q:4
var num = +prompt("Enter a number for table:");
var length = +prompt("Enter length of table:");
for(var i = 1 ; i <= length ; i++){
    console .log(`${num} x ${i} = ${num*i}`);
}

// Q:5
var fruitsnames = ["apple" , "Orange" , "mango" , "banana" , "strawberry"];
for(var i = 0 ; i < fruitsnames.length ; i++){
    console .log(fruitsnames[i]);
}

// Q:6
// a
for(var i = 1 ; i <= 15 ; i++){
    console .log(i);
}

// b
for(var i = 10 ; i >= 1 ; i--){
    console .log(i);
}

// c

for(var i = 0 ; i <= 20 ; i++){
    if(i % 2 === 0){
        console .log(i);
    }
}

// d
for(var i = 0 ; i <= 20 ; i++){
    if(i % 2 !== 0){
        console .log(i);
    }
}

// e
for(var i = 2 ; i <= 20 ; i++){
    if(i % 2 === 0){
        console .log(i + "k");
    }
}

// Q:7
var userFruits = prompt("Enter your favorite fruits name:");
var flag = "not available"
var fruit = ["apple" , "Orange" , "mango" , "banana" , "strawberry"];
for(var i = 0 ; i < fruit.length ; i++){
    if(userFruits === fruit[i]){
        flag = "available"
    console .log(userFruits,"is available");
    }
}
if(flag == "not available"){
      console .log(userFruits,"is not available");
}




// Q:8
var numbers = [24, 53, 78, 91, 12];

var largest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is: " + largest);





// Q:9
var numbers = [24, 53, 78, 91, 12];

var smallest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Smallest number is: " + smallest);


// Q:10


for (var i = 5; i <= 100; i = i + 5) {
    console.log(i);
}