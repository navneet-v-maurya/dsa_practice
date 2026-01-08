const max_average = (nums, k) => {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let max_average = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];

        if (sum / k > max_average) {
            max_average = sum / k;
        }
    }

    return max_average;
};

console.log("max_average => ", max_average([5], 1));

const conatins_dublicate = (nums, k) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true;
        map.set(nums[i], i);
        if (i >= k) {
            map.delete(nums[i - k]);
        }
    }

    return false;
};

console.log("conatins_dublicate => ", conatins_dublicate([1, 2, 3, 1, 2, 3], 2));
