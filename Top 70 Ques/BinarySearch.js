//binary search
const binary_search = (arr, val) => {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) return mid;

    if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log("binary_search => ", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

//reverse array binary search
const reverse_arr_binary_search = (arr, val) => {
  let left = 0,
    right = arr.length - 1;

  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) return mid;

    if (arr[mid] < val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(
  "reverse_arr_binary_search => ",
  reverse_arr_binary_search([19, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 0)
);

//asorted array binary search
const asorted_arr_binary_search = (arr, val) => {
  if (arr[0] > arr[arr.length - 1]) {
    return reverse_arr_binary_search(arr, val);
  } else {
    return binary_search(arr, val);
  }
};

console.log(
  "asorted_arr_binary_search => ",
  asorted_arr_binary_search([19, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 0)
);

//first occuerance of element
const first_occurance_of_el = (arr, val) => {
  let left = 0,
    right = arr.length - 1;

  let res = -1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      res = mid;
      right = mid - 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
};

console.log("first_occurance_of_el => ", first_occurance_of_el([1, 2, 2, 2, 2, 2, 7, 7, 9], 1));

//last occuerance of element
const last_occurance_of_el = (arr, val) => {
  let left = 0,
    right = arr.length - 1;

  let res = -1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      res = mid;
      left = mid + 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
};

console.log("last_occurance_of_el => ", last_occurance_of_el([1, 2, 2, 2, 2, 2, 7, 7, 9], 1));

//count of el in sorted array
const count_of_el = (arr, el) => {
  const start = first_occurance_of_el(arr, el);
  const end = last_occurance_of_el(arr, el);

  if (start === -1 && end === -1) return 0;

  return end - start + 1;
};

console.log("count_of_el => ", count_of_el([1, 2, 2, 2, 2, 2, 7, 7, 9], 2));

//number of times sorted array is rotated

const get_min_in_rotetd_arr = (arr) => {
  let start = 0,
    end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      return mid;
    }

    if (arr[mid + 1] < arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(get_min_in_rotetd_arr([4, 5, 6, 7, 0, 1, 2]));

// find el in rotated sorted array
// searching in a nearly sorted array
// floor of an el in sorted array
// ciel of an el in sorted array
// next alphabetical el
