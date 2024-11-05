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
