const stack = require('../stack');
// Using the Stack class above, implement the following helper 
// functions outside of the class:  
// `peek():` allows you to look at the top of the stack without removing it  
// `isEmpty():` allows you to check if the stack is empty or not  
// `display():` to display the stack - what is the 1st item in your stack?  
// Remove McCoy from your stack and display the stack

const newStack = require('../stack');

const helperFuncs = {

    // Allows you to look at the top of the stack without removing it
    peek: (newStack) => {
        return newStack.top;
    },

    // Allows you to check if the stack is empty or not
    isEmpty: (newStack) => {
        return newStack.top === null;
    },

    // To display the stack - what is the 1st item in the stack
    display: (newStack) => {
        // Set array to store items
        let items = [];

        // If stack is empty return
        if(newStack.top === null) {
            return `Stack is empty`;
        }

        // If a top property exists we will set that as our start point
        if(newStack.top) {
            newStack = newStack.top;
        }

        // Iterate through stack until we reach the end
        while(newStack.next !== null) {
            // Add each item to our stored array
            items.push(' - ' +  newStack.data);
            // Move to next node
            newStack = newStack.next;
        }
        // Add last item to stack
        items.push(' - ' + newStack.data);
        //return stored stack separated by line
        return items.join('\n');
    }
};

module.exports = helperFuncs;
