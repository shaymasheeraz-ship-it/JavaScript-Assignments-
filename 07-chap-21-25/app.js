// // Q:1
// var first = prompt("Enter your first name")
// var sec = prompt("Enter your second name")
// console.log("Welcome," + first + sec);



// // Q:2
// var mob = prompt("Enter your favourite mobile phone model")
// var userlength = mob.length
// console.log("My favourite model is:" + mob + userlength);




// // Q:3
// var string = "Pakistan";
// var num = string.indexOf("n")
// console.log("String: " + string + "\nIndex of 'n': " + num);



// // Q:4
// var string = "Hello World";
// var last = string.lastIndexOf("l");
// console.log("string: " + string + "\nLast index of 'l': " + last);





// // Q:5
// var string = "Pakistani";
// var char = "";

// for(var i = 0; i < string.length; i++){
//     if(i === 3){
//         char = string[i];
//     }
// }
// console.log("String: " + string);
// console.log("Character at index 3: " + char);
// // Q:6



// // Q:7


// var city = "Hyderabad"
//     var newcity = city.replace("Hyderabad", "Islamabad")
//     console.log("city: " + city )
//     console.log("After replacement: " + newcity);

// // Q:8

// var text = "Ali and sami are best friends. They play cricket and football together.";

//     var newtext = text.replaceAll("and", "&")
//     console.log("text: " + text )
//     console.log("After replacement: " + newtext);


// // Q:9



// // Q:10
// var user = prompt("Enter anything:")
// var capital = user.toUpperCase()
// console.log("user input: " + user);
// console.log("UpperCase: " + capital);



// // Q:11

// // var user = prompt("Enter any fruit name:(titleCase)")
// // var title = user.toTitlecase(user)
// // console.log("user input: " + user);
// // console.log("UpperCase: " + title);


// // Q:12
// // toString  converts a um into string
// var num = 35.36;
// var str = num.toString();
// var replace = str.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("After replacement: " + replace);

// // Q:13
// // includes Kisi word / sentence ke andar koi letter ya word hai ya nahi ye check karta.

// var username = prompt("Enter username:");
// if(username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")){
//     alert("Please enter a valid username");
// }



// // // Q:14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("What do you want to order sir:");
// var casel = userInput.toLowerCase();

// var flag = "not available";

// for(var i = 0; i < items.length; i++){
//     if(items[i].toLowerCase() === casel){
//         flag = "available";
//         break;
//     }
// }

// if(flag === "available"){
//     alert(userInput + " is available at index " + i + " in our bakery");
// }
// else{
//     alert("We are sorry. " + userInput + " is not available in our bakery");
// }

// // Q:15



// var pass = prompt("Enter ur password");
// // using--flag
// var hasalphabets = false
// var hasnumbers= false
// var startWithNumber = false
// if(pass.length < 6){
//     alert("It must at least 6 characters long");



// }else{
//     for(var i =0 ; i<pass.length ; i++)
//         var code = pass.charCodeAt(i)
//     if((code>=65 && code <=90)|| (code>=97 && code <=122)){
//         hasalphabets = true
//     }

//    if(code>=48 && code <=57){
// hasnumber=true

// }
// if(i === 0 && code>=48 && code<=57)
//     startWithNumber = true
    

// }

// if(hasalphabets!== true){
//     alert("Passwod must contain alphabets")
// }


// if(!hasnumbers){
//     alert("Password must contain numbers")
// }


// if(!startWithNumber){
//         alert("Password must not start with a  numbers")

// }


// // Q:16

// var uni = "University of Karachi";
// var arr = uni.split("");

// for(var i = 0; i < arr.length; i++){
//     console.log( arr[i] );
//`  }


// // Q:17
// var string = "Pakistan"
// var char = string[string.length - 1];
// // Kyunki index 0 se start hota hai, is liye last index hamesha length se 1 kam hota hai.



// // Q:18
// // var str = "The quick brown fox jumps over the lazy dog"

// var str = "The quick brown fox jumps over the lazy dog";
// var lowerStr = str.toLowerCase(); 
// var count = 0;

// for(var i = 0; i < lowerStr.length; i++){
//     if(lowerStr.slice(i, i + 3) === "the"){
//         count++;
//     }
// }

// console.log("Text: " + str );
// console.log("There are " + count + " occurrence(s) of word 'the'");




// (hasalphabets!== true)cam use both mwthod
// (!hasalphabets)



