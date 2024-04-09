// Two Sum ==>  Given an array of integers and an integer target, return indices of the
// two numbers such that they add up to target.

//optimized soltion
const twoSum = (nums, target) => {
  let obj = new Map();
  let val;
  let found;
  for (let i = 0; i < nums.length; i++) {
    val = target - nums[i];
    found = obj.get(val.toString());
    if (found) {
      return [i, Number(found)];
    } else {
      obj.set(nums[i].toString(), i.toString());
    }
  }
};

// Maximum Subarray ==> Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// brute force solution
const maxSubArray_brute = (nums) => {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum > max) {
      max = sum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

//kadanes algorithm
const maxSubArray = (nums) => {
  let max = nums[0];
  let prev_sum = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + prev_sum < nums[i]) {
      prev_sum = nums[i];
    } else {
      prev_sum = nums[i] + prev_sum;
    }

    if (prev_sum > max) {
      max = prev_sum;
    }
  }
  return max;
};

// Sort Colors ==> Given an array nums with n objects colored red, white, or blue, sort
// them in-place so that objects of the same color are adjacent, with
// the colors in the order red, white, and blue.

//half optimized
const sortColors = (nums) => {
  let zero = 0,
    one = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    } else if (nums[i] === 1) {
      one++;
    }
  }

  one = one + zero;

  for (let i = 0; i < nums.length; i++) {
    if (i < zero) {
      nums[i] = 0;
    } else if (i >= zero && i < one) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
};
