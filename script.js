class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        // Write a method that accepts a value and create a new node, 
        // assign it to the list head, and return a pointer to the new head node.

        // create a new node
        var newNode = new Node(value);

        // attach new node to existing list
        newNode.next = this.head;

        // reassign list's head
        this.head = newNode;

        // return the head
        return this.head;
    }

    removeFront() {
        //Write a method to remove the head node and return the new list head node. 
        //If the list is empty, return null.
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }

    front() {
        // Write a method to return the value (not the node) at the head of the list. 
        // If the list is empty, return null.
        if(this.head) {
            return this.head.value;
        }
        return null;
    }
}

// ************************************************************

// Contains
// Add a method contains(value) to your SLL class, which is given a 
// value as a parameter.  Return a boolean (true/false); true, if 
//the list possesses a node that contains the provided value.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    contains(value) {
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

// ************************************************************

// Length
// Create a new SLL method length() that returns number of nodes in that list.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    length() {
        var runner = this.head;
        var numNodes = 0;
        while(runner) {
            nodes++;
            runner = runner.next;
        }
        return numNodes;
    }
}

// ************************************************************

// Display
// Create display() that returns a string containing all list values. 
// Build what you wish console.log(myList) did!

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    display() {
        var output = "";
        var runner = this.head;
        while(runner) {
            output += runner.value + " "
            runner = runner.next;
        }
        return output;

    }
}

// ************************************************************

// Min, Max, Avg 

maxMinAvg() {
    var sum = 0;
    var max = this.head.value;
    var min = this.head.value;
    var runner = this.head;
    while(runner) {
        sum += runner.value;
        if(runner.value > max) {
            max = runner.value;
        }
        else if(runner.value < min) {
            min = runner.value;
        }
        runner = runner.next
    }
    return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
}

// ************************************************************

// SList: Back
// Create a method that returns the last value in the list.
back() {
    var runner = this.head;
    while(runner.next) {
        runner = runner.next
    }
    return runner.value
}

// SList: Remove Back
// Create a method that removes the last ListNode in the list and returns the new list.
removeBack() {
    var runner = this.head;
    while(runner.next.next) {
        runner = runner.next
    }
    runner.next = null;
    return this
}

// SList: Add Back
// Create a method that creates a Node with given value and inserts it at end of your linked list.
addBack(value) {
    var runner = this.head;
    while(runner.next) {
        runner = runner.next
    }
    runner.next = new Node(value);
    return this
}