/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area (a, b) {
    let areaCalculated = a * b
    return areaCalculated
} 

let result = area(3, 7)
console.log(result)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
 
const crazySum = function(a, b) {
    if ((a === b)) {
        return (a + b) * 3
    } else {
        let r = a + b
        return r
    }
}

let resultOfCrazySum = crazySum(34, 34)
console.log(resultOfCrazySum)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
/*
const crazyDiff = math.abs(a, 19)
    if (a > 19) {
        let r1 = crazyDiff * 3
    return r1
     } else {
        let r2 = crazyDiff
        return r2
    }

    console.log(crazyDiff); FAILED ATTEMPT */

    function crazyDiff (a, b) {
        let crazyDiffValue = Math.abs(a, b)
        return crazyDiffValue
    }
    
    let result1 = crazyDiff(3 * 19)
    console.log(result1)
    


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        console.log(true)
    } else {
        return false
    }
}

let boundaryResult = boundary(400)
console.log(boundaryResult)

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(name) {
    console.log(`Let's ${name}!`) 
}
strivify('Strive')

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
/*
function check3and7(numbers, number) { // add second argument
    let multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % number === 0) { // divide by the number
        multiples.push(numbers[i]); // add the current multiple found to the multiples array
      }
    }
    return multiples;
  }
  
  console.log(check3and7([4, 5, 6, 7, 8], 2)); // Output: [4, 6, 8] */


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    console.log(newString)
}

reverseString('Strive');


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function(aString) {
    console.log(aString.toUpperCase())
}
upperFirst('Strive')

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function(aString1) {
    console.log(aString1.slice(1,-1)) // using .slice to remove first and last character 
}
cutString('Strive')


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow. */