const max_depth = (s) => {
  let count = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }

    if (count > counter) {
      counter = count;
    }
  }

  return counter;
};

console.log(max_depth("(1+(2*3)+((8)/4))+1"));

const roman_to_int = (s) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;

  let counter = 0;

  while (counter < s.length) {
    if (roman[s[counter]] < roman[s[counter + 1]]) {
      count = count + roman[s[counter + 1]] - roman[s[counter]];
      counter++;
    } else {
      count = count + roman[s[counter]];
    }
    counter++;
  }
  return count;
};

console.log(roman_to_int("MCMXCIV"));

const check_inclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;
  const counter1 = new Array(26);
  const counter2 = new Array(26);

  counter1.fill(0);
  counter2.fill(0);
  let index1, index2;

  for (let i = 0; i < s1.length; i++) {
    console.log(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
    index1 = s1.charCodeAt(i) - 97;
    index2 = s2.charCodeAt(i) - 97;
    counter1[index1] = counter1[index1] + 1;
    counter2[index2] = counter2[index2] + 1;
  }

  const is_matched = () => {
    for (let i = 0; i < 26; i++) {
      if (counter1[i] !== counter2[i]) return false;
    }
    return true;
  };

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (is_matched()) return true;
    index2 = s2.charCodeAt(i) - 97;
    counter2[index2] = counter2[index2] - 1;
    counter2[s2.charCodeAt(i + s1.length) - 97] = counter2[s2.charCodeAt(i + s1.length) - 97] + 1;
  }

  return false;
};

console.log(check_inclusion("ab", "eidbaooo"));
