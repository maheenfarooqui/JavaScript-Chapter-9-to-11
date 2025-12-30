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
var sub1 = +prompt("enter your marks");
var sub2 = +prompt("enter your marks");
var sub3 = +prompt("enter your marks");
var obtMarks = sub1 + sub2 + sub3;
var totalMarks = 300;
var remarks, grade;
var percent = (obtMarks / 300) * 100;
if (percent > 100) {
  obtMarks = "invalid Marks";
  percent = "invalid";
  grade = "invalid grade";
  remarks = "sorry write correct marks";
} else if (percent >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percent >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percent >= 60) {
  grade = "B";
  remarks = "keep going";
} else if (percent >= 50) {
  grade = "c";
  remarks = "Sorry";
}
document.write("<h1>Mark Sheet</h1><br>");
document.write("Total MArks: " + totalMarks + "<br>");
document.write("Marks obtain: " + obtMarks + "<br>");
document.write("Percentage: " + percent + " %" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

document.write(
  "<table>" +
    "<tr>" +
    "<th>Percentage % </th>" +
    "<th>Grade</th>" +
    "<th>Remarks</th>" +
    "</tr>" +
    "<tr>" +
    "<td>Greater than and equal to 80</td>" +
    +"<td>" +
    grade +
    "</td>" +
    "<td>" +
    remarks +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "Greater than and equal to 70</td>" +
    "<td>" +
    grade +
    "</td>" +
    "<td>" +
    remarks +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Greater than and equal to 60</td>" +
    "<td>" +
    grade +
    "</td>" +
    "<td>" +
    remarks +
    "</td>" +
    "</tr>" +
    "</table> "
);

// Q7.Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number. a. If user guesses the same number,
// show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number,
//  show “Close enough to the correct answer”.
// var num = 6 ;

// var ans = Number(prompt("guess game enter a number 1 t0 10"));
// if (num === ans){
//     document.write("<h3 class = 'gender'>" + "Bingo! Correct answer" + "</h3>");
// }
// if(ans == 7){
//      document.write("<h3 class = 'gender'>" + "Close enough to the correct answer" + "</h3>")

// }
// if(ans == 5){
//      document.write("<h3 class = 'gender'>" + "Close enough to the correct answer" + "</h3>")

// }

// Q8. Write a program to check whether the given number is divisible by
//  3. Show the message to the user if the number is divisible by 3.

// var myNum = Number(prompt("enter Number"));
// if(myNum % 3 == 0){
//     document.write("<h3 class = 'gender'>" + "number is divisible by 3" + "</h3>")
// }

// Q9.Write a program that checks whether the given input is an even number or an odd number.

// var givenNum = Number(prompt("enter number"));
// if(givenNum  % 2 == 0){
//      document.write("<h3 class = 'gender'>" + "an even number" + "</h3>")
// }
// if(givenNum % 2 == 1){
//      document.write("<h3 class = 'gender'>" + "an odd number" + "</h3>")
// }

// Q10. Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = Number(prompt("Enter today temperature"));
// if(temperature >= 40){
//     document.write("<h3 class = 'gender'>" + "It is too hot outside." + "</h3>")

// }
// if(temperature <= 30){
//     document.write("<h3 class = 'gender'>" + "The Weather today is Normal." + "</h3>")

// }
// if(temperature <= 20){
//     document.write("<h3 class = 'gender'>" + "Today’s Weather is cool." + "</h3>")

// }
// if(temperature <= 10){
//     document.write("<h3 class = 'gender'>" + "OMG! Today’s weather is so Cool" + "</h3>")

// }
// Q11.Write a program to create a calculator for +,-,*, / & % using if statements.
//  Take the following input: a. First number b. Second number
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

// var myNum1 = Number(prompt("enter number"));
// var myOper = prompt("enter +, -, *, /, % ");
// var myNum2 = Number(prompt("enter number"));

// if(myOper == "+"){
//     document.write(myNum1+ "+" + myNum2 + "="+ (myNum1 + myNum2));
// }
// if(myOper == "-"){
//     document.write(myNum1+ "-" + myNum2 + "="+ (myNum1 - myNum2));
// }
// if(myOper == "*"){
//     document.write(myNum1+ "*" + myNum2 + "="+ myNum1 * myNum2);
// }
// if(myOper == "/"){
//     document.write(myNum1+ "/" + myNum2 + "="+ myNum1 / myNum2);
// }
// if(myOper == "%"){
//     document.write(myNum1+ "%" + myNum2 + "="+ myNum1 % myNum2);
// }
