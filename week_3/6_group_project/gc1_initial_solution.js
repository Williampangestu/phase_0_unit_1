// Group project:
// Person 3: James Miller & Jeremy Wong

// Create Proper arrays
var add = [1, 2, 3, 4, 5, 9];

//var each = function(array,func){
//    for (var i=0; i<array.length; i++) {
//        func([array]); 
//        }
//    };

// TO CALCULATE THE SUM:
// create a function called sum that take an array as a parameter/argument
// inside the function, create a variable called 'answer' and set it equal to 0
// check / go through all elements inside the array using "for" loops
// add each element in the array to 'answer' and put the result of that addition back to 'answer', closed the for loop
function sum(sumArray){
var answer = 0;
//var answer = each(sumArray,function(x){
 //   return x;
//});
for (var i=0; i<sumArray.length; i++) {
var answer = answer + sumArray[i];}
return answer
};
console.log("Your sum is " + sum(add));


// return 'answer' and exit the function

// TO CALCULATE THE MEAN:
// create a function called mean that take an array as a parameter/argument
// inside the function, create a variable called 'answer' and set it equal to 0
// check / go through all elements inside the array using for loops
// add each element in the array to 'answer' and put the result of that addition back to 'answer', closed the for loop
// return 'answer' divided by the length of the array and exit the function
var mean = function(meanArray){
    var answer = 0;
    for (var i=0; i<meanArray.length; i++){
    var answer = answer + meanArray[i];
    var means = answer / meanArray.length;}
    return means;
};
console.log("Your mean is " + mean(add));



// TO CALCULATE THE MEDIAN:
// create a function called median that take an array as a parameter/argument
// inside the function, sort the array in ascending order using .sort method
// create a variable called 'middleNum' and set it equal to the result of calling Math.floor method on (length of the array divided by 2)
// use if and else statement
// if the length of the array is even number

// access the 'middleNum' of the array and the 'middleNum-1' of the array, add them together and divide it by 2. Return the result of this.
// else
// access the 'middleNum' of the array and return it
// exit the function
var median = function(medianArray) {
	var upArray = medianArray.sort();
// 	console.log(upArray);
	var middleNum = Math.floor(upArray.length / 2);
	if (upArray.length % 2 === 0) {
	    var middle = (upArray[middleNum-1] + upArray[middleNum]) / 2;
	    return middle;
	} else {
	    var middle = (upArray[middleNum]);
	    return middle;
	}
};
console.log("Your median is " + median(add));
