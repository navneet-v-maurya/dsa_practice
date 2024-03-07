class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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
    this.size++;
    return this;
  }

  pop() {
    let temp;
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      temp = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.tail.val;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return temp;
  }

  print() {
    let curr = this.head;
    if (!this.head) return "null";
    let str = "null <-- ";

    while (curr) {
      str += curr.next ? `${curr.val} <--> ` : `${curr.val}`;
      curr = curr.next;
    }

    return str + " --> null";
  }

  shift() {
    if (!this.head) return null;

    let temp = this.head.val;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return temp;
  }

  unshift(val) {
    const new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.head.prev = new_node;
      new_node.next = this.head;
      this.head = new_node;
    }
    this.size++;
    return this;
  }

  reverse() {
    // reverse the list
  }

  remove_nth_node(n) {
    // remove nth node from the list
  }
}

const doubly = new DoublyLinkedList();

doubly.unshift(1);
doubly.push(2);
doubly.push(3);
console.log(doubly.print());
doubly.unshift(0);
console.log(doubly.print());

console.log(doubly);
