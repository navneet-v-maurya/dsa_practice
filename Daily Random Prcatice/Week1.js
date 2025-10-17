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

console.log("binary_search => ", binary_search([-1, 0, 3, 5, 9, 12], 9));

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

console.log("climb_stairs => ", climb_stairs(4));

//DAY 2

//1. Fibonacci Number
const fibonacci = (n) => {
    const calculations_arr = new Array(n);

    const recusion = (input) => {
        if (calculations_arr[input]) return calculations_arr[input];
        if (input === 0) return 0;

        if (input === 1) return 1;

        const result = recusion(input - 1) + recusion(input - 2);

        calculations_arr[input] = result;

        return result;
    };

    return recusion(n);
};

console.log("fibonacci => ", fibonacci(10));

//2. Min Stack
class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        if (this.stack.length === 0) {
            this.stack.push({
                val,
                min: 0,
            });
        } else {
            const min_val = this.stack[this.stack[this.stack.length - 1].min].val;

            if (val < min_val) {
                this.stack.push({
                    val,
                    min: this.stack.length,
                });
            } else {
                this.stack.push({
                    val,
                    min: this.stack[this.stack.length - 1].min,
                });
            }
        }
    }

    pop() {
        this.stack.pop();
    }

    top() {
        const top_el = this.stack[this.stack.length - 1] || undefined;

        return top_el["val"];
    }

    get_min() {
        const min_val = this.stack[this.stack[this.stack.length - 1]["min"]] || undefined;

        return min_val["val"];
    }
}

//DAY 3
//1. Flood Fill

const flood_fill = (image, sr, sc, color) => {
    const queu = new Array();
    const visited = {};

    const m = image.length;

    const n = image[0].length || 0;

    const neighbors_arr = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const starting_color = image[sr][sc];

    queu.push([sr, sc]);

    const is_valid_pixel = (row, column, i) => {
        const temp = neighbors_arr[i];

        const new_row = row + temp[0];
        const new_col = column + temp[1];

        if (
            new_row >= 0 &&
            new_row < m &&
            new_col >= 0 &&
            new_col < n &&
            image[new_row][new_col] === starting_color &&
            !visited[`${new_row}${new_col}`]
        )
            return [new_row, new_col];

        return null;
    };

    while (queu.length > 0) {
        const current_node = queu.shift();
        const current_row = current_node[0];
        const current_col = current_node[1];
        visited[`${current_row}${current_col}`] = current_node;

        image[current_row][current_col] = color;

        for (let i = 0; i < neighbors_arr.length; i++) {
            const valid_pixel = is_valid_pixel(current_row, current_col, i);
            if (valid_pixel && valid_pixel.length > 0) {
                queu.push(valid_pixel);
            }
        }
    }

    return image;
};

console.log(
    "flood_fill => ",
    flood_fill(
        [
            [0, 0, 0],
            [1, 0, 0],
        ],
        1,
        0,
        2
    )
);

//2. Path Sum

const path_sum = (root, targetSum) => {
    let curr = root;
    let found = false;

    const recursion = (node, total) => {
        if (!node) return;
        total += node.val;

        if (!node.left && !node.right && total === targetSum) {
            found = true;
            return;
        }

        recursion(node.left, total);
        recursion(node.right, total);
    };

    recursion(curr, 0);

    return found;
};

const tree = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null },
        },
        right: null,
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: null,
            right: { val: 1, left: null, right: null },
        },
    },
};

const tree1 = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null },
        },
        right: null,
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: null,
            right: null,
        },
    },
};
console.log("path_sum => ", path_sum(tree, 22));

//DAY 4

//1. Power of two
const power_of_two = (n) => {
    let start = 1;

    while (start <= n) {
        if (start === n) return true;

        start = start * 2;
    }

    return false;
};

console.log("power_of_two => ", power_of_two(17));

const max_depth_binary_tree = (root) => {
    let curr = root;
    let max = 0;

    const recursion = (root, curr_total) => {
        if (!root) return;

        curr_total += 1;

        if (!root.left && !root.right) {
            max = Math.max(max, curr_total);
            return;
        }

        recursion(root.left, curr_total);

        recursion(root.right, curr_total);
    };

    recursion(curr, 0);

    return max;
};

console.log("max_depth_binary_tree => ", max_depth_binary_tree(tree));

//DAY 5

//1. Same tree

const same_tree = (p, q) => {
    let is_same = true;

    const recuresion = (node1, node2) => {
        if (!node1 && !node2) return;

        if (!node1 || !node2 || node1.val !== node2.val) {
            is_same = false;
            return;
        }

        recuresion(node1.left, node2.left);
        recuresion(node1.right, node2.right);
    };

    recuresion(p, q);

    return is_same;
};

console.log("same_tree => ", same_tree(tree, tree1));

const merge_sorted_arr = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;
    let write = m + n - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[write] = nums1[p1];
            p1--;
        } else {
            nums1[write] = nums2[p2];
            p2--;
        }
        write--;
    }

    return nums1;
};

console.log(
    "merge_sorted_arr => ",
    merge_sorted_arr([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5),
    ".....PA....."
);
