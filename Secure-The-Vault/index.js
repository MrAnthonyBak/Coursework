//Found out user's name.
//Give user prompt message.
//Have user solve 3 math problems.
//Answers to math problems must be = 1) 10, 2) 40 and 3) 39
//If user answers all 3 questions correctly, show image of open vault.


//Step 1 - Get user's name
const userName = prompt("What is your name?");
console.log(userName);


//Step 2 - Give challenge
const greeting = ("Hello " + userName + "! You have received this message because you have been chosen to open an important vault. Here is the secret combination:");
console.log(greeting);


//Question 1: Answer = 10
var q1 = 5 + 5;
const q1q = prompt("What is 5 + 5?");
console.log(q1q);


//Question 2: Answer = 40
var q2 = 60 - 20;
const q2q = prompt("What is 60 - 20?")
console.log(q2q);


//Question 3: Answer = 39
var q3 = 3 * 13;
const q3q = prompt("What is 3 * 13?")
console.log(q3q);


//Show image of open vault!
alert("Awesome! You secured the vault! The vault combination was " + q1q + ", " + q2q + ", "  + q3q + ".");
