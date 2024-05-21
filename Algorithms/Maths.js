//euclids algo for GCD
const euclids = (num1, num2) => {
  let remainder, divisor, dividend;
  if (num1 > num2) {
    dividend = num1;
    divisor = num2;
  } else {
    dividend = num2;
    divisor = num1;
  }

  while (divisor != 0) {
    remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return dividend;
};

//sieve of eratosthenes
const sieve = (num) => {
  const is_prime_arr = new Array(num + 1);
  is_prime_arr.fill(true, 0, num + 1);
  for (let i = 2; i * i <= is_prime_arr.length; i++) {
    if (is_prime_arr[i]) {
      for (let j = 2 * i; j < is_prime_arr.length; j = j + i) {
        is_prime_arr[j] = false;
      }
    }
  }
  const arr = [];
  for (let i = 2; i < is_prime_arr.length; i++) {
    if (is_prime_arr[i]) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(euclids(1005, 105));
console.log(sieve(97));
