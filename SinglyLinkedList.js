class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const new_node = new Node(val);

    if (this.size === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else if (this.size === 1) {
      this.head.next = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return null;

    let temp_val;

    if (this.size === 1) {
      temp_val = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let count = 1;
      let current = this.head;
      while (count < this.size) {
        if (count === this.size - 1) {
          temp_val = current.next.val;
          this.tail = current;
          this.tail.next = null;
        }
        current = current.next;
        count++;
      }
    }
    this.size--;
    return temp_val;
  }

  print() {
    let str = "";
    let current = this.head;
    let count = 1;
    while (count <= this.size) {
      str += str.length === 0 ? `${current.val}` : `->${current.val}`;
      current = current.next;
      count++;
    }
    return (str += str.length != 0 ? "->null" : "null");
  }

  shift() {
    if (this.size === 0) return null;

    let current = this.head;

    const temp_val = current.val;

    this.head = current.next;

    if (this.size === 1) {
      this.tail = null;
    }

    current = null;
    this.size--;

    return temp_val;
  }

  unshift(val) {
    const new_node = new Node(val);
    if (this.size === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
    this.size++;
    return this;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

const singly = new SinglyLinkedList();

singly.unshift(5);
console.log(singly.print());
singly.push(1);
singly.push(2);
singly.push(3);
singly.push(4);
console.log(singly.print());
singly.reverse();
console.log(singly.print());
singly.shift();
singly.shift();
singly.shift();
console.log(singly.print());
singly.unshift(5);
console.log(singly.print());
singly.reverse();
console.log(singly.print());
