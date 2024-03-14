const min = (num1, num2) => {
  return num1 > num2 ? num2 : num1;
};

const isEven = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 0) {
    return true;
  } else {
    return isEven(num - 2);
  }
};

const countBs = (str, char) => {
  let count = 0;
  let char_count = 0;
  while (count < str.length) {
    if (str[count] === char) char_count++;

    count++;
  }
  return char_count;
};

console.log(min(-2, -1));

console.log(isEven(18));
console.log(countBs("agyagsghfasdtyfqawgydfvjgh", "f"));
