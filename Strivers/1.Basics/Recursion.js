const print_name = (start = 0, count) => {
  if (start >= count) return;
  console.log(start, "nav");
  print_name(start + 1, count);
};

print_name(0, 3);

//Problem: Print from 1 to N using Recursion

const print_numbers = (end) => {
  start = 1;
  const print = (start, end) => {
    if (start > end) return;
    console.log(start);
    print(start + 1, end);
  };
  print(start, end);
};

print_numbers(10);

//Problem: Print from N to 1 using Recursion

const print_reverse_numbers = (start) => {
  if (start < 1) return;
  console.log(start);
  print_reverse_numbers(start - 1);
};

print_reverse_numbers(10);

//Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.
// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

// Example 2:
// Input: N=6
// Output: 21
// Explanation: 1+2+3+4+5+6=15

const sum_of_numbers = (input) => {
  if (input === 1) return 1;
  let sum = input + sum_of_numbers(input - 1);
  return sum;
};

console.log(sum_of_numbers(3));

//Problem Statement: Given a number X,  print its factorial.

// Example 1:
// Input: X = 5
// Output: 120
// Explanation: 5! = 5*4*3*2*1

// Example 2:
// Input: X = 3
// Output: 6
// Explanation: 3!=3*2*1

const factorial = (input) => {
  if (input === 1) return 1;
  let sum = input * factorial(input - 1);
  return sum;
};

console.log(factorial(5));

//Problem Statement: You are given an array. The task is to reverse the array and print it.

// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}

// Example 2:
// Input: N=6 arr[] = {10,20,30,40}
// Output: {40,30,20,10}

const reverse_array = (arr) => {
  let start = 0,
    end = arr.length - 1;
  const reverse = (start, end, arr) => {
    if (start >= end) return;
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverse(start + 1, end - 1, arr);
  };
  reverse(start, end, arr);
  return arr;
};

console.log(reverse_array([1, 2, 3, 4, 5, 6]));

const string_palindrome_iterartive = (str) => {
  let start = 0,
    end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
};

const string_palindrome_recursive = (str) => {
  let start = 0,
    end = str.length - 1;

  const palindrome = (start, end, str) => {
    console.log(start, end);
    if (start >= end) return true;

    if (str[start] !== str[end]) {
      return false;
    }
    return palindrome(start + 1, end - 1, str);
  };

  return palindrome(start, end, str);
};

console.log(string_palindrome_iterartive("ABCDCBA"));
console.log(string_palindrome_recursive("ABCDCBA"));

//Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

// Example 1:
// Input: N = 5
// Output: 0 1 1 2 3 5
// Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

// Example 2:
// Input: 6

// Output: 0 1 1 2 3 5 8
// Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing)

const get_fibo = (input) => {};
