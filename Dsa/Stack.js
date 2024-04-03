//implement stack using singly link list
//add and removal time is O(1)

const Queue = require("./Queue");

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

    if (!current.next) {
      this.tail = null;
    }

    current = null;

    return temp_val;
  }

  print() {
    let str = "";
    let current = this.head;
    while (current) {
      str += str.length === 0 ? `${current.val}` : `->${current.val}`;
      current = current.next;
    }
    console.log((str += str.length != 0 ? "->null" : "null"));
  }

  reverse_stack_using_queue() {
    let curr = this.head;
    let q = new Queue();

    while (curr) {
      const el = this.pop();
      q.push(el.val);
      curr = curr.next;
    }
    let q_curr = q.head;
    while (q_curr) {
      const el = q.pop();
      this.push(el);
      q_curr = q_curr.next;
    }
  }
}

//export default Stack;

const s = new Stack();

s.reverse_stack_using_queue();
s.print();
s.push(3);
s.reverse_stack_using_queue();
s.print();
s.push(2);
s.push(1);
s.print();
s.reverse_stack_using_queue();
s.print();

const reverse_individual_words = (str) => {
  const s = new Stack();
  let new_str = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      let curr = s.head;
      while (curr) {
        const el = s.pop();
        new_str += el.val;
        curr = curr.next;
      }
      new_str += " ";
    } else {
      s.push(str[i]);
    }
  }

  console.log(new_str);
};

reverse_individual_words("Hellow World");
