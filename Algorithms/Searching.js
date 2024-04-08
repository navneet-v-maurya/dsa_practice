const arr = [5, 3, 7, 8, 1, 19, 456, 123];
const sorted_arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const linear_search = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

const binary_seach = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (num === arr[mid]) {
      return true;
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else if (num > arr[mid]) {
      start = mid + 1;
    }
  }
  return false;
};

//console.log(linear_search(arr, 3));
console.log(binary_seach(sorted_arr, 5));
