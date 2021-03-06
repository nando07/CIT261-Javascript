/* Conditional Statements

// if Statement is used to execute a block of code if a condition is true

*/
console.log('Conditionals (Ex. 1)' + '\n');
var myName = 'Fego';
var age = 26;
var isMarried = 'yes';
var lovesToCode = 'yes';

if (age === 26) {
    console.log(myName + ' is ' + age + '\n' + '\n');
}

// else is used to execute a block of code if a condition is false
console.log('Conditionals (Ex. 2)' + '\n');
if (lovesToCode === 'no') {
    console.log('I am sorry about that');
} else {
    console.log('Way to go ' + myName + '\n' + '\n');
}

// use else if to introduce other conditions if the first one is false
console.log('Conditionals (Ex. 3)');
if (lovesToCode === 'no') {
    console.log('I am sorry about that');
} else if (isMarried === 'no') {
    console.log('Are you playing videogames too much?');
} else if (age > 35) {
    console.log('Are you kidding me?');
} else {
    console.log('Pheww... you are ok' + '\n' + '\n');
}



// Switch Statement

/* switch(expression) {  expression is evaluated once
    case n:  if the expression matches the case, then code block is executed
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
} */

console.log('Conditionals (Ex. 4)');
switch ('OLA') {
    case 'HELLO':
        console.log('This is English');
        break; // this breaks the switch statement so that the other cases are not evaluated unnecessarily.
    case 'HOLA': // different cases can share the same code block
    case 'OLA':
        console.log('This is Spanish (HOLA) and Portuguese (OLA), they almost sound the same.');
        break;
    case 'BONJOUR':
        console.log('This is French');
        break;
    case 'NAMASTE':
        console.log('This is Hindi');
    default: // default expression in case the main expression is not found
        console.log('Who knows what this is');
}
