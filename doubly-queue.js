// Use the items listed in #6 and enqueue them to your queue.

// Check to see who is first one on the Queue?

class _Node { 
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class QueueDoubly {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add an item to the top of the queue
    enqueue(value) {
        // Create new node to place data in
        const node = new _Node(value);

        // If no nodes in list
        if(this.head === null) {
            this.head = node;
        } else {
            // link current tail with new tail
            this.tail.next = node;
            node.prev = this.tail;
        }

        // Reassign tail to new node
        this.tail = node;
    };

    // Remove item from queue
    dequeue() {
        // If queue is empty nothing to remove
        if(this.head === null) {
            return `Queue is empty`;
        }

        // Declare node to dequeue
        const node = this.head;

        // If node is last item in queue
        if(node === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }

        // Set 2nd item in queue to the first item
        this.head = this.head.next;
        this.head.prev = null;

        return node.value;
    };
}

module.exports = {
    QueueDoubly,
    _Node
};