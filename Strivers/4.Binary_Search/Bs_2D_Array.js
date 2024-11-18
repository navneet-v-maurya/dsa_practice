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

//Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns,
// respectively. The elements of each row and each column are sorted in non-decreasing order.

// Example 1:
// Input Format:
//  N = 5, M = 5, target = 14
// mat[] =

// Result:
//  true
// Explanation:
//  Target 14 is present in the cell (3, 2)(0-based indexing) of the matrix. So, the answer is true.

// Example 2:
// Input Format:
//  N = 3, M = 3, target = 12,
// mat[] =

// Result:
//  false
// Explanation:
//  As target 12 is not present in the matrix, the answer is false.

const search_matrix_2 = (matrix, target) => {
  let start = 0;
  let end = matrix.length - 1;
  let col = matrix[start].length - 1;
  let current;

  while (start <= end) {
    if (col < 0) break;
    current = matrix[start][col];
    if (current === target) {
      return true;
    } else if (target < current) {
      col--;
    } else if (target > current) {
      start++;
    }
  }
  return false;
};

console.log(
  search_matrix_2(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    21
  )
);
