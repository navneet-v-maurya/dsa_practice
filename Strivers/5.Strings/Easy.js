const remove_outer_parentheses = (s) => {
  let count = 0;
  let str = "";
  let temp_str = "";

  for (let char of s) {
    if (char === "(") {
      if (count > 0) {
        temp_str += char;
      }
      count++;
    } else if (char === ")") {
      count--;
      if (count > 0) {
        temp_str += char;
      }
      if (count === 0) {
        str += temp_str;
        temp_str = "";
      }
    }
  }

  return str;
};

console.log(remove_outer_parentheses("(()())(())(()(()))"));
