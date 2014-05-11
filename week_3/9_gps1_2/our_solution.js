// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. William Pangestu
//  2. Justin Harnoss


// 1. "YOU SIGNED... WHO?!"
var client1 = {
  name: "Schwarzennegger",
  age: 72,
  quote: "I will be back!",
};
  
// 2. "Here they Come!"

var client2 ={
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!",
};

var client3 = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?",
};

var client4 = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!",
};

var clients = [client1, client2, client3, client4];


// 3. "TIME IS MONEY!"
function Client (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote =quote;
};

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

Client.prototype.display = function () {
    console.log ("this person's name is " + this.name + " his/her age is " + this.age + " and his/her quote is " + this.quote) 
  }

client1.showQuote = function() {
  console.log (client1["quote"])
}

client1.showQuote = function() {
  console.log (this.quote)
}

client1.showQuote()

// ** BONUS **
// Diplaying all the client's properties in the Clients Array
for (i = 0; i < clients.length; i++){
  for(var x in clients[i]) {console.log(clients[i][x])}
}

// Push shooterMcGavin to Clients array 

Clients.push(shooterMcGavin);

// Automatically adds new Client to the Clients array, when prompt answered with "yes"

function Client (name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote =quote;
  var New_Client = [this.name, this.age, this.quote];
  this.add = prompt("yes or no");
  if (this.add === "yes"){clients.push(New_Client)}
};


//  Your Reflection:
// What parts of your strategy worked? What problems did you face?
// Our strategy of switching roles between nagivator and driver works perfectly. We finished the problem in quite a short amount of time
//
// What questions did you have while coding? What resources did you find to help you answer them?
// What concepts are you having trouble with, or did you just figure something out? If so, what?
// While coding for the bonus part, we had some questions on how to automatically add new clients to an array. 
// To solve this problems, we used our own notes. We also had questions about the parameter aspect of a function.
// Our guide for the pairing sessions help explained it to us.
//
// Did you learn any new skills or tricks?
// I learn how to use a prototype from Justin.
//
// How confident are you with each of the Learning Competencies?
// I am quite confident with each of them. I think I did all of them right.
//
// Which parts of the challenge did you enjoy?
// Pair programming with someone because we can help each other and also talk about and combining our ideas.
//
// Which parts of the challenge did you find tedious?
// None. 
// 