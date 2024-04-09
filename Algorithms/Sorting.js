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

console.log(bubble_sort([1, 3, 2]));
console.log(insertion_sort([5, 1, 1, 2, 0, 0]));
