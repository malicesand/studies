/**
 * LOOPS
 * 0: Loops are used to repeat code a set amount of times. They iterate over a piece of data and access the values within individually. Usually loops are used for the indexes of arrays and the properties on an object. Looping can also access the individual characters in strings and numbers with 2 or more digits. Loops are an essential building blocks of source code, and their variants can be broad or specifically structured for one type of data. When creating a loop, it is important to avoid the creation of an infinite loop. If the wrong expressions or boundaries are set, the code will execute forever. An infinite loop can crash a program.
 * 
 * The three main components of a loop are the 
    * Statement, 
    * Expression(s), and 
    * Code Block.
*
* These concepts are best elucidated by presenting them in context....
 * 
 * 1: For, For-in, and While Loops
 * 
 * For Loops 
 * The most straight forward because it's syntax mirrors the foundational structure of a loop. They are also the most 'generic' of the loops, in that they can be used on the most datatypes. It loops through a block of code a number of times.
 * 
 * Looped arrays follow this basic structure:
     for (var i = 0; i < array.length; i++) { code block }
  
 * where...
    * for: statement
    *  var i = 0 : expression 1: assignment operation where i represents the zero index (initializes)
    *  i < array.length: expression 2 : comparison operatrion, checks if index meets condition (tests)
    *  i ++ : expression 3 : arithmetic operation representing index increments to iteratate (updates)
    * {} : code block : the code to be executed on elements at indexes indicated above
   
 * In other words...
 *  "For the elements in parenthesis, start at the zero index and progress to the next index, executing code until the last index."
 * The for loop structure works on arrays, strings, and numbers.  
 *     
 * For-In Loops
 * Essentially for loops but when the code needs to be executed across the properties of an object
 * 
 * for (var keys in object) { code block }
    "For the keys in this object, execute this code"
 * 
 * While Loops
 * Iterate through code blocks 'while' a condition is true. These are best utilized when it is known beforehand how many times the intended loop will execute. They start with the while keyword, followed by a boolean condition. The subsequent code block will repeat as long as the expression resolves to true. Instead of the index incrementer, while loops have a counter at the bottom of the code block that updates after each execution. Absence of the counter variable will result in an infinite loop.
 * 
 * while (condtion) { code block; counter }
    " while this condition is met, execute this code. Update the counter."
 * 
 * 2: Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 * 3: Loop over an Array, forwards and backwards
 * 
 * Arrays can be looped over forwards and backwards. Backwards iteration can be achieved by initializing at the the end of the array, using the zero index as the test condition, and using a decrementer in the update expression
 * 
 * for (var i = array.length - 1; i >= 0; i --) { code block } 
    " For the given array, execute the indicated code starting at the last index, progressing to that index - 1, stopping at the 0 index "
 * 
 * 4: Loop over an Object
 * 
 * 
 * 
 * 
 */


// 2. Loop over any number, any number of times, counting forward or backward to some limit.
    // sounds like a job for a while loop!
    
// FORWARD
    // initial variable < limit
        // increment

var num = 0 // initialize 
while (num <= 20) { // set limit 
    console.log(num); // code  ==> prints 0 5 10 15 20  
    num += 5; // increments 5 integars on each loop
} // a negative increment ( num -= 5 ) would create an infinite loop

// BACKWARD
    // initial variable > limit
        // decrement

var count = 10    // initialize
var countDown = ''  // global variable
while (count > 0) {  // set limit 
    countDown += ' ' + count; // code ==> adds a space and a count to the global variable
    count -- // decrements (negative increment) 1 integar on each lop
}
console.log(countDown) // prints " 10 9 8 7 6 5 4 3 2 1" to the console


// 3. Looping over arrays, forwards and backwards?  
    // Use a for loop! Also works with strings.

// FORWARD

var arr = [1, 2, 3, 4, 5, 6, 7] 
//  for variable arr, start at the zero index iterate every other element until the last index
for (var i = 0; i < arr.length; i += 2) {
    console.log(arr[i]) // prints 1, 3, 5, 7 individually to the console 
}

// BACKWARD 
    
var pal = 'Tacocat'
var lap = ''

for (let i = pal.length - 1; i >= 0; i--) {   // for string pal, start at the last character and execute code working down the string
	lap += pal[i]
}
console.log(lap) // prints 'tacocaT' to the console

// 4. Loop over Object Properties with a For - In Loop!

// an object used by a zoo to keep track of which animals have been fed
var zooMeals = {
    monkey: 'no',
    zebra: 'no',
    koala: 'yes'
}

// create a function that updates the feeding status of all animals to 'yes'

function updateZoo(zooMeals) { // update zoo takes in one input, the zooMeals object
	for (var key in zooMeals) { // for every key in zooMeals
		if (zooMeals[key] === 'no') { // check if the value at the key is 'no'
			zooMeals[key] = 'yes' // if so, change to 'yes'
		}
	}
	return zooMeals // return object
}

updateZoo(zooMeals) // calling the function changes the values at monkey and zebra to yes
// even though the koala property was not changed, code was still executed on it on it passed through the "check" at the if-statment
