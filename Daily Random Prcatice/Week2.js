//DAY 1
//1. Search Insert Position
const search_insert_position = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
};

console.log("search_insert_position => ", search_insert_position([1, 3, 5, 6], 7));

//2. Peak Element
const peak_element = (nums) => {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return start;
};

console.log("peak_element => ", peak_element([-2, -1, 0, -3]));
