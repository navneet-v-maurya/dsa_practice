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

//DAY 4
//1. Number of islands

const number_of_islands = (grid) => {
    const m = grid.length || 0;
    const n = grid[0].length || 0;

    const new_neightbors = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ];

    const queue = [];
    const visited = {};

    const is_valid_neighbour = (row, col, arr) => {
        const new_row = row + arr[0];
        const new_col = col + arr[1];

        if (
            new_row >= 0 &&
            new_row < m &&
            new_col >= 0 &&
            new_col < n &&
            !visited[`${new_row.toString()},${new_col.toString()}`] &&
            grid[new_row][new_col] === "1"
        ) {
            return true;
        }

        return false;
    };

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[i].length; k++) {
            if (!visited[`${i.toString()},${k.toString()}`] && grid[i][k] === "1") {
                count++;
                queue.push([i, k]);
                while (queue.length > 0) {
                    const ele = queue.shift();
                    visited[`${ele[0].toString()},${ele[1].toString()}`] = ele;

                    for (let j = 0; j < new_neightbors.length; j++) {
                        if (is_valid_neighbour(ele[0], ele[1], new_neightbors[j])) {
                            queue.push([
                                ele[0] + new_neightbors[j][0],
                                ele[1] + new_neightbors[j][1],
                            ]);
                        }
                    }
                }
            }
        }
    }

    return count;
};

const number_of_islands_optimized = (grid) => {
    const m = grid.length || 0;
    const n = grid[0].length || 0;

    const new_neightbors = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ];

    const queue = [];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let k = 0; k < n; k++) {
            if (!visited[i][k] && grid[i][k] === "1") {
                count++;
                queue.push([i, k]);
                visited[i][k] = true;

                while (queue.length > 0) {
                    const [row, col] = queue.shift();

                    for (let j = 0; j < new_neightbors.length; j++) {
                        const new_row = row + new_neightbors[j][0];
                        const new_col = col + new_neightbors[j][1];

                        if (
                            new_row >= 0 &&
                            new_row < m &&
                            new_col >= 0 &&
                            new_col < n &&
                            !visited[new_row][new_col] &&
                            grid[new_row][new_col] === "1"
                        ) {
                            visited[new_row][new_col] = true;
                            queue.push([new_row, new_col]);
                        }
                    }
                }
            }
        }
    }

    return count;
};

console.log(
    "number_of_islands => ",
    number_of_islands([
        ["1", "0", "0", "1"],
        ["1", "0", "0", "1"],
        ["0", "0", "0", "1"],
    ])
);

//subsets

const subsets = (nums) => {
    const result = [];

    const recursion = (counter, output) => {
        if (counter >= nums.length) {
            result.push([...output]);
            return;
        }

        const temp = nums[counter];

        counter += 1;
        recursion(counter, output);
        output.push(temp);
        recursion(counter, output);
        output.pop();
    };

    recursion(0, []);

    return result;
};

console.log("subsets => ", subsets([1, 2, 3]));

const permustaions = (nums) => {
    const result = [];

    const recursion = (output, input) => {
        if (input.length <= 0) {
            result.push([...output]);
            return;
        }

        for (let i = 0; i < input.length; i++) {
            const temp = input[i];
            output.push(temp);
            recursion(output, input.slice(0, i).concat(input.slice(i + 1)));
            output.pop();
        }
    };

    recursion([], nums);

    return result;
};

console.log("permustaions => ", permustaions([1, 2, 3]));

class Kth_Largest_Heap {
    constructor(k, nums) {
        this.k = k;
        this.heap = nums;
        this.heapify();
    }

    add(val) {
        this.heap.push(val);
        this.heap.sort((a, b) => b - a);
        this.heap.pop();
        return this.heap[this.heap.length - 2];
    }

    heapify() {
        const result = new Array(this.k + 1);

        for (let i = 0; i < this.heap.length; i++) {
            result.push(this.heap[i]);
            result.sort((a, b) => b - a);
            if (result.length >= this.k + 1) result.pop();
        }

        this.heap = result;
    }
}

const h = new Kth_Largest_Heap(3, [4, 5, 8, 2]);

console.log("kth_largest_element => ", h.add(3));

const { MaxHeapObj } = require("../Dsa/Heap");
const top_k_frequent_elements = (nums, k) => {
    const max_heap = new MaxHeapObj();

    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 0;
    }

    const result = [];

    for (let key in map) {
        max_heap.push({ diff: map[key], el: key });
    }

    for (let i = 0; i < k; i++) {
        result.push(Number(max_heap.pop().el) || 0);
    }

    return result;
};

console.log("top_k_frequent_elements => ", top_k_frequent_elements([3, 0, 1, 0], 1));
