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

const reverse_words = (s) => {
  let str = "";
  let temp = "";
  let last = " ";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (last === " ") {
        continue;
      }
      if (str.length === 0) {
        str = temp;
      } else {
        str = str + " " + temp;
      }

      temp = "";
    } else {
      temp = s[i] + temp;
    }
    last = s[i];
  }

  if (temp) {
    str = str.length != 0 ? str + " " + temp : temp;
  }
  return str;
};

console.log(reverse_words("the sky is blue"));

const largest_odd_number = (num) => {
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

console.log(largest_odd_number("35724"));

const longest_common_prefix = (strs) => {
  let res = strs[0];
  let str,
    temp = "";

  for (let i = 1; i < strs.length; i++) {
    str = strs[i];
    for (let j = 0; j < str.length; j++) {
      if (res[j] === str[j]) {
        temp += str[j];
      } else {
        break;
      }
    }
    if (temp === "") {
      res = "";
      break;
    }
    res = temp;
    temp = "";
  }
  return res;
};

console.log(longest_common_prefix(["flower", "flow", "flight"]));

const is_isomorphic = (s, t) => {
  const obj1 = {};
  const obj2 = {};
  let count = 0;
  let letter1, letter2;

  while (count < s.length) {
    letter1 = obj1[s[count]];
    letter2 = obj2[t[count]];

    if ((letter1 && letter1 !== t[count]) || (letter2 && letter2 !== s[count])) {
      return false;
    }

    obj1[s[count]] = t[count];
    obj2[t[count]] = s[count];
    count++;
  }

  return true;
};

console.log(is_isomorphic("paper", "title"));

const is_anagram = (s, t) => {
  if (s.length !== t.length) return false;
  const arr = new Array(26);
  arr.fill(0);

  const get_index = (char) => {
    if (char.length !== 1 || char < "a" || char > "z") {
      return -1;
    }
    return char.charCodeAt(0) - "a".charCodeAt(0);
  };

  let index1, index2;
  for (let i = 0; i < s.length; i++) {
    index1 = get_index(s[i]);
    index2 = get_index(t[i]);
    arr[index1] = arr[index1] + 1;
    arr[index2] = arr[index2] - 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(is_anagram("dgqztusjuu", "dqugjzutsu"));
