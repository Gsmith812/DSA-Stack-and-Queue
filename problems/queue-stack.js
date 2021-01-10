// There are many ways to implement a queue. You have learned using singly 
// linked list, and doubly linked list. Keeping the concept of a queue in 
// mind, implement a queue using 2 stacks and no other data structure. 
// (You are not allowed to use a doubly linked list or array. Use your stack 
// implementation with a linked list from above to solve this problem.)

const { Stack } = require('../stack');

class QueueStack {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    };

    // Add an item to the stack
    enqueue(value) {
        this.stack1.push(value);
    };

    // Use second stack to revers the order and return the top of the stack
    dequeue() {
        if(this.stack2.top === null) {
            if(this.stack1.top === null) {
                return null;
            }
            while(this.stack1.top) {
                let value = this.stack1.pop();
                this.stack2.push(value);
            }
        }
        return this.stack2.pop();
    }
}

module.exports = QueueStack;