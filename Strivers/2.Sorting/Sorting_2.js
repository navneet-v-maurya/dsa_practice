//merge

const merge = (arr, start, mid, end) => {
  console.log("mergee", start, mid, end);
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
  console.log("leftttt");
  merge_sort(arr, start, mid);
  console.log("righttt");
  merge_sort(arr, mid + 1, end);
  merge(arr, start, mid, end);
  return arr;
};

console.log(merge_sort([1, 5, 6, 7, 1, 2, 3, 4, 8], 0, 8));

//recursive buble
//recursive insertion
//quick
