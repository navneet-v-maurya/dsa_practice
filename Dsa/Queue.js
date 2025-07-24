//implement Queue using Doubly link list
//add and removal time is O(1)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const new_node = new Node(val);
        if (!this.head) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.tail.next = new_node;
            new_node.prev = this.tail;
            this.tail = new_node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;

        let temp = this.head.val;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return temp;
    }

    get_length() {
        return this.length;
    }
}

module.exports = Queue;
