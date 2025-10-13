//DAY 1

//1.Binary Search
const binary_search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

console.log(binary_search([-1, 0, 3, 5, 9, 12], 9));

//2.Climbing Stairs
const climb_stairs = (n) => {
    let result = 0;

    const calculations_arr = new Array(n);

    const recuresion = (input) => {
        if (calculations_arr[input]) {
            result += calculations_arr[input];
            return;
        }

        if (input === 0) {
            result += 1;
            return;
        }

        recuresion(input - 1, result);

        calculations_arr[input] = result;

        if (input >= 2) {
            recuresion(input - 2, result);
            calculations_arr[input] = result;
        }
    };

    recuresion(n);

    return result;
};

console.log(climb_stairs(4));
