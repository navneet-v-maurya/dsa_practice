class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    const obj = {
      val: val,
    };

    if (this.stack.length === 0) {
      obj.min = val;
    } else {
      const last_el = this.stack[this.stack.length - 1];
      if (last_el.min < val) {
        obj.min = last_el.min;
      } else {
        obj.min = val;
      }
    }

    this.stack.push(obj);
  }

  pop() {
    return this.stack.pop().val;
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1].val;
  }

  get_min() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1].min;
  }
}

const st = new MinStack();

console.log(st.push(-2));
console.log(st.push(0));
console.log(st.push(-3));
console.log(st.get_min());
console.log(st.pop());
console.log(st.top());
console.log(st.get_min());

const valid_parentheses = (str) => {
  const temp = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];
  let temp2;

  for (let i = 0; i < str.length; i++) {
    if (temp[str[i]]) {
      stack.push(str[i]);
    } else {
      temp2 = stack.pop();
      if (temp[temp2] !== str[i]) return false;
    }
  }

  if (stack.length !== 0) return false;
  return true;
};

console.log(valid_parentheses("()[][{}"));

// Given an array arr[ ] of integers, the task is to find the next greater element for each element of the array
// in order of their appearance in the array. Next greater element of an element in the array is the nearest element on the
// right which is greater than the current element.
// If there does not exist next greater of current element, then next greater element for current element is -1.
// For example, next greater of the last element is always -1.
const nextLargerElement_brute = (arr) => {
  const res = new Array(arr.length);
  console.log(res);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        res[i] = arr[j];
        break;
      }
    }
    if (!res[i]) {
      res[i] = -1;
    }
  }

  return res;
};

console.log(
  nextLargerElement_brute([
    41, 88, 58, 69, 93, 42, 44, 25, 12, 47, 41, 88, 58, 69, 93, 42, 44, 25, 12, 47,
  ])
);

const nextLargerElement = (arr) => {
  const stack = [];
  const res = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (stack.length === 0) {
      res[i] = -1;
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      res[i] = stack[stack.length - 1];
    } else {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }

      if (stack.length === 0) {
        res[i] = -1;
      } else {
        res[i] = stack[stack.length - 1];
      }
    }

    stack.push(arr[i]);
  }

  return res;
};

console.log(
  nextLargerElement([
    41, 88, 58, 69, 93, 42, 44, 25, 12, 47, 41, 88, 58, 69, 93, 42, 44, 25, 12, 47,
  ])
);
