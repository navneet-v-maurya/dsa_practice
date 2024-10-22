//Problem Statement: Given an array, we have to find the largest element in the array.
// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array.

// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array.

const get_largest = (arr) => {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log("get_largest => ", get_largest([5, 5, 7, 9, 6, 4, 3, 56, 78, 67, 5, 4, 6, 76, 6, 7]));

//Problem Statement: Given an array, find the second smallest and second largest element in the array.
//Print ‘-1’ in the event that either of them doesn’t exist.

const get_second_largest_and_smallest = (arr) => {
  let largest = arr[0],
    second_largest = arr[0];

  let smallest = arr[0],
    second_smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      second_largest = largest;
      largest = arr[i];
    } else if (arr[i] > second_largest) {
      second_largest = arr[i];
    }

    if (arr[i] < smallest) {
      second_smallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < second_smallest) {
      second_smallest = arr[i];
    }
  }
  return { "second smallest": second_smallest, "second largest": second_largest };
};

console.log(get_second_largest_and_smallest([5, 5, 79, 90, 6, 4, 3, 56, 78, 67, 6, 76, 6, 7]));

// Problem Statement: Given an array of size n, write a program to check if the given array is sorted
// in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True,
// Else return False.

const check_sorted_arr = (arr) => {
  let acending = true;
  let decending = true;

  for (let i = 1; i < arr.length; i++) {
    if (!acending && !decending) return false;

    if (acending) {
      if (arr[i] < arr[i - 1]) {
        acending = false;
      }
    }
    if (decending) {
      if (arr[i] > arr[i - 1]) {
        decending = false;
      }
    }
  }
  return acending ? "Acending" : "Decending";
};

console.log(check_sorted_arr([1, 2, 3, 4]));

// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates
// in place such that each unique element appears only once. The relative order of the elements should be kept the same.

const remove_dublicates_sorted = (arr) => {
  let first = 0;
  let second = 1;

  while (second < arr.length) {
    if (arr[second - 1] !== arr[second]) {
      first++;
      arr[first] = arr[second];
      second++;
    } else {
      second++;
    }
  }
  return { count: first + 1, arr };
};

console.log(remove_dublicates_sorted([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]));

//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotate_arr = (arr, k) => {
  k = k % arr.length;

  const reverse = (arr, start, end) => {
    let reverse_temp;

    while (start < end) {
      reverse_temp = arr[start];
      arr[start] = arr[end];
      arr[end] = reverse_temp;
      start++;
      end--;
    }
  };

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
};

console.log("rotate_arr => ", rotate_arr([1, 2, 3, 4, 5, 6, 7], 3));

//Problem Statement: You are given an array of integers, your task is to move all the zeros
//in the array to the end of the array and move non-negative integers to the front by maintaining their order.

const move_zeros_to_end = (arr) => {
  let start = 0,
    end = 0;
  let temp;
  while (end < arr.length) {
    if (arr[end] !== 0) {
      temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      end++;
      start++;
    } else {
      end++;
    }
  }
  return arr;
};

console.log("move_zeros_to_end => ", move_zeros_to_end([1, 0, 2, 3, 0, 4, 0, 1]));

const binary_serach = (sorted_arr, num) => {
  let start = 0,
    end = sorted_arr.length - 1;
  let mean;
  while (start <= end) {
    mean = Math.floor((start + end) / 2);
    if (sorted_arr[mean] === num) {
      return mean;
    } else if (num < sorted_arr[mean]) {
      end = mean - 1;
    } else {
      start = mean + 1;
    }
  }
  return -1;
};

console.log("binary_serach => ", binary_serach([1, 2, 3], 3));

//Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
// Example 1:
// Input:

// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}
// arr2[] = {2,3,4,4,5}
// Output:

//  {1,2,3,4,5}

// Explanation:

// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5}

// Example 2:
// Input:

// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output:
//  {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation:

// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}

const array_union = (arr1, arr2) => {
  let counter1 = 0;
  let counter2 = 0;

  const union = [];

  while (counter1 < arr1.length && counter2 < arr2.length) {
    if (arr1[counter1] < arr2[counter2]) {
      if (union[union.length - 1] !== arr1[counter1]) {
        union.push(arr1[counter1]);
      }
      counter1++;
    } else {
      if (union[union.length - 1] !== arr2[counter2]) {
        union.push(arr2[counter2]);
      }
      counter2++;
    }
  }

  while (counter1 < arr1.length) {
    if (arr1[counter1] !== union[union.length - 1]) {
      union.push(arr1[counter1]);
    }
    counter1++;
  }

  while (counter2 < arr2.length) {
    if (arr2[counter2] !== union[union.length - 1]) {
      union.push(arr2[counter2]);
    }
    counter2++;
  }

  return union;
};

console.log("array_union => ", array_union([1, 2, 4, 5], [1, 3, 4, 6, 7, 8, 9, 9, 9, 9]));

//Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N.
//Find the number(between 1 to N), that is not present in the given array.
// Example 1:
// Input Format:
//  N = 5, array[] = {1,2,4,5}
// Result:
//  3
// Explanation:
// In the given array, number 3 is missing. So, 3 is the answer.

// Example 2:
// Input Format:
//  N = 3, array[] = {1,3}
// Result:
//  2
// Explanation:
// In the given array, number 2 is missing. So, 2 is the answer.

const get_missing_numbers = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i].toString(), arr[i].toString());
  }

  for (let i = 0; i <= arr.length; i++) {
    if (!map.get(i.toString())) {
      return i;
    }
  }

  return -1;
};

const get_missing_numbers_optimal = (arr) => {
  const sum = (arr.length * (arr.length + 1)) / 2;
  let sum_of_arr = 0;
  for (let i = 0; i < arr.length; i++) {
    sum_of_arr += arr[i];
  }

  return sum - sum_of_arr;
};

console.log("get_missing_numbers => ", get_missing_numbers([0, 1, 2, 4, 5]));
console.log("get_missing_numbers_optimal => ", get_missing_numbers_optimal([0, 1, 2, 4, 5]));

//Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1}

// Output: 2

// Explanation: There are two consecutive 1's in the array.

const count_maximum_one = (arr) => {
  let max = 0;
  let temp_count = 0;
  let counter = 0;

  while (counter < arr.length) {
    if (arr[counter]) {
      temp_count++;

      if (counter === arr.length - 1 && temp_count > max) {
        max = temp_count;
      }
    } else {
      if (temp_count > max) {
        max = temp_count;
      }
      temp_count = 0;
    }
    counter++;
  }
  return max;
};

console.log("count_maximum_one => ", count_maximum_one([1, 1, 0, 1, 1, 1, 0]));

//Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
// Example 1:
// Input Format:
//  arr[] = {2,2,1}
// Result:
//  1
// Explanation:
//  In this array, only the element 1 appear once and so it is the answer.

// Example 2:
// Input Format:
//  arr[] = {4,1,2,1,2}
// Result:
//  4
// Explanation:
//  In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.

const find_single_number = (arr) => {
  const map = new Map();
  let found = null;
  for (let i = 0; i < arr.length; i++) {
    found = map.get(arr[i]);
    if (found) {
      map.set(arr[i], found + 1);
    } else {
      map.set(arr[i], 1);
    }
    found = null;
  }

  for (let i = 0; i < arr.length; i++) {
    found = map.get(arr[i]);
    if (found < 2) {
      return arr[i];
    }
  }

  return -1;
};

const find_single_number_suing_xor = (arr) => {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }

  return xor;
};

console.log("find_single_number =>", find_single_number([2, 2, 1]));
console.log("find_single_number_suing_xor => ", find_single_number_suing_xor([2, 2, 1]));

//Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

const len_of_long_sub_arr_pos = (arr, k) => {
  let min = 0,
    max = 0;
  let sum = arr[0];
  let count = 0;

  while (min < arr.length && max < arr.length) {
    if (sum === k) {
      count = Math.max(count, max - min + 1);
      max++;
      if (max < arr.length) sum += arr[max];
    } else if (sum > k) {
      sum -= arr[min];
      min++;
    } else {
      max++;
      if (max < arr.length) sum += arr[max];
    }
  }

  return count;
};

console.log("len_of_long_sub_arr_pos => ", len_of_long_sub_arr_pos([2, 3, 5, 1, 9], 10));
