/**
 * OPERATORS
 * 0: Operators process data, and then return new data. They are specific symbols used to execute mathematical, assignment, logical, and comparison operations. They are a key component of data manipulation and are pivotal when designing code to execute in the intended manner. When operators are used in code, they are bookended by 'operands', typically referred to as the 'left operand' and 'right operand'. Sometimes there will only be one operand (side will depend on use case)
 * 
 * 1: Assignment Operators
 * Used in assignment operations to assign values to variables. The most common one is simply known as 'assignment' and is represented as an equals sign (=). These operators can be chained to assign a single value to multiple variables.
 * 
 * 2: Arithmetic Operators
 * As the name implies, these operators are used execute arithmetic with numbers in a code block. The way to make a line of code into a mathematical expression. These operators and their corresponding symbols follow traditional math equations.
 * 
 * 3: Comparison Operators
 * Assesses the value of the left operand against that of the right operand. Used to perform logical operations that determine the equality or difference between values. Compares data and returns a boolean. Comparison operators will only ever truly resolve to a boolean value. Sometimes the boolean is the return value, but often these are used as test cases to direct the way a block of code executes. Comparison operators are a key component of conditional chains and control flow. 
 * 
 * 4: Logical Operators
 * Like comparsion operators, logical operators also resolve to a boolean value and are vital components of control flow. They can be usedd to essentially chain comparison operators together in conditional statements to opitimize efficiancy. The logical operator symbols represent the English words AND, OR, and NOT. They perform logical operations by evaluating expressions and returning boolean values.
 * 
 * 5: Unary Operators
 * These are operators that strictly work on a single operand. Some of the arthimetic may appear to operate this way, such as the increment and decrement, but with those the second operand is essentially built in to the symbol. A true unary operator takes in one operand and executes code accordingly. Unlike the other operator types, unary don't strictly resolve to one type of data. 
 * 
 * 6: Ternary Operators (a? b: C)
 * This is the only JavaScript operator that takes 3 operands (excluding the use of chaining logical operators). Operand one is a condition, while operands two and three are expressions. If the condition is truthy, the first expression (operand two) executes, while the second expression (operand three) executes if the condition is falsy. This operator sequence can be used in lieu of an if-else chain to shorten code length. Also known as conditional operator, there are two symbols involved: a question mark (?) and a colon (:). Oftentimes the question mark itself will be referred to as the ternary operator. 
 */

//1. ASSIGNMENT OPERATORS //

// * Assignment * (=) * Assigns the right operand value to the left operand
    var input = 1
    // assigns the value of 1 to input

// * Addition Assignment * (+=) * Takes the sum of the left and right operand values and assigns the result to the left operand
    input += 3 
    console.log(input) // prints 4 to the console

// * Subtraction Assignment * (-=) * Subtracts the value of the right operand from the left and assigns the resulting value to left operand
    input -= 1
    console.log(input) // prints 3 to the console

// * Multiplication Assignment * (*=) * Multiplies the left and right operand values and assigns the product to the left operand
    input *= 4
    console.log(input) // prints 12 to the console

// * Division Assignment * (/=) * Divides left operand by the value of the right operand and assigns the quotient to the left operand
    input /= 2
    console.log(input) // prints 6 to the console

// * Remainder Assignment * (%=) * Divides the left operand by the right and assigns the remainder of the operation to the left operand
    input %= 3
    console.log(input) // prints 0 to the console

// * Exponentiation Assignment * (**=) * Raises the value of the left operand to the value of the right operand
    input += 2
    input **= 5
    console.log(input) // prints 32 to the console


// 2. ARITHMETIC OPERATORS //

// * Addition * (+) * Resolves to the sum of the left and right operand. Can also be used to concatenate strings.
    var x = 5 + 3
    console.log(x) // prints 8 to the console

// * Subtraction * (-) * Subtracts the right opereand from the left operand 
    var y = x - 2
    console.log(y) // prints 6 to the console

// * Multiplication * (*) * resolves to the produce of the two operands
    var z = y * 4
    console.log(z) // prints 24 to the console

// * Division * (/) * Left  operand becomes the numerator, right the denominator, and returns the quotient.
    var a = z / 2
    console.log(a) // prints 12 to the console

// * Modulus * (%) * Gives the remainder of an integar division
    var b = a % 5 // will calculate 12 / 5 and return the remainder to the closest integar
    console.log(b) // prints 2 to the console. 

// * Increment * (++) * Increases the left operand value by 1. 
    b++ // takes the integar value of b (2) and increases by 1
    console.log(b) // prints 3 to the console
// * Decrement * (--) * Decreases the left operand by 1
    a-- // takes the integar value of a (12) and decreases it by 1
    console.log(a) // prints 11 to the console

// 3. COMPARISON OPERATORS //

// * Equality * ( == ) * Compares the operands by value and returns true if the values are the same, false if not. 
    5 == '5' // true
    5 == 6 // false
    'a' == 'a' // true

// * Strict Equality * (===) * Compares the equality of the operands by type. The condition is met if they are equal in value and type, otherwise false. 
    5 === '5' // false
    '5' === '5' // true 

// * Inequality * ( != ) * Compares the inequality of operands and resolves to true if their integar values are not equal
    5 != '5' // false
    5 != 6 // true 

// * Strict Inequality * ( !== ) * Compares the inequality of the operands by type and value and returns true if neither are equal.
    5 !== '5' // true
    3 !== 3 // false 

// * Greater Than * ( > ) * Compares operands with no respect to type. Returns true if the left operand value is greater than the right operand value. Otherwise resolves to false. Works with strings by comparing characters alphabetically. 
    5 > '5' // false
    '5' > 4 // true
    'b' > 'a' // true

// * Less Than * ( < ) * Inverse of greater than. Compares value of left against right and returns true if the left operand is smallest. Lowercase letters are considered greater than uppercase.
    5 < '4' // false
    4 < 6 // true
    'abc' < 'B' // false 

// * Greater Than or Equal To * ( >= ) * Combo of greater than equality. Returns true if the integar value of the left operand is greater than or equal to that on the right.
    5 >= '5' // true
    5 >= 4 // true
    5 >= 6 // false

// * Less Than or Equal To * ( <= ) * Inverse of >= Returns true if integar value of left operand is less than or equal to that on the right.
    5 <= '5' // true
    5 <= 4 // false
    5 <= 6 // true

// 4. LOGICAL OPERATORS //

// * AND * && * // 
    // Logical Conjuction. Evaluates a set of boolean operands and returns true if all are true. 
    5 == '5' && 6 === 6 // true
    5 == '5' && 5 === '5' // false
    // When used with non-boolean values, tests the truthiness of the operands.Returns the first falsey value or final operand if true when evaluated left to right.
    '5' && '' && 6 // returns ''
    'x' && 7 // returns 7 

// * OR * || * //
    // Logical Disjunction. Evaluates a set of boolean operands and returns true if just one of them resolves to true, false if neither do.
    5 != '5' || 5 == 6 // false
    5 == '5' || 5 == 6 // true

// * NOT * ! * //
    // Logical complement, negation, or BANG operator. Turns truthy to falsey and falsey to truthy. Reverses the boolean result of the operand or condition being tested. Can be chained with OR / AND on boolean values. 
    !(5 === '5') // true
    !(5 ==='5' && 6 === 6) // true
    !(5 ==='5' || 6 === 6) // false
    


// 5. UNARY OPERATORS //

// typeOF
    // Evaluates the operand to it's right and returns a string value representing it's data type. The possible return strings are undefined, Object, boolean, number, string, symbol, and function
    typeof 'text' // returns 'string'
    console.log(typeof(true)) // prints 'boolean' to console


// ! Bang 
    // With non-booleans, the NOT operator can only be used on single values. It Evaluates the operand to it's right and flips the boolean value in regards to truthiness  
    !5 // true
    !0 // false

// delete 
    // Deletes properties from objects. When used on arrays, if removes a value without changing the array's length by creating a hole. 

    let user = {
        firstName: 'Mary',
        lastName: 'Sandberg',
    }
    delete user.firstName;
    console.log(user) // prints {lastName: 'Sandberg'}

    let arr = [1, 2, 3]
    delete arr[1]
    console.log(arr)// prints [1,,3]

// 6. TERNARY OPERATORS //
    let driver = (age >= 16) ? 'legal driver':'illegal driver'
    var age = 18
    console.log(driver) // prints 'legal driver'