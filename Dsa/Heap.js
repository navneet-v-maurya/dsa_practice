class Heap {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0) {
      console.log(val, this.values);
      if (this.values[parent] > this.values[child]) {
        let temp = this.values[parent];
        this.values[parent] = this.values[child];
        this.values[child] = temp;
        child = parent;
        parent = Math.floor((child - 1) / 2);
      } else {
        break;
      }
    }
    return this;
  }

  pop() {
    if (this.values.length === 0) return null;

    if (this.values.length === 1) return this.values.pop();

    let temp = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = this.values[0];
    this.values[0] = temp;

    const val = this.values.pop();

    let parent = 0;
    let left_child = 1;
    let right_child = 2;

    while (left_child < this.values.length) {
      let smaller_child =
        right_child < this.values.length && this.values[right_child] < this.values[left_child]
          ? right_child
          : left_child;

      if (this.values[parent] > this.values[smaller_child]) {
        let temp = this.values[parent];
        this.values[parent] = this.values[smaller_child];
        this.values[smaller_child] = temp;
        parent = smaller_child;
      } else {
        break;
      }

      left_child = parent * 2 + 1;
      right_child = parent * 2 + 2;
    }

    return val;
  }
}

const h = new Heap();
h.push(5);
h.push(4);
h.push(6);
h.push(7);
h.push(0);
h.push(11);
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h);

//module.exports = Heap;
