/**
 * VARIABLES
 * 0: Variables are named containers utilized for the creation and storage of data values in JavaScript
 * Variables are employed as value identifiers for the most common data types, such as Strings, Numbers, Booleans, Objects, Arrays, and Functions
 * They hold onto values, but do not necessarily store them directly. A programmer can place data into these containers and then refer to them later by invoking the variable name.
 *   
 * 
 * 1: Declaration and Assignment: In order to create a variable we must first `declare` it.
 * Declaration is to initialze a variable, where first we a declarative keyword is typed, followed by a name.
 * The variable name should be short and descriptive and follow the approved syntax (generally they can't start with a number and must only include alpha-numeric data).
 * Assignment comes after our variable has been declared and named. Depending on the declarative keyword used, the variable may be initialized with or without a value.
 * Values are assigned using assignment operators between the name and the value itself.
 * Also keyword dependent is the ability to reassign or redclare a variable. This is when the above steps are repeated with the same variable in a different line of code.
 * 
 * 
 * 2: Var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const.
 * Use case determines which keyword is used for variable declaration, with primary considerations being accessibility and reassignment.
 * If a variable is declared outside of a function or code block, it is considered "globally scoped" and it's corresponding value can be accessed at any time, no matter the keyword.
 * The orginal and most basic keyword is var. This keyword allows for reassignment and redclaration. It's accessibilty can be limited to function scope, but not block scope.
 * Declartive keyword let is similar to var in that it can be reassigned and declared without a value, but it cannot be redeclared. It also differs in that it CAN be block scoped.
 * Keyword const is used when the corresponding value is to be locked to the variable name. Const variables cannot be delcared without a value, and do not allow for reassignment or redeclaration. Like let, they can be block scoped
 * 
 * 
 * 
 * 3: Hoisting: Before code is executed, variables are loaded into memory according to their scope. A variable's scope is dependent on where it was declared and it's associative keyword.
 * Hoisted to the top of scope are function declarations and var variables. Functions are hoisted with their definitions, but values are not hoisted with var declarations.
 * 
 * 
 * 
 * 
 */


// 1. DECLARATION and ASSIGNMENT
// Declaration
var age
let name
// Assignment
age = 36
name = 'Mary'
const last = 'Sandberg'



// 3. HOISTING //

// var //
// written code
console.log(pet)
var pet = 'dog'

// interpreted code
    // var declarations hoisted to the top of scope
var pet;
console.log(pet);
pet = 'dog'

// var, let, and const //
    // let and const variables cannot be accessed until they are assigned a value
// code
console.log(mypet);
console.log(herPet);
console.log(classPet)
var myPet = 'dog';
let herPet = 'cat'
const classPet = 'hamster'
//console
console.log(mypet); // prints dog
console.log(herPet); // ReferenceError: herPet is not defined
console.log(classPet) // ReferenceError: classPet is not defined

// FUNCTION AND VAR
// written code
var dogAge = 5;
var dogYears = getDogYears(dogAge);

function getDogYears(years) {
    return 7 * years;
}
// interpreted code
function getDogYears(years) {
    return 7 * years;
}
var dogAge;
var dogYears;
dogAge = 5;
dogYears = getDogYears(dogAge);

// BLOCK SCOPE

//written code
age = 15
if (age < 16) {
    var message = 'sorry' // variable declared in code block
}
console.log(message) // 'sorry'

// interpreted code
var message; // var hoisted to top of code
age = 15
if (age < 16) {
    message = 'sorry'
}
console.log(message) // 'sorry'

//written but with let
age = 15
if (age < 16) {
    let message = 'sorry' // let declared in code block
}
console.log(message) // 'sorry'

// interpreted code
age = 15
if (age < 16) {
    let message = 'sorry' // block scoped
}
console.log(message) // Reference Error: message is not defined





