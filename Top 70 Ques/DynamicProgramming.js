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
