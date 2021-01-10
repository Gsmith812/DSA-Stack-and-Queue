// As people come to the dance floor, they should be paired off as quickly 
// as possible: man with woman, man with woman, all the way down the line. If 
// several men arrive in a row, they should be paired in the order they came, 
// and likewise if several women do. Maintain a queue of "spares" (men for 
// whom you have no women yet, or vice versa), and pair them as appropriate.

// F Jane

// M Frank

// M John

// M Sherlock

// F Madonna

// M David

// M Christopher

// F Beyonce

// Female dancer is Jane, and the male dancer is Frank  
// Female dancer is Madonna, and the male dancer is John  
// Female dancer is Beyonce, and the male dancer is Sherlock  
// There are 2 male dancers waiting to dance  

const QueueStack = require('./queue-stack');

// Set new instance of QueueStack
const dancers = new QueueStack();

// Use array to populate the QueueStack
let dancersArr = [
    {gender: 'F', name: 'Jane'},
    {gender: 'M', name: 'Frank'},
    {gender: 'M', name: 'John'},
    {gender: 'M', name: 'Sherlock'},
    {gender: 'F', name: 'Madonna'},
    {gender: 'M', name: 'David'},
    {gender: 'M', name: 'Christopher'},
    {gender: 'F', name: 'Beyonce'}
];
// Add dancers to QueueStack
dancersArr.map(dancer => dancers.enqueue(dancer));

// Pair partners together for dance
const squareDance = queue => {
    // Set coorelation of matches
    const map = {
        F: 'M',
        M: 'F'
    };

    // Set QueueStack up for left over people
    const spares = new QueueStack();
    // Set current dancer
    let currDancer = queue.dequeue();

    // Iterate through while the QueueStack isnt empty
    while(currDancer !== null) {
        // If the spare queue is empty populate it
        if(spares.stack1.top === null) {
            spares.enqueue(currDancer);
        } else {
            // If curr dancer gender is opposite
            if(spares.stack1.top.data.data.data.gender === map[currDancer.data.data.gender]) {
                // Store matched dancer
                let dancerMatch = spares.dequeue();
                // console.log() the partnership
                console.log(`${dancerMatch.data.data.data.data.name} is dancing with ${currDancer.data.data.name}`);
            } else {
                // Else add curr dancer to spares
                spares.enqueue(currDancer);
            }
            // Iterate to the next dancer
            currDancer = queue.dequeue();
        }
    }

    // Dequeue spare members
    let unPairedDancer = spares.dequeue();
    // Iterate through while we have members in spares to dequeue
    while(unPairedDancer !== null) {
        // Log dancers that are unpaired
        console.log(`${unPairedDancer.name} doesn't have a partner`);
        unPairedDancer = spares.dequeue();
    }
}

squareDance(dancers);