/* 1. What type? 
* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison.  */

let string1 = `3`;
let string2 = `"3"`;
let looseCheck = string1 == string1;
console.log(`Using loose equality check stings (${string1} and ${string2}) are equal: ${looseCheck}`);
let strictCheck = string1===string2;
console.log(`Using strict equality check stings (${string1} and ${string2}) are equal: ${strictCheck}`);

/* **Questions: Comment your answers in the js file.** 
* Is there a difference? Why/why not? 
* Which comparison operator should we generally use? Why?
* What would happen if we were to use `=`? */
//why 2 is equal to 2 (2 === 2), because its true, why not 2 is not equal to 3 (2!==3), because it is true or we can also say (2!==2), this is false.

/* We use the following comparison operators:
    < less than 
    <= less or equal to
    > greater
    >= greater or equal

    // equality operators
    == (not preferred)
    === strict equality (preferred)

    // Inequality operators
    != (not preferred)
    !== not equal (preferred)

*/
// If we use '=', we are not comparing rather we are assigning value to some variable.

/* #### 2. Not
* Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable. */

let someVar = true;
/* let terOp = someVar !== true ? 'true' : 'false'; */
let terOp = !someVar? 'true' : 'false';
console.log(terOp);//false

/* #### 3. Short Circuit
Given the code below, what will print when when we console log `name`? Comment your answer in the js file. */

let firstName, givenName;

firstName = 'Stacey';
let name1 = givenName || firstName || 'John'; 

console.log(name1); //Stacey


///////////////////////
/////////////////
/* # Math
**Perform Mathematical Tasks with JavaScript.** */
/* ## 1. Minimum and maximum

### a. Lowest Number

Print out the lowest number between -1 and 4.

### b. Highest Number

Print out the highest number between -1 and 4. */

let number1 = -1;
let number2 = 4;
console.log(`1-a: The lowest number is: ${Math.min(number1,number2)}`);
console.log(`1-b: The highest number is: ${Math.max(number1,number2)}`);

/* ## 2. Rounding

### a. Round up

Round up each of the following numbers to the nearest integer. Print each result to the console.
- 3321.32321
- 326.76
- 76788.7
- -9.78
- 43.342.

### b. Round down

Round down each of the following numbers to the nearest integer. Print each result to the console.
- 3321.32321
- 326.76
- 76788.7
- -9.78
- 28.329 */


let num1 = 3321.32321;
let num2 = 326.76;
let num3= 76788.7;
let num4=  -9.78;
let num5= 43.342;
console.log(`2-a.1: The round up of ${num1} is : ${Math.ceil(num1)} `);
console.log(`2-a.2: The round up of ${num2} is : ${Math.ceil(num2)} `);
console.log(`2-a.3: The round up of ${num3} is : ${Math.ceil(num3)} `);
console.log(`2-a.4: The round up of ${num4} is : ${Math.ceil(num4)} `);
console.log(`2-a.5: The round up of ${num5} is : ${Math.ceil(num5)} `);

/* ### b. Round down

Round down each of the following numbers to the nearest integer. Print each result to the console.
- 3321.32321
- 326.76
- 76788.7
- -9.78
- 28.329 */

let num6 = 3321.32321;
let num7 = 326.76;
let num8= 76788.7;
let num9=  -9.78;
let num10= 43.342;
console.log(`2-b.1: The round down of ${num6} is : ${Math.floor(num6)} `);
console.log(`2-b.2: The round down of ${num7} is : ${Math.floor(num7)} `);
console.log(`2-b.3: The round down of ${num8} is : ${Math.floor(num8)} `);
console.log(`2-b.4: The round down of ${num9} is : ${Math.floor(num9)} `);
console.log(`2-b.5: The round down of ${num10} is : ${Math.floor(num10)} `);

/* ## 3. Dice Roll!

Print a random integer between 1 and 6.
 */
let number11 = 1;
let number12 = 6;
let generateRandom = Math.random();
/* console.log(generateRandom); */
let randTo6 = generateRandom*number12;
/* console.log(randTo6); */
let rand1To6 = Math.ceil(randTo6);
console.log(`3: The random number between ${number11} and ${number12} is : ${rand1To6} `);





