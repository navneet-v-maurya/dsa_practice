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
    while (current) {
      str += str.length === 0 ? `${current.val}` : `->${current.val}`;
      current = current.next;
    }
    return (str += str.length != 0 ? "->null" : "null");
  }
}

const singly = new SinglyLinkedList();

console.log(singly.print());
singly.push(1);
singly.push(2);
singly.push(3);
console.log(singly.print());
singly.pop();
console.log(singly.print());
singly.push(4);
singly.pop();
singly.pop();
singly.pop();
singly.pop();
console.log(singly.print());
