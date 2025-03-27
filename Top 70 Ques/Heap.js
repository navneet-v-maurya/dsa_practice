const { MinHeap, MaxHeap, MinHeapObj, MaxHeapObj } = require("../Dsa/Heap");

const kth_smallest_el = (arr, k) => {
  const max_heap = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    max_heap.push(arr[i]);

    if (max_heap.values.length > k) {
      max_heap.pop();
    }
  }

  return max_heap.pop();
};

console.log("kth_smallest_el => ", kth_smallest_el([7, 10, 4, 3, 20, 15], 4));

const kth_largest_el = (arr, k) => {
  const min_heap = new MinHeap();

  for (let i = 0; i < arr.length; i++) {
    min_heap.push(arr[i]);

    if (min_heap.values.length > k) {
      min_heap.pop();
    }
  }

  return min_heap.pop();
};

console.log("kth_largest_el => ", kth_largest_el([7, 10, 4, 3, 20, 15], 4));

//nearly sorted array or k sorted array sorting
const sort_k_sorted_arr = (arr, k) => {
  const min_heap = new MinHeap();

  let temp;
  for (let i = 0; i < arr.length; i++) {
    min_heap.push(arr[i]);
    if (min_heap.values.length > k) {
      temp = min_heap.pop();
      arr[i - k] = temp;
    }
  }

  if (min_heap.values.length > 0) {
    for (let i = arr.length - k; i < arr.length; i++) {
      temp = min_heap.pop();
      arr[i] = temp;
    }
  }
  return arr;
};

console.log("sort_k_sorted_arr => ", sort_k_sorted_arr([6, 5, 3, 2, 8, 10, 9], 3));

//k closest numbers to an el
const find_closest_k_elements = (arr, k, x) => {
  let min_heap = new MinHeapObj();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) continue;
    min_heap.push({ diff: Math.abs(arr[i] - x), el: arr[i] });
  }

  const result = [];
  while (k-- > 0 && min_heap.values.length > 0) {
    result.push(min_heap.pop().el);
  }
  return result;
};

console.log(
  "find_closest_k_elements => ",
  find_closest_k_elements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19], 3, 17)
);

//top k frequent numbers

const top_k_frequent_numbers = (nums, k) => {
  const max_heap = new MaxHeapObj();

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const temp = map.get(nums[i]);
      map.set(nums[i], temp + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let el of map.entries()) {
    max_heap.push({ diff: el[1], el: el[0] });
  }
  const result = [];
  let temp;
  for (let i = 0; i < k; i++) {
    temp = max_heap.pop();
    result.push(temp.el);
  }

  return result;
};

console.log("top_k_frequent_numbers => ", top_k_frequent_numbers([1, 1, 1, 2, 2, 4, 4, 4], 2));

//frequency sort

const frequency_sort = (nums) => {
  const min_heap = new MinHeapObj();

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const temp = map.get(nums[i]);
      map.set(nums[i], temp + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let el of map.entries()) {
    min_heap.push({ diff: el[1], el: el[0] });
  }

  let temp;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (counter <= i) {
      temp = min_heap.pop();
      counter = counter + temp.diff;
      nums[i] = temp.el;
    } else {
      nums[i] = temp.el;
    }
  }

  return nums;
};

console.log("frequency_sort => ", frequency_sort([2, 3, 1, 3, 2]));

//k closest point to origin
//connect ropes to minimise the cost
//sum of el between k1 smallest and k2 smallest numbers
