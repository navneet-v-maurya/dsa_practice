class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Doubly_linked_list {
  constructor() {
    this.head = null;
  }

  push_arr(arr) {
    let count = 0;
    if (!this.head) {
      const new_node = new Node(arr[0]);
      this.head = new_node;
      count++;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    while (count < arr.length) {
      const new_node = new Node(arr[count]);
      new_node.prev = temp;
      temp.next = new_node;
      temp = temp.next;
      count++;
    }
    return this.head;
  }

  print() {
    let temp = this.head;

    let str = "null <=> ";

    while (temp) {
      str += `${temp.data} <=> `;
      temp = temp.next;
    }

    str += "null";

    console.log(str);
    return str;
  }

  add_after_index(index, val) {
    let temp = this.head;
    let count = 0;
    let temp2;
    const new_node = new Node(val);
    while (count <= index) {
      if (count === index) {
        temp2 = temp.next;
        new_node.prev = temp;
        new_node.next = temp2;
        temp.next = new_node;
        break;
      } else {
        temp = temp.next;
      }

      count++;
    }
    return this.head;
  }

  delete_nth_node(positoion) {
    if (positoion === 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      let count = 1;
      let temp = this.head;
      let prev_temp;
      let next_temp;

      while (count <= positoion) {
        if (count === positoion) {
          prev_temp = temp.prev;
          next_temp = temp.next;
          if (prev_temp) {
            prev_temp.next = next_temp;
          }
          if (next_temp) {
            next_temp.prev = prev_temp;
          }
          break;
        } else {
          temp = temp.next;
        }
        count++;
      }
    }

    return this.head;
  }
}

const db = new Doubly_linked_list();

db.push_arr([1, 2, 3]);
db.add_after_index(2, 0);
db.print();
db.delete_nth_node(3);
db.print();
