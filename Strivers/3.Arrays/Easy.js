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

console.log(get_largest([5, 5, 7, 9, 6, 4, 3, 56, 78, 67, 5, 4, 6, 76, 6, 7]));

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

console.log(rotate_arr([1, 2, 3, 4, 5, 6, 7], 3));

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

console.log(move_zeros_to_end([1, 0, 2, 3, 0, 4, 0, 1]));

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

console.log(binary_serach([1, 2, 3], 3));
