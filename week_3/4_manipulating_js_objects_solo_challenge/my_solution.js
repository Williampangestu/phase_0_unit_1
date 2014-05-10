// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
   create new variable called Adam and make it into an object with empty properties.

2. Give adam a name property with the value "Adam".
   create a name property of adam object and set it equal to "Adam".

3. Add a spouse property to terah and assign it the value of adam.
   create a spouse property of terah object and set it equal to adam.

4. Change the value of the terah weight property to 125.
   create another weight property of terah object and set it equal to 125.

5. Remove the eyeColor property from terah.
   delete eyeColor property from terah object.

6. Add a spouse property to adam and assign it the value of terah.
   create a spouse property of adam object and set it equal to terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
   create another property to terah object called children and set it equal to an object with empty properties.

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
  create a property called name inside terah children property and set it equal to "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
   create a property called name inside terah children property and set it equal to "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    create a property called name inside terah children property and set it equal to "Colton".

11. Add a children property to adam and assign it the value of terah children.
    create a children property to adam object and set it equal to terah children property.

*/

// __________________________________________
// Write your code below.

var adam = {};

var adam = {
  name: "Adam",
};

var terah = {
  spouse: adam,
};

terah["weight"] = 125

delete terah["eyeColor"];

adam["spouse"] = terah;

terah["children"] = {};

terah["children"]["carson"] = {
  name: "Carson"
};

terah["children"]["carter"] = {
  name: "Carter"
};

terah["children"]["colton"] = {
  name: "Colton"
};

adam["children"] = terah["children"]


// __________________________________________
// Reflection: Use the reflection guidelines
// 
// What parts of your strategy worked? What problems did you face?
// writing the pseudocode and translating it into the actual code. I did not have any problem when I was doing it.
//
// What questions did you have while coding? What resources did you find to help you answer them?
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// I did not have any trouble understanding the concept. However, I had a question on how to delete a property of an object while I work on number 5.
// I used stackoverflow to help me answer my question.
//
// Did you learn any new skills or tricks?
// I learn how to delete a property of an object.
//
// How confident are you with each of the Learning Competencies?
// I am quite confident with each of them. I think I did all of them right.
//
// Which parts of the challenge did you enjoy?
// translating the pseudocode into the actual code.
//
// Which parts of the challenge did you find tedious?
// writing pseudocode for the outline because I felt like the outline instructions is sort of like a pseudocode already. 
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)