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

const prevLargerElement = (arr) => {
  const stack = [];
  const res = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
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

console.log("prevLargerElement=> ", prevLargerElement([1, 3, 2, 4]));

const prevSmallerElement = (arr) => {
  const stack = [];
  const res = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      res[i] = -1;
    } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      res[i] = stack[stack.length - 1];
    } else {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
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

console.log(prevSmallerElement([4, 5, 2, 10, 8]));

// The stock span problem is a financial problem where we have a series of daily price quotes for a stock and we need to
// calculate the span of stock price for all days. The span arr[i] of the stocks price on a given day i is defined as the
// maximum number of consecutive days just before the given day, for which the price of the stock on the given day is less than
// or equal to its price on the current day.

const calculateStockSpan_brute = (arr) => {
  const res = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] >= arr[i]) {
        res[i] = i - j;
        break;
      }
    }
    if (!res[i]) {
      res[i] = i + 1;
    }
  }
  return res;
};

console.log(calculateStockSpan_brute([21473, 14891, 26474, 2116]));

const calculateStockSpan = (arr) => {
  const res = new Array(arr.length);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      res[i] = i + 1;
    } else {
      res[i] = i - stack[stack.length - 1][1];
    }

    stack.push([arr[i], i]);
  }

  return res;
};

console.log(calculateStockSpan([21473, 14891, 26474, 2116]));

const max_area_histogram = (arr) => {
  let largest_area = 0;

  let prev_stack = [];
  let next_stack = [];
  let prev_small_index_arr = new Array(arr.length),
    next_small_index_arr = new Array(arr.length);

  //prev small
  for (let i = 0; i < arr.length; i++) {
    while (prev_stack.length > 0 && prev_stack[prev_stack.length - 1].val >= arr[i]) {
      prev_stack.pop();
    }

    if (prev_stack.length === 0) {
      prev_small_index_arr[i] = -1; // FIXED
    } else {
      prev_small_index_arr[i] = prev_stack[prev_stack.length - 1].index;
    }

    prev_stack.push({ val: arr[i], index: i });
  }

  //next small
  for (let i = arr.length - 1; i >= 0; i--) {
    while (next_stack.length > 0 && next_stack[next_stack.length - 1].val >= arr[i]) {
      next_stack.pop();
    }

    if (next_stack.length === 0) {
      next_small_index_arr[i] = arr.length; // FIXED
    } else {
      next_small_index_arr[i] = next_stack[next_stack.length - 1].index;
    }
    next_stack.push({ val: arr[i], index: i });
  }

  for (let i = 0; i < arr.length; i++) {
    let width = next_small_index_arr[i] - prev_small_index_arr[i] - 1;
    let area = width * arr[i];
    largest_area = Math.max(largest_area, area);
  }

  console.log("Prev Small Index:", prev_small_index_arr);
  console.log("Next Small Index:", next_small_index_arr);

  return largest_area;
};

console.log(max_area_histogram([2, 1, 5, 6, 2, 3]));
