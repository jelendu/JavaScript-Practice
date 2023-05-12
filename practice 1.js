// Here are five JavaScript problems that could be asked during an interview, ranging from beginner to medium level:

// Beginner: FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of three, print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function FizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
    }
}
FizzBuzz(100);

// Beginner: Reverse a String
// Write a function that takes a string as input and returns the string reversed. You can't use the built-in JavaScript reverse() function for this problem.

// Beginner to Intermediate: Factorial
// Write a function that calculates the factorial of a number. The factorial (denoted as n!) is the product of all positive integers less than or equal to n. For example, 5! = 5*4*3*2*1 = 120. Try to implement this function both recursively and iteratively.

// Intermediate: Flatten Array
// Write a function that takes an array of arrays (a nested array) and returns a flattened version of the array. For instance, given [[1,2,3], [4,5], [6]], your function should return [1,2,3,4,5,6].

// Intermediate: Duplicate Removal
// Write a function that removes duplicates from an array. For example, given [1,2,2,3,4,4,5], your function should return [1,2,3,4,5]. Try to solve this problem in different ways: using a loop and a temporary object, using the JavaScript Set object, etc.