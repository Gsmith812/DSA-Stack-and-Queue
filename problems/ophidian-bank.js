// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a 
// customer only if they have all of the appropriate paperwork. Write a 
// representation of this queue; 25% of the time (random), a customer's 
// paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.

const { QueueStack } = require('./queue-stack');

// Set up variables for line of customers
const customers = ['George', 'Louis', 'Darren', 'Victor', 'Minous', 'Laura'];
let custQueue = new QueueStack();
customers.forEach(customer => custQueue.enqueue());

const ophidianBank = line => {
    // Set our current customer
    let currCust = line.dequeue();

    // Iterate through customer line
    while(currCust !== null) {
        // Make random number
        const random = Math.random();
        // If we hit a 25% send to back of queue
        if(random <= 0.25) {
            console.log(`Sent ${currCust} was sent to the back of the queue`);
            line.enqueue(currCust);
        } else {
            // Else serve the customer
            console.log(`${currCust} has been served`);
        }
        // Move to next customer
        currCust = line.dequeue();
    }

    return `All customers have been served`;
}