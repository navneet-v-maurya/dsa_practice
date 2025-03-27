class MaxHeap {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0) {
      if (this.values[parent] < this.values[child]) {
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
        right_child < this.values.length && this.values[right_child] > this.values[left_child]
          ? right_child
          : left_child;

      if (this.values[parent] < this.values[smaller_child]) {
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

class MinHeap {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0) {
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

class MinHeapObj {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0) {
      if (
        this.values[parent].diff > this.values[child].diff ||
        (this.values[parent].diff === this.values[child].diff &&
          this.values[parent].el < this.values[child].el)
      ) {
        [this.values[parent], this.values[child]] = [this.values[child], this.values[parent]];
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

    const val = this.values[0];
    this.values[0] = this.values.pop();

    let parent = 0;
    let left_child = 1;
    let right_child = 2;

    while (left_child < this.values.length) {
      let smaller_child =
        right_child < this.values.length &&
        (this.values[right_child].diff < this.values[left_child].diff ||
          (this.values[right_child].diff === this.values[left_child].diff &&
            this.values[right_child].el > this.values[left_child].el))
          ? right_child
          : left_child;

      if (
        this.values[parent].diff > this.values[smaller_child].diff ||
        (this.values[parent].diff === this.values[smaller_child].diff &&
          this.values[parent].el < this.values[smaller_child].el)
      ) {
        [this.values[parent], this.values[smaller_child]] = [
          this.values[smaller_child],
          this.values[parent],
        ];
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

class MaxHeapObj {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    let child = this.values.length - 1;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0) {
      if (this.values[parent].diff < this.values[child].diff) {
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
        right_child < this.values.length &&
        this.values[right_child].diff > this.values[left_child].diff
          ? right_child
          : left_child;

      if (this.values[parent].diff < this.values[smaller_child].diff) {
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

// const h = new MaxHeap();
// h.push(5);
// h.push(4);
// h.push(6);
// h.push(7);
// h.push(0);
// h.push(11);
// console.log(h);

// console.log(h.pop());
// console.log(h.pop());
// console.log(h.pop());
// console.log(h.pop());
// console.log(h);

module.exports = { MinHeap, MaxHeap, MinHeapObj, MaxHeapObj };
