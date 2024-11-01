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
const kadane_algorithm = (arr) => {
  let sum = 0;
  let greatest_sum = -Infinity;
  let start = 0,
    temp_start = 0,
    end = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum > greatest_sum) {
      greatest_sum = sum;
      start = temp_start;
      end = i;
    }

    if (sum < 0) {
      sum = 0;
      temp_start = i + 1;
    }
  }

  const sub_arr = arr.slice(start, end + 1);
  return { greatest_sum, sub_arr };
};

console.log(kadane_algorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

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

//Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

// Example 1:
// Input:
//  prices = [7,1,5,3,6,4]
// Output:
//  5
// Explanation:
//  Buy on day 2 (price = 1) and
// sell on day 5 (price = 6), profit = 6-1 = 5.

// Note
// : That buying on day 2 and selling on day 1
// is not allowed because you must buy before
// you sell.

// Example 2:
// Input:
//  prices = [7,6,4,3,1]
// Output:
//  0
// Explanation:
//  In this case, no transactions are
// done and the max profit = 0.

const stock = (arr) => {
  let buy = arr[0];
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (buy > arr[i]) {
      buy = arr[i];
    } else {
      if (arr[i] - buy > profit) {
        profit = arr[i] - buy;
      }
    }
  }
  return profit;
};

console.log(stock([7, 1, 5, 3, 6, 4]));

//Problem Statement: There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative
//order of positive and negative elements, you must return an array of alternately positive and negative values.

// Example 1:

// Input:
// arr[] = {1,2,-4,-5}, N = 4
// Output:
// 1 -4 2 -5

// Explanation:

// Positive elements = 1,2
// Negative elements = -4,-5
// To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

// Example 2:
// Input:
// arr[] = {1,2,-3,-1,-2,-3}, N = 6
// Output:
// 1 -3 2 -1 3 -2
// Explanation:

// Positive elements = 1,2,3
// Negative elements = -3,-1,-2
// To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
// Also, -3 should come before -1, and -1 should come before -2.

const rearrange_array = (arr) => {
  let pos, neg;
  if (arr[0] < 0) {
    neg = 0;
    pos = 1;
  } else {
    pos = 0;
    neg = 1;
  }

  const new_arr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      new_arr[pos] = arr[i];
      pos += 2;
    } else if (arr[i] < 0) {
      new_arr[neg] = arr[i];
      neg += 2;
    }
  }

  return new_arr;
};

console.log(rearrange_array([3, 1, -2, -5, 2, -4]));

//Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

// Example 1:
// Input:

//  arr = [4, 7, 1, 0]
// Output
// :
//  7 1 0
// Explanation:

//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

// Example 2:
// Input:

//  arr = [10, 22, 12, 3, 0, 6]
// Output:

//  22 12 6
// Explanation:

//  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.

const get_leader = (arr) => {
  let highest = arr[arr.length - 1];
  const leaders = [highest];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > highest) {
      leaders.push(arr[i]);
      highest = arr[i];
    }
  }
  return leaders;
};

console.log(get_leader([4, 7, 1, 0]));

//Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

// Example 1:
// Input:
//  [100, 200, 1, 3, 2, 4]

// Output:
//  4

// Explanation:
//  The longest consecutive subsequence is 1, 2, 3, and 4.

// Input:
//  [3, 8, 5, 7, 6]

// Output:
//  4

// Explanation:
//  The longest consecutive subsequence is 5, 6, 7, and 8.

const longest_consecutive = (arr) => {
  const st = new Set();
  let count = 0;
  let longest = 0;
  let temp;

  for (let i = 0; i < arr.length; i++) {
    st.add(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (st.has(arr[i] - 1)) {
      count = 0;
    } else {
      count = arr[i];
      while (st.has(count)) {
        count++;
      }

      count = count - arr[i];

      if (count > longest) {
        longest = count;
      }
    }
  }
  return longest;
};

console.log(longest_consecutive([100, 200, 1, 3, 5, 7]));

//Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

// Examples 1:
// Input:
//  matrix=[[1,1,1],[1,0,1],[1,1,1]]

// Output:
//  [[1,0,1],[0,0,0],[1,0,1]]

// Explanation:
//  Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

// Input:
//  matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output:
// [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:
// Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

const set_zeros = (matrix) => {
  const row_map = new Map();
  const col_map = new Map();
  let row_found, col_found;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row_map.set(i, i);
        col_map.set(j, j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    row_found = row_map.get(i);

    for (let j = 0; j < matrix[i].length; j++) {
      if (row_found !== undefined) {
        matrix[i][j] = 0;
      } else {
        col_found = col_map.get(j);
        if (col_found !== undefined) {
          matrix[i][j] = 0;
        }
        col_found = undefined;
      }
    }

    row_found = undefined;
  }

  return matrix;
}; // still need space optimization

console.log(
  set_zeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
