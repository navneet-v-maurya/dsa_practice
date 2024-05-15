//bubble sort
const bubble_sort = (arr) => {
  let swapped;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}; //O(n^2)

const insertion_sort = (arr) => {
  let current;
  let j;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}; //O(n^2)

const selection_sort = (arr) => {
  let min, min_index, temp;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        min_index = j;
      }
    }
    temp = arr[i];
    arr[i] = min;
    arr[min_index] = temp;
  }
  return arr;
}; //O(n^2)

//importing heap data strutcture
const Heap = require("../Dsa/Heap");

const heap_sort = (arr) => {
  let min_heap = new Heap();

  for (let i = 0; i < arr.length; i++) {
    min_heap.push(arr[i]);
  }

  let count = arr.length - 1;
  let root;
  while (min_heap.values.length >= 1) {
    root = min_heap.pop();
    arr[count] = root;
    count--;
  }

  return arr;
}; //O(nlog(n))

const merge = (arr1, arr2) => {
  let result = [];
  let left = 0,
    right = 0;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      result.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }

  return result;
};

const merge_sort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = merge_sort(arr.slice(0, mid));
  let right = merge_sort(arr.slice(mid, arr.length));

  return merge(left, right);
}; //O(nlog(n))

const pivot = (arr, start, end) => {
  let pivot_value = arr[start];
  let pivot_index = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot_value) {
      pivot_index++;
      let temp = arr[i];
      arr[i] = arr[pivot_index];
      arr[pivot_index] = temp;
    }
  }
  let temp = arr[pivot_index];
  arr[pivot_index] = pivot_value;
  arr[start] = temp;
  return pivot_index;
};

const quick_sort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let pivot_index = pivot(arr, start, end);
    quick_sort(arr, start, pivot_index - 1);
    quick_sort(arr, pivot_index + 1, end);
  }
  return arr;
}; //O(nlog(n))=best  o(n^2)=worst

console.log(bubble_sort([5, 1, 1, 2, 0, 0]));
console.log(insertion_sort([5, 1, 1, 2, 0, 0]));
console.log(selection_sort([5, 1, 1, 2, 0, 0]));
console.log(heap_sort([5, 1, 1, 2, 0, 0]));
console.log(merge_sort([5, 1, 1, 2, 0, 0]));
console.log(quick_sort([5, 1, 1, 2, 0, 0]));
