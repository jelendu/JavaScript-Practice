// Here are five JavaScript problems that could be asked during an interview, ranging from beginner to medium level:

// 1. Beginner: FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of three, print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function FizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
    }
}
FizzBuzz(100);
//**  (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i means that if (i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') is a truthy value (which will be the case if i is divisible by either 3 or 5), it will be returned (logged to the console in this case). If it is falsy (which will be the case if i is not divisible by either 3 or 5, resulting in an empty string), i itself will be returned. */

// 2. Beginner: Reverse a String
// Write a function that takes a string as input and returns the string reversed. You can't use the built-in JavaScript reverse() function for this problem.

function reverseIt(str) {
    let e = "";
    for(let i = str.length-1; i >= 0; i--) {
        e += str[i];
    }
    return e;
}
console.log(reverseIt("i love javascript"));

// OR

function reverseItAgain(str) {
    let r = [];
    for (let c of str) {
        r = [c, ...r];
    }
    return r.join('');
}
console.log(reverseItAgain("i love react"));

// OR

function reverseItAgainNAgain(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}
console.log(reverseItAgainNAgain("javascript"));

// ** So, in simplest terms, (rev, char) => char + rev is a function that says: "Take the current state of the reversed string and the current character, and stick the current character onto the front of the reversed string." */

// 3. Beginner to Intermediate: Factorial
// Write a function that calculates the factorial of a number. The factorial (denoted as n!) is the product of all positive integers less than or equal to n. For example, 5! = 5*4*3*2*1 = 120. Try to implement this function both recursively and iteratively.

function factorial(n) {
  for (let i = 1; i >= 0; i--) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
}
console.log(factorial(5));

// OR

const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
console.log(factorial(5));
// ** So, in simple terms, n === 0 ? 1 : n * factorial(n - 1) is like saying "If n is exactly 0, then give back 1. Otherwise, give back n times the factorial of n - 1." It's a more compact way of writing an if-else statement.  */

// 4. Intermediate: Flatten Array
// Write a function that takes an array of arrays (a nested array) and returns a flattened version of the array. For instance, given [[1,2,3], [4,5], [6]], your function should return [1,2,3,4,5,6].

const Array1 = [1, 2, 3];
const Array2 = [4, 5];
const Array3 = [6];

console.log(Array1.concat(Array2, Array3));

// OR

function flattenArray(arr) {
  return arr.flat();
}

console.log(flattenArray([[1,2,3], [4,5], [6]]));

// OR

const arr = [[1, 2, 3], [4, 5], [6]];
console.log(arr.flat());

// 5. Intermediate: Duplicate Removal
// Write a function that removes duplicates from an array. For example, given [1,2,2,3,4,4,5], your function should return [1,2,3,4,5]. Try to solve this problem in different ways: using a loop and a temporary object, using the JavaScript Set object, etc.

let dupArray = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [... new Set(dupArray)];
console.log(uniqueArr);

// OR

let dupArray2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueChars = [];
dupArray2.forEach((c) => {
  if (!uniqueChars.includes(c)) {
    uniqueChars.push(c);
  }
});
console.log(uniqueChars);

// OR

const dupArray3 = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(a, fn) {
  // The comparison function `fn` is used to check if two elements are the same.
  if (a.length === 0 || a.length === 1) {
    return a;
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (fn(a[i], a[j])) {
        a.splice(j, 1);
        j--; // adjusting the index after splicing
      }
    }
  }
  return a;
}
console.log(removeDuplicates(dupArray3, (a, b) => a === b));

// OR

function removeDuplicates(arr) {
  let seen = {};
  return arr.filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
}

console.log(removeDuplicates([1,2,2,3,4,4,5])); 
//** This code is saying: "Let's go through each item in the array. If we've seen the item before, then don't include it in the new array (because the function returns false)" */