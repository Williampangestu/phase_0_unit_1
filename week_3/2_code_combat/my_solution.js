// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
I worked on this challenge by myself.

// RESCUE MISSION
// move down x2
// move right x1
// move up x2
// move right x2
// move down x2 
// Attack!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();
 
// GRAB THE MUSHROOM
// move up x1
// move right x1 to get the mushroom
// move left x1 to get back to the route
// move up x1
// Attack!

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// DRINK ME
// move right x1
// attack the enemy
// move right x1 to go into the the alley
// move down x1 to get the potion
// move up x1 to get out of the alley
// move right x1
// attack the enemy

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// TAUNT THE GUARDS
// move right
// bust the door 
// To lure the ogre: 
// move right x2 
// say something to make the ogre chase you 
// move left x2 
// move up 
// attack the enemy
// To escape from the dungeon:
// say something to make the archer follow you
// move down x1
// move right x2
// move up x1
// move right x1 
// say something to make the ogres chase you
// move down x1
// move right x1
// move up x1
// move right x1

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
this.say("Attack!");

this.say("Follow me.");
this.moveDown();
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// IT'S A TRAP
// move down x2 
// say something to taunt the ogre
// move up x2 to run from the ogre

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

// TAUNT
// say something to ogre x4 to taunt him

this.say("Hey!");
this.say("Come Here!");
this.say("You ugly Ogre");
this.say("I will kill you!");

// COWARDLY TAUNT 
// move to a coordinate near the ogres
// say something to taunt them
// go back the the safe spot

this.moveXY(47,19);
this.say("Hey Ogres");
this.moveXY(70, 10);

// COMMANDING FOLLOWERS
// tell the soldiers to follow you
// move to the ogres
// tell the soldiers to attack the ogres

this.say("Follow me soldiers!");
this.moveXY(61,41);
this.say("ATTACK!");

// MOBILE ARTILLERY
// move close to the ogres
// attack them x3
// move close to the other ogres
// attack them x3

this.moveXY(60, 22);
this.attackXY(68, 51);
this.attackXY(69, 48);
this.attackXY(67, 44);

this.moveXY(44, 33);
this.attackXY(47, 63);
this.attackXY(46, 60);
this.attackXY(42, 52);


Release 3:
 * What is this referring to? Think programming-wise rather than in the terms of the game.
 "this" is refferring to a method such as attack, move, say, etc.

 * What does the () do in JavaScript?
 () is used to in Javascript to interprets a method. Without it, Javascript will think of it as a property.

 * What is the point of the semicolons?
 semicolons is used in Javascript to separate statements.
 
 
Reflection:

* What parts of your strategy worked? What problems did you face?
I found that writing pseudocode before writing the actuall code to be really helpful. It helps me to think about the solution first rather than just jump into writing the actual code.

* What questions did you have while coding? What resources did you find to help you answer them? What concepts are you having trouble with, or did you just figure something out? If so, what?
I did not have any questions and trouble yet since this is still bacis Javascript.

* Did you learn any new skills or tricks?
I learn about Javascript.

* How confident are you with each of the Learning Competencies?
I am pretty confident with each of the them since this is still pretty basic Javascript.

* Which parts of the challenge did you enjoy?
I enjoyed the part where I had to pseudocode before I write the code. 

* Which parts of the challenge did you find tedious?
Nothing.











