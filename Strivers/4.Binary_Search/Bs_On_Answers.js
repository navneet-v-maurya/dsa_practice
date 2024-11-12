//Problem Statement: A monkey is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given,
//which denotes the time (in hours) for all the bananas to be eaten.

// Example 1:
// Input Format:
//  N = 4, a[] = {7, 15, 6, 3}, h = 8
// Result:
//  5
// Explanation:
//  If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.

// Example 2:
// Input Format:
//  N = 5, a[] = {25, 12, 8, 14, 19}, h = 5
// Result:
//  25
// Explanation:
//  If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. So, he will take 5 hours to complete all the piles.

const min_eating_speed = (piles, hours) => {
  let start = 0;
  let max = piles[start];
  piles.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });

  const is_eatable = (arr, k) => {
    let count = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
      temp = Math.ceil(arr[i] / k);
      count += temp;
    }
    if (count <= hours) {
      return true;
    }

    return false;
  };

  while (start <= max) {
    mid = Math.floor((start + max) / 2);

    if (!is_eatable(piles, mid)) {
      start = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return start;
};

console.log(min_eating_speed([30, 11, 23, 4, 20], 5));

//Problem Statement: You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'.
//Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it,
//the sum of the division's result is less than or equal to the given threshold value.

// Example 1:
// Input Format:
//  N = 5, arr[] = {1,2,3,4,5}, limit = 8
// Result:
//  3
// Explanation:
//  We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor.
// The sum is 9(1 + 1 + 2 + 2 + 3)  if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

// Example 2:
// Input Format:
//  N = 4, arr[] = {8,4,2,3}, limit = 10
// Result:
//  2
// Explanation:
//  If we choose 1, we get 17 as the sum. If we choose 2, we get 9(4+2+1+2) <= 10 as the answer. So, 2 is the answer.

const smallest_divisor = (arr, threshold) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const is_below_threshold = (arr, val) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      count += Math.ceil(arr[i] / val);
    }

    if (count <= threshold) return true;
    return false;
  };

  let start = 1;
  let mid;
  let min = max;
  while (start <= max) {
    mid = Math.floor((start + max) / 2);
    if (is_below_threshold(arr, mid)) {
      if (mid < min) {
        min = mid;
      }
      max = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return min;
};

console.log(smallest_divisor([44, 22, 33, 11, 1], 5));
