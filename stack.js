// Walk through the Stack class in the curriculum and understand it well.
// Then write a Stack class with its core functions (push, pop) from scratch.

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty 
// to the stack.

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class Stack {
    constructor() {
        this.top = null;
    };

    // Add Core functions push, pop
    push(data) {
        // If Stack is empty the item will be added to top of stack
        if(this.top === null) {
            this.top = new _Node(data, this.top);
            return this.top;
        }
        // If stack already has nodes add new node to top of stack and point to it
        const node = new _Node(data, this.top);
        this.top = node;
    };

    pop() {
        // Remove item from top of stack
        const node = this.top;
        this.top = node.next;
        return this.top;
    };
}

module.exports = {
    Stack,
    _Node
}