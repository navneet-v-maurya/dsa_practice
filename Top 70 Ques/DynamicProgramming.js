//knapsack problem

const knapsack = (weight, price, w) => {
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

console.log(knapsack([4, 5, 1], [1, 2, 3], 4));
