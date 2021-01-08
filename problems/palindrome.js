// A palindrome is a word, phrase, or number that is spelled the same forward 
// and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: 
// Panama” is a palindrome if you take out the spaces and ignore the 
// punctuation; and 1,001 is a numeric palindrome. We can use a stack to 
// determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is 
// palindrome or not. Use the following template as a starting point.
// ```
// function is_palindrome(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
// }

// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
// ```

const Stack = require('../stack');

const is_palindrome = string => {
    // Force string to lowercase and remove any special characters
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Create a stack instance
    let stack = new Stack();

    // Push string characters into our stack
    for(let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    // Set empty string to store reversed string
    let reverseString = '';

    // Iterate through stack while top isn't null to pop values off stack into reverseString
    while(stack.top !== null) {
        reverseString += stack.pop();
    }

    // Check to see if both strings match
    return string === reverseString;
}