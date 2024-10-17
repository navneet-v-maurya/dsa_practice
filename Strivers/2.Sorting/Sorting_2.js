//merge

const merge = (arr, start, mid, end) => {
  let counter1 = start,
    counter2 = mid + 1;
  const temp = [];
  while (counter1 <= mid && counter2 <= end) {
    if (arr[counter1] < arr[counter2]) {
      temp.push(arr[counter1]);
      counter1++;
    } else {
      temp.push(arr[counter2]);
      counter2++;
    }
  }

  while (counter1 <= mid) {
    temp.push(arr[counter1]);
    counter1++;
  }

  while (counter2 <= end) {
    temp.push(arr[counter2]);
    counter2++;
  }

  let counter = 0;
  for (let i = start; i <= end; i++) {
    arr[i] = temp[counter];
    counter++;
  }
  return arr;
};

//console.log(merge([1, 5, 6, 7, 1, 2, 3, 4, 8], 0, 3, 8));

const merge_sort = (arr, start, end) => {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);

  merge_sort(arr, start, mid);

  merge_sort(arr, mid + 1, end);
  merge(arr, start, mid, end);
  return arr;
};

console.log(merge_sort([1, 5, 6, 7, 1, 2, 3, 4, 8], 0, 8));

//recursive buble

const recursive_bubble = (arr, length) => {
  if (length === 1) return;
  let temp;
  for (let i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  recursive_bubble(arr, length - 1);
  return arr;
};

console.log(recursive_bubble([1, 5, 6, 7, 1, 2, 3, 4, 8], 9));

//recursive insertion

const recursive_insertion = (arr, start) => {
  if (start === arr.length) return;
  let count = start;
  let temp;
  while (count > 0 && arr[count] < arr[count - 1]) {
    temp = arr[count];
    arr[count] = arr[count - 1];
    arr[count - 1] = temp;
    count--;
  }
  recursive_insertion(arr, start + 1);
  return arr;
};

console.log(recursive_insertion([1, 5, 6, 7, 1, 2, 3, 4, 8], 0));

//quick
const partition = (arr, low, high) => {
  let start = low;
  let end = high;

  while (start < end) {
    while (arr[start] <= arr[low] && start <= high - 1) {
      start++;
    }

    while (arr[end] > arr[low] && end >= low + 1) {
      end--;
    }

    if (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }

  let temp = arr[low];
  arr[low] = arr[end];
  arr[end] = temp;
  return end;
};

const quick_sort = (arr, low, high) => {
  if (low >= high) return;

  const pivot = partition(arr, low, high);
  console.log(pivot);

  quick_sort(arr, low, pivot - 1);
  quick_sort(arr, pivot + 1, high);

  return arr;
};

console.log(quick_sort([1, 5, 6, 7, 1, 2, 3, 4, 8], 0, 8));
