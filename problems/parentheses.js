// A stack can be used to ensure that an arithmetic expression has balanced 
// parentheses. Write a function that takes an arithmetic expression as an 
// argument and returns true or false based on matching parenthesis. As a 
// bonus provide a meaningful error message to the user as to what's missing. 
// For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). Finding 
// a close parenthesis without an open parenthesis is an error (report the 
// location of the close); reaching the end of the string while still 
// "holding" an open parenthesis is also an error (report the location 
// of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These 
// must be correctly nested; "([)]" is incorrect, and should report an error 
// at the ), stating that you were expecting a ] but found a ). If this is 
// starting to look and sound very familiar, congratulations - you're 
// beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: 
// "" and ''. Inside quotes, brackets aren't counted at all - in fact, 
// nothing is counted until you reach the corresponding close quote.

const { Stack } = require('../stack');
const helperFuncs = require('../problems/helper-functions');

const parentheses = exp => {
    // Set up stack
    let stack = new Stack();

    // Set values for comparing expressions
    let map = {
        '(':')',
        '[':']',
        '{':'}'
    };
    let revMap = {};
    for(let key in map){
        if(!revMap.hasOwnProperty(key)) revMap[map[key]] = key;
    }
    // Stretch case for catching quote types
    let parentheses = [`'`, `"`];
    let openTags = Object.keys(map);
    let closeTags = Object.keys(revMap);

    // Iterate through the expression
    for(let i = 0; i < exp.length; i++) {
        // If we have a quote in the stack and haven't found a match keep moving forward
        if(
            !helperFuncs.isEmpty(stack) && // Not empty
            parentheses.includes(helperFuncs.peek(stack).data) && // If top of stack has quote
            helperFuncs.peek(stack).data !== exp[i] // Current index doesn't match
        ) {
            continue;
        } else if (
            !helperFuncs.isEmpty(stack) &&
            helperFuncs.peek(stack).data === exp[i] // Matched expression
        ) {
            stack.pop();
            continue;
        }

        // If we have a quote
        if(parentheses.includes(exp[i])) {
            // Push the quote into the stack
            stack.push(exp[i]);
            continue;
        }

        // If we find a closing parentheses tag
        if(closeTags.includes(exp[i])) {
            if(stack.top === null) {
                return `Unexpected closing tag ${exp[i]} at position ${i}.`;
            }
            let last = stack.pop();
            if(exp[i] !== map[last]) {
                return `Missing closing tag for ${exp[i]} at position ${i}.`;
            }
        }
    }
    if(!helperFuncs.isEmpty(stack)) {
        return `Missing closing tag for ${stack.pop()}.`;
    }
    return `Expression is valid`;
}