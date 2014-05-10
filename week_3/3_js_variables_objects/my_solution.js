//I paired by myself on this challenge.



// Pseudocode
// 1. create a variable called secretNumber and give it a value of any number.
// 2. create another variable called secretNumber and give it a value of 7.
// 3. create a variable called password and give it a value of any word/string.
// 4. create another variable called password and give it a value of "just open the door".
// 5. create a variable called allowedIn and give it a value of a boolean.
// 6. create another variable called allowedIn and give it a value of false.
// 7. create a variable called members and set it equal to an empty array.
// 8. create another variable called members and set it equal to an array that have "John" as its first element.
// 9. create another variable called members and set it equal to an array that have "Mary" as its fourth element.


// __________________________________________
// Write your code below.

var secretNumber = 1;
var secretNumber = 7;
var password = "Hai";
var password = "just open the door";
var allowedIn = true;
var allowedIn = false;
var members = [];
var members = ["John"];
var members = ["John",2,3,"Mary"];


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
// I can't think of any way to refactor the code since I am just storing some values inside a variable. I think the code is already great and concise. 




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// What parts of your strategy worked? What problems did you face?
// My strategy of writing a pseudocode first and then translating it to a real code worked perfectly.
// 
// What questions did you have while coding? What resources did you find to help you answer them? 
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I did not have any questions or trouble while doing this challenge since it is a pretty simple and easy one.
// 
// Did you learn any new skills or tricks?
// I did not learn any new skills or tricks.
// 
// How confident are you with each of the Learning Competencies?
// I am pretty confident with each of them. I think I did a good job on writing a pseudocode first and then translating them to a real code.
// 
// Which parts of the challenge did you enjoy?
// The parts where I have to write a pseudocode.
// 
// Which parts of the challenge did you find tedious?
// None.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

