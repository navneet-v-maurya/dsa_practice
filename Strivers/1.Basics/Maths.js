//Problem Statement: Given an integer N, return the number of digits in N.
// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.
// Example 2:
// Input:N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits.

const get_number_of_digits = (input) => {
  if (input === 0) return 1;

  let count = 0;

  while (input > 0) {
    input = Math.floor(input / 10);
    count++;
  }
  return count;
};

const get_number_of_digits_using_log = (input) => {
  if (input === 0) return 1;
  return Math.floor(Math.log10(input) + 1);
};

console.log("get_number_of_digits = ", get_number_of_digits(3456));
console.log("get_number_of_digits_using_log = ", get_number_of_digits_using_log(7864786));

//Problem Statement: Given an integer N return the reverse of the given number.
// Example 1:
// Input:N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.
// Example 2:
// Input:N = 7789
// Output: 9877
// Explanation: The reverse of number 7789 is 9877.

const reverse_number = (input) => {
  let num = 0;

  let temp;
  while (input > 0) {
    temp = input % 10;
    num = num * 10 + temp;
    input = Math.floor(input / 10);
  }
  return num;
};

console.log("reverse_number = ", reverse_number(12));

//Problem Statement: Given an integer N, return true if it is a palindrome else return false.
//A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and
//4554 are palindromes because they remain the same when their digits are reversed.

// Example 1:
// Input:N = 4554
// Output:Palindrome Number
// Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
// Example 2:
// Input:N = 7789
// Output: Not Palindrome
// Explanation: The reverse of number 7789 is 9877 and therefore it is not palindrome

const check_palindrome = (input) => {
  const new_num = reverse_number(input);
  if (new_num === input) return true;
  return false;
};

console.log("check_palindrome = ", check_palindrome(1221));

// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// Example 1:
// Input:N1 = 9, N2 = 12

// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.
// Example 2:
// Input:N1 = 20, N2 = 15

// Output: 5
// Explanation:Factors of 20: 1, 2, 4, 5
// Factors of 15: 1, 3, 5
// Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.

const get_gcd = (num1, num2) => {
  let gcd = 1;

  let count = 2;
  while (count <= num1 && count <= num2) {
    if (num1 % count === 0 && num2 % count === 0) {
      gcd = count;
    }
    count++;
  }

  return gcd;
};

const get_gcd_better_approach = (num1, num2) => {
  let start = num1 < num2 ? num1 : num2;

  while (start > 1) {
    if (num1 % start === 0 && num2 % start === 0) {
      return start;
    }
    start--;
  }

  return 1;
};

const get_gcd_better_optimized = (num1, num2) => {
  let num;
  const gcd = (num1, num2) => {
    if (num1 === 0) {
      num = num2;
      return;
    } else if (num2 === 0) {
      num = num1;
      return;
    } else {
      const largest = Math.max(num1, num2);
      const smallest = Math.min(num1, num2);
      gcd(largest - smallest, smallest);
    }
  };
  gcd(num1, num2);
  return num;
};

console.log("get_gcd = ", get_gcd(9, 15));
console.log("get_gcd_better_approach = ", get_gcd_better_approach(9, 15));
console.log("get_gcd_better_optimized = ", get_gcd_better_optimized(20, 100));

// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

// Example 1:
// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153
// Example 2:
// Input:N = 371
// Output: True
// Explanation: 33+53+13 = 27 + 343 + 1 = 371

const check_armstrong_number = (input) => {
  const original_val = input;
  let total = 0;
  let temp;
  const digits = get_number_of_digits_using_log(input);

  while (input > 0) {
    temp = input % 10;
    total += Math.pow(temp, digits);
    input = Math.floor(input / 10);
  }

  if (total === original_val) return true;
  return false;
};

console.log("check_armstrong_number = ", check_armstrong_number(371));

// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder.
// In other words, if N is divisible by another integer without any remainder, then that integer
// is considered a divisor of N.

// Example 1:
// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
// Example 2:
// Input:N =12
// Output: [1, 2, 3, 4, 6, 12]
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.

const get_divisors = (input) => {
  const divisors = [];
  let count = 1;
  while (count <= input) {
    if (input % count === 0) {
      divisors.push(count);
    }
    count++;
  }
  return divisors;
};

const get_divisors_optimized = (input) => {
  const divisors = [];
  const root = Math.floor(Math.sqrt(input));
  let count = 1;
  while (count <= root) {
    if (input % count === 0) {
      divisors.push(count);
      if (input / count !== count) {
        divisors.push(input / count);
      }
    }
    count++;
  }
  return divisors;
};

console.log("get_divisors = ", get_divisors(15));
console.log("get_divisors_optimized = ", get_divisors_optimized(15));

// Problem Statement: Given an integer N, check whether it is prime or not.
// A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

// Example 1:
// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
// Example 2:
// Input:N =10
// Output: False
// Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.

const check_prime = (input) => {
  if (input === 1) return false;
  let count = 1;

  let counter = 1;

  while (counter <= input) {
    if (count > 2) return false;
    if (input % counter === 0) {
      count++;
    }
    counter++;
  }

  return true;
};

const check_prime_optimized = (input) => {
  if (input === 1) return false;

  const root = Math.floor(Math.sqrt(input));
  let counter = 1;
  let count = 0;

  while (counter <= root) {
    if (input % counter === 0) {
      count++;
      if (input / count !== count) {
        count++;
      }
    }
    counter++;
    if (count > 2) return false;
  }
  return true;
};

console.log("check_prime = ", check_prime(113));
console.log("check_prime_optimized = ", check_prime_optimized(113));
