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
