const my_pow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    return x / (10 * Math.abs(n));
  } else {
    return x * my_pow(x, n - 1);
  }
};

console.log(my_pow(2.0, -2));
