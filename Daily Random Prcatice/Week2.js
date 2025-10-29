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

//DAY 2
//1. Evaluate Reverse Poslish Notation

const reverse_polish_notaion = (tokens) => {
    const stack = new Array();

    let first, second;

    for (let i = 0; i < tokens.length; i++) {
        switch (tokens[i]) {
            case "*":
                second = stack.pop();
                first = stack.pop();
                stack.push(first * second);
                break;
            case "-":
                second = stack.pop();
                first = stack.pop();
                stack.push(first - second);
                break;
            case "+":
                second = stack.pop();
                first = stack.pop();
                stack.push(first + second);
                break;
            case "/":
                second = stack.pop();
                first = stack.pop();
                stack.push((first - (first % second)) / second);
                break;
            default:
                stack.push(Number(tokens[i]));
        }
    }

    return stack.pop();
};

console.log(
    "reverse_polish_notaion => ",
    reverse_polish_notaion(["3", "11", "+", "5", "-"]),
    ".....PA....."
);

//DAY 3

//1. House Robber
const house_robber = (nums) => {
    const visited = {};

    const recursion = (index) => {
        if (index >= nums.length) {
            return 0;
        }

        if (visited[index.toString()]) {
            return visited[index];
        }

        const total = nums[index] + recursion(index + 2);

        const skip = recursion(index + 1);

        visited[index] = Math.max(total, skip);

        return visited[index];
    };

    return recursion(0);
};

console.log("house_robber => ", house_robber([1, 2, 3, 1]));

//2. Pascal triangle
const pascals_triangle = (numRows) => {
    const res = new Array(numRows);

    const get_sum = (row, col) => {
        const prev_row = res[row - 1] || null;

        if (!prev_row) return 1;

        if (!prev_row[col - 1] || !prev_row[col]) return 1;

        return prev_row[col] + prev_row[col - 1];
    };

    for (let i = 0; i < numRows; i++) {
        const arr = new Array(i + 1);
        for (let j = 0; j <= i; j++) {
            arr[j] = get_sum(i, j);
        }

        res[i] = arr;
    }

    return res;
};

console.log("pascals_triangle => ", pascals_triangle(5));
