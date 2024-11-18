//Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns,
//respectively. The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the
//last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

// Example 1:
// Input Format:
//  N = 3, M = 4, target = 8,
// mat[] =
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// Result:
//  true
// Explanation:
//  The ‘target’  = 8 exists in the 'mat' at index (1, 3).

// Example 2:
// Input Format:
//  N = 3, M = 3, target = 78,
// mat[] =
// 1 2 4
// 6 7 8
// 9 10 34
// Result:
//  false
// Explanation:
//  The ‘target' = 78 does not exist in the 'mat'. Therefore in the output, we see 'false'.

const search_matrix = (matrix, target) => {
  let index;
  let outer_start = 0;
  let outer_end = matrix.length - 1;

  while (outer_start <= outer_end) {
    index = Math.floor((outer_start + outer_end) / 2);
    if (target >= matrix[index][0] && target <= matrix[index][matrix[index].length - 1]) {
      break;
    } else if (target < matrix[index][0]) {
      outer_end = index - 1;
    } else {
      outer_start = index + 1;
    }
  }

  let start = 0;
  let end = matrix[index].length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (matrix[index][mid] === target) {
      return true;
    } else if (target > matrix[index][mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(
  search_matrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
