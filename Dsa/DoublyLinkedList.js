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

    console.log(str + " --> null");
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
    let curr = this.head;
    let count = 1;
    while (curr) {
      if (count === n) {
        if (n === 1) {
          return this.shift();
        } else if (!curr.next) {
          return this.pop();
        } else {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
        this.size--;
        return curr.val;
      }

      count++;
      curr = curr.next;
    }

    return null;
  }
}

const doubly = new DoublyLinkedList();

doubly.remove_nth_node(2);
doubly.unshift(1);
doubly.unshift(2);
doubly.remove_nth_node(1);
doubly.unshift(3);
doubly.push(2);
doubly.push(3);
doubly.unshift(0);
doubly.remove_nth_node(2);
doubly.print();

console.log(doubly);

const merger_sorted_lists = (l1, l2) => {
  //merge tow sorted doubly linked list in sorted order
};
