//implement stack using singly link list
//add and removal time is O(1)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;

    const temp_val = current;

    this.head = current.next;

    if (!this.head.next) {
      this.tail = null;
    }

    current = null;

    return temp_val;
  }
}

export default Stack;
