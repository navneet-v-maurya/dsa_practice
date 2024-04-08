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
const maxSubArray = (nums) => {
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
