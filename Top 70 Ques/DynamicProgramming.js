//knapsack problem using MEMOIZATION
const knapsack_recursive = (weight, price, w) => {
  const arr = Array.from({ length: weight.length }, () => []);

  const calculate = (weight, price, w, length) => {
    if (length < 0 || w <= 0) {
      return 0;
    }

    if (arr[length][w]) {
      return arr[length][w];
    }

    if (weight[length] <= w) {
      return (arr[length][w] = Math.max(
        price[length] + calculate(weight, price, w - weight[length], length - 1),
        calculate(weight, price, w, length - 1)
      ));
    } else {
      return (arr[length][w] = calculate(weight, price, w, length - 1));
    }
  };

  const result = calculate(weight, price, w, weight.length - 1);

  return result;
};

console.log("knapsack_recursive => ", knapsack_recursive([4, 5, 1], [1, 2, 3], 4));

//knapsack using TOP_DOWN

const knapsack_iterative = (weight, price, w) => {
  const n = weight.length + 1;
  const m = w + 1;

  const arr = Array.from({ length: n }, () => new Array(m));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        arr[i][j] = 0;
      } else if (weight[i - 1] <= j) {
        arr[i][j] = Math.max(price[i - 1] + arr[i - 1][j - weight[i - 1]], arr[i - 1][j]);
      } else {
        arr[i][j] = arr[i - 1][j];
      }
    }
  }

  return arr[n - 1][m - 1];
};

console.log("knapsack_iterative => ", knapsack_iterative([4, 5, 1], [1, 2, 3], 4));

//subset sum recusive

const subset_sum_recursive = (arr, sum) => {
  let counter = 0;

  const temp = Array.from({ length: arr.length + 1 }, () => new Array(sum + 1));

  for (let i = 0; i < arr.length + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (j === 0) {
        temp[i][j] = true;
      } else if (i === 0) {
        temp[i][j] = false;
      }
    }
  }

  const found = (arr, sum, counter) => {
    if (sum === 0) {
      return true;
    }

    if (counter >= arr.length || sum < 0) {
      return false;
    }

    if (temp[counter][sum]) {
      return temp[counter][sum];
    }

    const include = found(arr, sum - arr[counter], counter + 1);
    const exclude = found(arr, sum, counter + 1);

    return (temp[counter][sum] = include || exclude);
  };

  const result = found(arr, sum, counter);

  return result;
};

console.log("subset_sum_recursive => ", subset_sum_recursive([1, 4, 3], 3));

//subset sum iterative
const subset_sum_iterative = (arr, sum) => {
  const temp = Array.from({ length: arr.length + 1 }, () => new Array(sum + 1));

  for (let i = 0; i < arr.length + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (j === 0) {
        temp[i][j] = true;
      } else if (i === 0) {
        temp[i][j] = false;
      } else if (arr[i - 1] <= j) {
        temp[i][j] = temp[i - 1][j - arr[i - 1]] || temp[i - 1][j];
      } else {
        temp[i][j] = temp[i - 1][j];
      }
    }
  }

  return temp[arr.length][sum];
};

console.log("subset_sum_iterative => ", subset_sum_iterative([1, 4, 3], 3));
