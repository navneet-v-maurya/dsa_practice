class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Singly_linked_list {
  constructor() {
    this.head = null;
  }

  push(val) {
    const new_node = new Node(val);
    if (!this.head) {
      this.head = new_node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new_node;
    }
  }

  push_arr(arr) {
    let count = 0;
    if (!this.head) {
      this.head = new Node(arr[0]);
      count++;
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

      temp = temp.next;
    }
  }

  get_size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  search(val) {
    let temp = this.head;

    while (temp) {
      if (temp.data === val) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let temp;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }
}

module.exports = Singly_linked_list;

// const sl = new Singly_linked_list();
// sl.push(1);
// sl.push_arr([2, 3]);
// sl.push(4);
// console.log(sl.get_size());
// console.log(sl.search(5));

// console.log(sl);
