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
