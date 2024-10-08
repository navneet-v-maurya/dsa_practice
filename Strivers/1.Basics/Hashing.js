// Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10].
// For each query, we need to find out how many times the number appears in the array. For example,
// if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0.

const get_count = (arr) => {
  let length = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > length) {
      length = arr[i];
    }
  }
  const new_arr = new Array(length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    new_arr[arr[i]]++;
  }
  return new_arr;
};

console.log(get_count([1, 2, 3, 1, 1, 1]));

const get_count_string = (char, str) => {
  const arr = new Array(123).fill(0);
  let char_val;
  for (let i = 0; i < str.length; i++) {
    char_val = str[i].charCodeAt(0);
    arr[char_val]++;
  }

  return arr[char.charCodeAt(0)];
};

console.log(get_count_string("z", "aaaczzzzz"));

//Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

// Example 2:

// Input: array[] = {2,2,3,4,4,2};
// Output: 2 3
// Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.

const get_high_low_freq = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let found = map.get(arr[i]);
    if (found) {
      map.set(arr[i], found + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  let highest, lowest;
  let highest_val = -Infinity,
    lowest_val = Infinity;

  const entries = map.entries();

  for (const [key, value] of entries) {
    if (highest_val < value) {
      highest = key;
      highest_val = value;
    }
    if (lowest_val > value) {
      lowest = key;
      lowest_val = value;
    }
  }

  return [lowest, highest];
};

console.log(get_high_low_freq([1, 2, 2, 1, 1, 1, 1, 34, 5, 67, 7856, 5]));
