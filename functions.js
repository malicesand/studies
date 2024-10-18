/**
 * FUNCTIONS
 
 * 0: Functions are reusable blocks of code, allowing programmers to avoid rewriting the same code multiple times. 
 Structured with: 
    * Name
    * Pararmeters/agruments
    * Function body
    * Return statement

 * 1:  Two phases for using a function:
    * Definition
    * Invocation
* Before a function can be implemented in code,  it must first be defined.
function name (parameter) {
    function body
    function body
    return statement
}
invocation 
name(arguments)
*/

function sum(param1, param2) {
    return param1 + param2
}
// calling
sum(10, 20) // resolves to 30

/*Initialization
First we must _? Next we can execute (or two other words for executing a function?) a function by?
 
 * 2: Functions take in two types of values: parameters and argumentsWhat's teh difference between a functions parameters and arguments PASSED to a function?
    * Parameters serve as placeholder
    * Arguments -- the actual input values --- what goes in place of the param-- what the param is holding space for

 * 3: What's the syntax for a NAMED function? 

 * 4: How do we assign a function to a variable?
    * Assign a function to a variable using expression

 *  5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specififuy inputs, and how do we specify outputs?
    * Both can be specified in the assignment parenthesis
    * alternatively, outputs can be declared inside the function as a permanent part of the code block
    * brings us again to reduce and seed
  
 * 6: Scope: functions can see and modify variables in parent or global scopes. The inverse is NOT true
    * functions and code blocks have access to all variables initialized in their parent scope or global scope. However, any variables declared within are closed to the outside environment. The only way to free them is to return them as an output variable
 
 * 7: Closures: Functions form closures around the data they house. IF an object returned from teh FUnction and is held in memeory somewhere (referenced), that closure stays ALIE, and data can continue to exist in these colosures!
 * 
 * 
 */