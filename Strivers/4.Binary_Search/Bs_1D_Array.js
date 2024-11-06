//Binary search

const binary_search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    }
  }
  return -1;
};

const binary_search_recursive = (arr, start, end, target) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;

  if (target < arr[mid]) {
    return binary_search_recursive(arr, start, mid - 1, target);
  } else {
    return binary_search_recursive(arr, mid + 1, end, target);
  }
};

console.log(binary_search([-1, 0, 3, 5, 9, 12], 9));
console.log(binary_search_recursive([-1, 0, 3, 5, 9, 12], 0, 5, 9));

//Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

// Example 1:
// Input Format:
//  N = 4, arr[] = {1,2,2,3}, x = 2
// Result:
//  1
// Explanation:
//  Index 1 is the smallest index such that arr[1] >= x.

// Example 2:
// Input Format:
//  N = 5, arr[] = {3,5,8,15,19}, x = 9
// Result:
//  3
// Explanation:
//  Index 3 is the smallest index such that arr[3] >= x.

const get_bounds = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let floor_index = -1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      floor_index = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return floor_index;
};

console.log(get_bounds([10143, 29122, 30010], 23112));

//Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

// Example 1:
// Input Format: arr[] = {1,2,4,7}, x = 6
// Result: 3
// Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

// Example 2:
// Input Format: arr[] = {1,2,4,7}, x = 2
// Result: 1
// Explanation: 2 is present in the array and so we will return its index i.e. 1.

const search_insert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;
  let ans = end;

  if (target > nums[end]) return end + 1;
  if (target < nums[start]) return 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(search_insert([1, 2, 4, 7], 2));

//Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

const search_range = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let found = false;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) {
      found = true;
      break;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    }
  }

  if (!found) return [-1, -1];

  let left = mid,
    right = mid;

  while (nums[left] === target || nums[right] === target) {
    if (nums[left] === target) {
      left--;
    }

    if (nums[right] === target) {
      right++;
    }
  }
  return [left + 1, right - 1];
};

console.log(search_range([1, 2, 2, 2, 2, 2, 4, 7], 2));
