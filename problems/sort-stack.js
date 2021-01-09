const stack = require('../stack');
// Write a program to sort a stack such that the smallest items are on the 
// top (in ascending order). You can use an additional stack, but you may not 
// use any other data structure (such as an array, or linked list).

const { Stack, newStack } = require('../stack');
const helperFuncs = require('./helper-functions');

const sortStack = stack => {
    // Setup new stack instance
    let sortedStack = new Stack();

    // Iterate through the stack as long as the value is not null
    while(stack.top) {
        // Set start to top of stack
        let tempNode = stack.pop();

        // If the to of the sorted stack is less than the top of the original stack
        while(sortedStack.top && sortedStack.top.data < tempNode) {
            stack.push(sortedStack.pop());
        }

        // Add temp value to sorted Stack
        sortedStack.push(tempNode);
    }

    return sortedStack;
};

sortStack(newStack);
