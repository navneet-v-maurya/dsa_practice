//Problem Statement: Given an array of integers arr[] and an integer target.

// Note: You are not allowed to use the same element twice. Example: If the target is
// equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.

const two_sum = (arr, target) => {
  const map = new Map();
  let start = 0;
  let found;
  while (start < arr.length) {
    found = map.get(target - arr[start]);
    if (found !== undefined && arr[start] !== arr[start] / 2) {
      return [found, start];
    }
    if (found === undefined) {
      map.set(arr[start], start);
    }
    start++;
    found = undefined;
  }
  return [-1, -1];
};

console.log(two_sum([2, 6, 5, 8, 11], 15));

// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program
// to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

// Input:
//  nums = [2,0,2,1,1,0]
// Output
// : [0,0,1,1,2,2]

// Input:
//  nums = [2,0,1]
// Output:
//  [0,1,2]

// Input:
//  nums = [0]
// Output:
//  [0]

const sort_colors = (arr) => {
  let zero = 0;
  let two = arr.length - 1;
  let count = 0;
  let temp;

  while (count <= two) {
    if (arr[count] === 2) {
      if (two !== count) {
        while (arr[two] === 2 && two > count) {
          two--;
        }

        temp = arr[two];
        arr[two] = arr[count];
        arr[count] = temp;
      }
      two--;
    }
    if (arr[count] === 0) {
      if (zero !== count) {
        while (arr[zero] === 0 && zero < count) {
          zero++;
        }

        temp = arr[zero];
        arr[zero] = arr[count];
        arr[count] = temp;
      }
      zero++;
    }
    count++;
  }
  return arr;
};

console.log(sort_colors([2, 0, 2, 1, 1, 0]));

//Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
//has the largest sum and returns its sum and prints the subarray.

// Example 1:
// Input:
//  arr = [-2,1,-3,4,-1,2,1,-5,4]

// Output:
//  6

// Explanation:
//  [4,-1,2,1] has the largest sum = 6.

// Examples 2:
// Input:
//  arr = [1]

// Output:
//  1

// Explanation:
//  Array has only one element and which is giving positive sum of 1.
const kdanes_algorithm = (arr) => {
  //remaining because of sickness
};

//Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the
//given array. You may consider that such an element always exists in the array.

// Example 1:
// Input Format
// : N = 3, nums[] = {3,2,3}
// Result
// : 3
// Explanation
// : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.

// Example 2:
// Input Format:
//   N = 7, nums[] = {2,2,1,1,1,2,2}

// Result
// : 2

// Explanation
// : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:
//   N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

// Result
// : 4

const majority_element = (arr) => {
  let count = 1;
  let num = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
      num = arr[i];
      count++;
    } else if (num == arr[i]) {
      count++;
    } else {
      count--;
    }
  }
  return num;
};

console.log(majority_element([2, 2, 1, 1, 1, 2, 2]));
