//Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1, 2, 3, 4, 5

//selection
const selection_sort = (arr) => {
  let min_index;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
      if (min_index !== i) {
        temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(selection_sort([1, 2, 3, 6, 2, 1]));

//bubble
const bubble_sort = (arr) => {
  let temp;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubble_sort([1, 2, 3, 6, 2, 1]));

//insertion
const insertion_sort = (arr) => {};
