// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”,
//  welcome the user like this: “Welcome to city of lights”

// var cityName = prompt("Enter City Name") ;

// if(cityName == "Karachi"){
//     document.write("<h1 class = 'heading'>" +"Welcome to city of lights" + "</h1>");
// }

// Q2. Write a program to take “gender” as input from user. If
// the user is male, give the message: Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender");

// if(gender == "Female"){
//     document.write("<h3 class = 'gender'>" + "Good Morning Ma’am" + "</h3>")
// }
// if(gender == "Male"){
//     document.write("<h3 class = 'gender'>" + "Good Morning Sir" + "</h3>")
// }

// 3. Write a program to take input color of road traffic signal from the
//  user & show the
//  message according to this table:

// var color = prompt("Enter traffic signal color");

// if(color == "Red"){
//     document.write("<h3 class = 'gender'>" + "Must Stop" + "</h3>");

// }
// if(color == "Yellow"){
//     document.write("<h3 class = 'gender'>" + "Ready to move" + "</h3>");

// }
// if(color == "Green"){
//     document.write("<h3 class = 'gender'>" + "Move now" + "</h3>");

// }

// Q4.Write a program to take input remaining fuel in car (in litres) from
//  user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// var fuel = +prompt("How much fuel in your car");

// if(fuel < 0.25){
//     document.write("<h3 class = 'gender'>" + "Please refill the fuel in your car" + "</h3>");
// }

// Q5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// e. if (true){ alert("True"); } if (false){ alert("False"); }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// f. if("car" < "cat"){ alert("car is smaller than cat"); }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// Q6. Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:
// var subject1 = prompt("Enter your subject name");
// var subject2 = prompt("Enter your second subject name");
// var subject3 = prompt("Enter your third subject name");
// var subject1Marks = Number(prompt("enter your first subject marks"));
// var subject2Marks = Number(prompt("enter your second subject marks"));
// var subject3Marks = Number(prompt("enter your third subject marks"));
// var totalMarks = 300;
// var subject1Percentage = (subject1Marks / 100) * 100;
// var subject2Percentage = (subject2Marks / 100) * 100;
// var subject3Percentage = (subject3Marks / 100) * 100;
// var totalObMarks = subject1Marks + subject2Marks + subject3Marks;
// var totalPercentage = (totalObMarks / totalMarks) * 100;
// document.write(
//   "<table>" +
//     "<tr>" +
//     "<th>" +
//     "Subject" +
//     "</th>" +
//     "<th>" +
//     "Total Marks" +
//     "</th>" +
//     "<th>" +
//     "Obtained Marks" +
//     "</th>" +
//     "<th>" +
//     "Percentage" +
//     "</th>" +
//     "</tr>" +
//     "<tr>" +
//     "<td class='sub'>" +
//     subject1 +
//     "</td>" +
//     "<td>" +
//     100 +
//     "</td>" +
//     "<td>" +
//     subject1Marks +
//     "</td>" +
//     "<td>" +
//     subject1Percentage +
//     "%" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td class='sub'>" +
//     subject2 +
//     "</td>" +
//     "<td>" +
//     100 +
//     "</td>" +
//     "<td>" +
//     subject2Marks +
//     "</td>" +
//     "<td>" +
//     subject2Percentage +
//     "%" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td class='sub'>" +
//     subject3 +
//     "</td>" +
//     "<td>" +
//     100 +
//     "</td>" +
//     "<td>" +
//     subject3Marks +
//     "</td>" +
//     "<td>" +
//     subject3Percentage +
//     "%" +
//     "</td>" +
//     "</tr>" +
//     "<tfoot>" +
//     "<td>" +
//     "</td>" +
//     "<td>" +
//     300 +
//     "</td>" +
//     "<td>" +
//     totalObMarks +
//     "</td>" +
//     "<td>" +
//     totalPercentage +
//     "%" +
//     "</td>" +
//     "</tfoot>" +
//     "</table>"
// );


// Q7.Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. a. If user guesses the same number, 
// show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, 
//  show “Close enough to the correct answer”.
var num = 6 ;

var ans = +prompt("guess game enter a number 1 t0 10");
var ans2 = ans - 1;
if (num === ans){
    document.write("<h3 class = 'gender'>" + "Bingo! Correct answer" + "</h3>");
}
if(num === ans2){
     document.write("<h3 class = 'gender'>" + "Close enough to the correct answer" + "</h3>")

}

// Q8. Write a program to check whether the given number is divisible by
//  3. Show the message to the user if the number is divisible by 3.

// Q9.Write a program that checks whether the given input is an even number or an odd number.

// Q10. Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

// Q11.Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
