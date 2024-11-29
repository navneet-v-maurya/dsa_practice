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
