const { MinHeap, MaxHeap } = require("../Dsa/Heap");

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
//k closest numbers to an el
