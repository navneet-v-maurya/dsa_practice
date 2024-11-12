class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Singly_linked_list {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    const new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
    } else {
      while (this.head.next) {
        this.head = this.head.next;
      }
      this.head.next = new_node;
    }
    this.size++;
  }

  push_arr(arr) {
    let count = 0;
    if (!this.head) {
      this.head = new Node(arr[0]);
      count++;
      this.size++;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }

    let new_node;
    while (count < arr.length) {
      new_node = new Node(arr[count]);
      if (!temp) {
        temp = new_node;
      } else {
        temp.next = new_node;
      }
      count++;
      this.size++;
      temp = temp.next;
    }
  }
}

const sl = new Singly_linked_list();
//sl.push(1);
//sl.push(2);
sl.push_arr([2, 3]);

console.log(sl);
