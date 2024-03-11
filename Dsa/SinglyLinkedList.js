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

  remove_nth_node(n) {
    let curr = this.head;
    let count = 1;
    let prev = null;

    if (n === 1) return this.shift();

    while (curr) {
      if (count === n) {
        if (!curr.next) return this.pop();

        let temp = curr.val;
        prev.next = curr.next;
        this.size--;
        return temp;
      }

      prev = curr;
      curr = curr.next;
      count++;
    }

    return null;
  }
}

const singly1 = new SinglyLinkedList();
const singly2 = new SinglyLinkedList();

singly1.push(1);
singly2.push(2);
singly1.push(3);
singly2.push(4);
singly2.push(6);
singly2.push(7);

console.log(singly1.print());
console.log(singly2.print());

// function to merge two sorted list
merger_sorted_lists = (l1, l2) => {
  const output = new Node();
  let tail = output;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  }

  if (l2) {
    tail.next = l2;
  }

  // just to print the sorted values in array form
  const values = [];
  let current = output.next;
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

console.log(merger_sorted_lists(singly1.head, singly2.head));
