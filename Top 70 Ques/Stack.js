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

console.log("stack with extra, PUSH", st.push(-2));
console.log("stack with extra, PUSH", st.push(0));
console.log("stack with extra, PUSH", st.push(-3));
console.log("stack with extra, MIN", st.get_min());
console.log("stack with extra, POP", st.pop());
console.log("stack with extra, TOP", st.top());
console.log("stack with extra, MIN", st.get_min());
console.log("***************************************************************************\n");

class MinStackWithoutEtraSpace {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.min = val;
    } else {
      if (val >= this.min) {
        this.stack.push(val);
      } else {
        this.min = val;
        this.stack.push(2 * val - this.min);
      }
    }
    return this.stack;
  }

  pop() {
    if (this.stack.length === 0) return null;
    if (this.stack[this.stack.length - 1] >= this.min) {
      return this.stack.pop();
    } else {
      const temp = this.stack.pop();
      this.min = 2 * val - temp;
      return 2 * val - temp;
    }
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  get_min() {
    if (this.stack.length === 0) return null;
    return this.min;
  }
}

const st_2 = new MinStack();

console.log("stack without extra, PUSH", st_2.push(-2));
console.log("stack without extra, PUSH", st_2.push(0));
console.log("stack without extra, PUSH", st_2.push(-3));
console.log("stack without extra, MIN", st_2.get_min());
console.log("stack without extra, POP", st_2.pop());
console.log("stack without extra, TOP", st_2.top());
console.log("stack without extra, MIN", st_2.get_min());
console.log("***************************************************************************\n");

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

console.log("valid_parentheses => ", valid_parentheses("()[][{}"));
console.log("***************************************************************************\n");

// Given an array arr[ ] of integers, the task is to find the next greater element for each element of the array
// in order of their appearance in the array. Next greater element of an element in the array is the nearest element on the
// right which is greater than the current element.
// If there does not exist next greater of current element, then next greater element for current element is -1.
// For example, next greater of the last element is always -1.
const nextLargerElement_brute = (arr) => {
  const res = new Array(arr.length);

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
  "nextLargerElement_brute => ",
  nextLargerElement_brute([
    41, 88, 58, 69, 93, 42, 44, 25, 12, 47, 41, 88, 58, 69, 93, 42, 44, 25, 12, 47,
  ])
);
console.log("***************************************************************************\n");

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
  "nextLargerElement => ",
  nextLargerElement([
    41, 88, 58, 69, 93, 42, 44, 25, 12, 47, 41, 88, 58, 69, 93, 42, 44, 25, 12, 47,
  ])
);
console.log("***************************************************************************\n");

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

console.log("prevLargerElement => ", prevLargerElement([1, 3, 2, 4]));
console.log("***************************************************************************\n");

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

console.log("prevSmallerElement => ", prevSmallerElement([4, 5, 2, 10, 8]));
console.log("***************************************************************************\n");

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

console.log("calculateStockSpan_brute => ", calculateStockSpan_brute([21473, 14891, 26474, 2116]));

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

console.log("calculateStockSpan => ", calculateStockSpan([21473, 14891, 26474, 2116]));
console.log("***************************************************************************\n");

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

  return largest_area;
};

console.log("max_area_histogram => ", max_area_histogram([2, 1, 5, 6, 2, 3]));

const max_area_histogram_matrix = (mat) => {
  const height = new Array(mat[0].length).fill(0);
  let largest = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] > 0) {
        height[j] = height[j] + 1;
      } else {
        height[j] = 0;
      }
    }

    const temp_area = max_area_histogram(height);

    if (temp_area > largest) {
      largest = temp_area;
    }
  }

  return largest;
};

console.log(
  "max_area_histogram_matrix => ",
  max_area_histogram_matrix([
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
  ])
);
console.log("***************************************************************************\n");

const trapping_rain_water = (height) => {
  if (!height || height.length < 3) return 0;

  const prev_max = new Array(height.length);
  const next_max = new Array(height.length);

  prev_max[0] = height[0];

  for (let i = 1; i < height.length; i++) {
    prev_max[i] = Math.max(prev_max[i - 1], height[i]);
  }

  next_max[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    next_max[i] = Math.max(next_max[i + 1], height[i]);
  }

  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    const temp = Math.min(prev_max[i], next_max[i]);
    if (temp > height[i]) {
      sum += temp - height[i];
    }
  }

  return sum;
};

console.log("trapping_rain_water => ", trapping_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.warn("***************************************************************************\n");
