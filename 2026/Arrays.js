const num_of_jewels_in_stones = (jewels, stones) => {
    const map = {};

    for (let i = 0; i < jewels.length; i++) {
        map[jewels[i]] = true;
    }

    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        if (map[stones[i]]) {
            count++;
        }
    }

    return count;
};

console.log("num_of_jewels_in_stones => ", num_of_jewels_in_stones("aA", "aAAbbbb"));

const smaller_numbers_than_current = (nums) => {
    const output = [];

    const max = Math.max(...nums);

    const total_numbers = new Array(max + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        total_numbers[nums[i]] = total_numbers[nums[i]] + 1;
    }

    let total_sum = 0;
    let last_val = 0;

    for (let i = 0; i < total_numbers.length; i++) {
        last_val = total_numbers[i];
        total_numbers[i] = total_sum;
        total_sum = total_sum + last_val;
    }

    for (let i = 0; i < nums.length; i++) {
        output.push(total_numbers[nums[i]]);
    }

    return output;
};

console.log("smaller_numbers_than_current => ", smaller_numbers_than_current([5, 0, 10, 0, 10, 6]));
