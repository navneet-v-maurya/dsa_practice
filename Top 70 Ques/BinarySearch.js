//binary search
const binary_search = (arr, val, start = 0, end = arr.length - 1) => {
  let left = start,
    right = end;
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

console.log("binary_search => ", binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 1));

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
const get_min_in_rotated_arr = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    const prev = (mid - 1 + arr.length) % arr.length;
    const next = (mid + 1) % arr.length;

    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    }

    if (arr[start] < arr[end]) {
      return start;
    }

    if (arr[mid] >= arr[start]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

console.log("get_min_in_rotated_arr => ", get_min_in_rotated_arr([4, 5, 6, 7, 0, 1, 2]));

// find el in rotated sorted array
const get_el_in_rotated_arr = (nums, target) => {
  const mid = get_min_in_rotated_arr(nums);

  const found1 = binary_search(nums, target, 0, mid - 1);
  const found2 = binary_search(nums, target, mid, nums.length - 1);

  if (found1 !== -1) return found1;
  if (found2 !== -1) return found2;

  return -1;
};

console.log("get_el_in_rotated_arr => ", get_el_in_rotated_arr([0, 1, 2], 4));

// searching in a nearly sorted array
const find_el_in_nearly_soted_arr = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (mid - 1 >= 0 && arr[mid - 1] === target) return mid - 1;
    if (mid + 1 < arr.length && arr[mid + 1] === target) return mid + 1;

    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(
  "find_el_in_nearly_soted_arr => ",
  find_el_in_nearly_soted_arr([10, 3, 40, 20, 50, 80, 70], 0)
);

// ciel of an el in sorted array
const ciel_of_el = (arr, x) => {
  let start = 0,
    end = arr.length - 1,
    mid,
    ciel = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] >= x) {
      end = mid - 1;
      ciel = mid;
    } else {
      start = mid + 1;
    }
  }
  return ciel;
};

console.log("ciel_of_el => ", ciel_of_el([1, 1, 4, 4, 4, 4, 10], 4));

// floor of an el in sorted array
const floor_of_el = (arr, x) => {
  let start = 0,
    end = arr.length - 1,
    mid,
    floor = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] <= x) {
      start = mid + 1;
      floor = mid;
    } else {
      end = mid - 1;
    }
  }
  return floor;
};
console.log("floor_of_el => ", floor_of_el([1, 1, 4, 4, 4, 4, 10], 4));

// next alphabetical el
