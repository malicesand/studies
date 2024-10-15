/**
 * CONTROL FLOW
 * 0: In programming it is necessary to ensure code executes in the intended order. In addtion to the rules involving the hoisting of variables and chaining methods, is control flow within functions and code blocks. Code flow hinges on conditional chaining and boolean reasoning. Code can be setup to follow a set of conditions and execute depending on the boolean returned. All statements will execute from top to bottom, but the use of conditional statements allow us to place a fork in the road.
 * 
 * 1: If Statements 
 * An if-statment is the start of conditional chains. It implies "if this condition is met (or is not), execute the follow code block". These statements can stand on their own within a block of code, be chained with other if statements, or be the start of an if-else-if chain. With a chain of multiple if-statments, all of them will be evaluated, even if the first one resolves to true. This only changes when there is a return within the code block.
 * 
 * 2: Else-if
 * Creating a chain of if-else-if makes it clear that the conditions are related and that only one of them will resolve to true. An else-if chain the code will stop executing as soon as a condition is met, saving processing time. Unlike if-statements, else-if syntax cannot stand on it's own. These conditionals must be preceded by an if-statement, but they can be followed by more else-if statements or an else statment. 
 * 3: Else
 * 
 * There is no condtion contained within an else-statement, making it operate as a default. It implies that if none of the if-statemnts and/or else-if statements conditions were met, this final code block is the one to be executed. Like else-if, an else statment cannot stand on it's own. It does not need to be in a chain with else-if, but can directly follow just an if-statment. 
 * 4: Switch
 * 
 * A switch statemnt can make for a cleaner code than an if-else-if chain in certain use cases. This method of control flow involves comparing the value of the input expression (the switch) with the values of cases nested in code block. When a match is found, the associated block of code will be executed. To stop the code from moving onto the next case, a break keyword can be put at the end of the switch block. If no match is found, a default can be placed at the very end of the case list. This default operates much like the else-statement in the if-else-if chain
 */


// 1. IF - STATEMENTS //
    if (1 === 2) {  // false
        console.log('they are the same number') // prints nothing to the console because the boolean resolved to false
    }
    if (1 !== 2) { // true
        console.log('these are not the same number') // prints to console because the statement resolved to true
    }
// 2. ELSE -IF //
    // we can chain the above statements together as else - if conditions
        // this implies the statements cannot both resolve to true

    if (1 !== 2) { // true
        console.log('thse are not the same number') // prints to console
    } else if (1 === 2) { // code execution stops because above condition was met
        console.log('they are the same number') // does not print to console
    }

// 3. ELSE //
    // what if we want something to print to the console even if a condition is not met?
    if (time < 1200) { // condition 1
        console.log('Good Morning!'); // code to execute if condition 1 is met
    } else if (time < 17) { // condition 2. 
        //Although the range includes the numbers in condition 1, this code will not execute if that first statement resolves to true
        console.log('Good Afternoon'); // execute if condition 2 is met
    } else if (time < 20) { // condition 3
        console.log('Good Evening'); // code to execute if condition 3 is met
    } else { // no condtional
        console.log('Go to bed!'); // code to execute if none of the above conditions are met
    }

// 4. SWITCH STATEMENTS //

var color = 'red' // input variable

switch (color) { // switch statement, evaluated once, resolves to search for a case of 'red'
  
    case 'orange ': // not a match, moves to next case
        console.log('The color provided was orange')
        break;
    case 'red': // match, moves to code block
        console.log('The color provided was red') // prints to console
        break; // stops code execution
    case 'yellow': // not read because break statement above
        console.log('The color provided was yellow')
        break;
    default: // not read because of break statement in switch block
        console.log('Sorry, that is not a color we recognize') // what would print to the console if input expression did not match one of the cases.

}