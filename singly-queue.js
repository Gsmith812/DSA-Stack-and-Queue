// Walk through the Queue class in the curriculum and understand it well. 
// Then write a Queue class with its core functions (enqueue(), dequeue()) 
// from scratch.

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, 
// and Checkov to the queue.  
// Implement a peek() function outside of the Queue class that lets you 
// take a peek at what the 1st item in the queue is.  
// Implement a isEmpty() function outside the Queue c ass that allows you 
// to check if the queue is empty or not  
// Implement a display() function outside of the Queue class that lets 
// you display what's in the queue.  
// Remove Spock from the queue and display the resulting queue.  

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    };
};

class QueueSingly {
    constructor() {
        this.first = null;
        this.last = null;
    };

    // Add item to top of the queue
    enqueue(value) {
        // Declare new item
        const node = new _Node(value);

        // If we dont have an item in the queue yet
        if(this.first === null) {
            this.first = node;
        }

        // If we have a last item, point to new node
        if(this.last) {
            this.last.next = node;
        }
        // Make the new node the last item in the queue
        this.last = node;
    };

    // Remove an item from first index of queue
    dequeue() {
        // If the queue is empty, there is nothing to remove
        if(this.first === null) {
            return `Queue is empty`;
        }

        // Declare our node to remove
        const node = this.first;
        // Set 2nd item in queue to first
        this.first = this.first.next;

        // If this is the last item in the queue
        if(node === this.last) {
            // Remove last
            this.last = null;
        }

        return node.value;
    };
}

module.exports = {
    QueueSingly,
    _Node
};