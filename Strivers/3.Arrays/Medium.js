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
