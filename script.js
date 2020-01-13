class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
            tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(item, value) {
        let currNode = this.head;
        let prevNode;
        while(currNode.value !== item) {
            prevNode = currNode
            currNode = currNode.next
        }
        let newNode = new _Node(value, currNode)
        prevNode.next = newNode
    }
    insertAfter(item, value) {
        let currNode = this.head;
        let nextNode = currNode.next;
        while(currNode.value !== item) {
            currNode = currNode.next
            nextNode = currNode.next.next
        }
        let newNode = new _Node(value, nextNode)
        currNode.next = newNode
    }
    insertAt(value, pos) {
        let currNode = this.head;
        let prevNode;
        let currPos = 1
        while(currPos !== pos) {
            prevNode = currNode
            currNode = currNode.next
            currPos++
        }
        let newNode = new _Node(value, currNode)
        prevNode.next = newNode

    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
                and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;
        
        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    let SLL = new LinkedList();
    SLL.insertLast("Apollo")
    SLL.insertLast("Boomer")
    SLL.insertLast("Helo")
    SLL.insertLast("Husker")
    SLL.insertLast("Starbuck")
    return SLL;
}

let SLL = main()

// SLL.insertBefore("Boomer", "Athena")
// SLL.insertAfter("Helo", "Hotdog")
SLL.insertAt("Kat", 3)

SLL.insertLast("Tauhida")

SLL.remove("Husker")
SLL.remove("Tauhida")

// console.log(SLL)

function display(list) {
    console.log(list)
}

// display(SLL)

function size(list) {
    let count = 0;
    let currNode = list.head;
    console.log(currNode)
    while(currNode !== null) {
        count++
        currNode = currNode.next
    }
    console.log(count)
}

// size(SLL)

function isEmpty(list) {
    let currNode = list.head;
    if (currNode = undefined) {
        console.log("List is empty")
    } else {
        console.log("List is not empty")
    }
}

// isEmpty(SLL)

function findPrevious(list, item) {
    let currNode = list.head;
    let prevNode;
    while(currNode.value !== item) {
        prevNode = currNode
        currNode = currNode.next
    }
    console.log(prevNode)
}

// findPrevious(SLL, "Athena")

function findLast(list) {
    let currNode = list.head;
    let prevNode;
    while(currNode !== null) {
        prevNode = currNode
        currNode = currNode.next
    }
    console.log(prevNode)
}

// findLast(SLL)
