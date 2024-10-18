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
