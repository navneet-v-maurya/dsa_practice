//WEEK 3

//Day 1
//1. Daily Temperatues
const daily_temperatures = (temperatures) => {
    const result = new Array(temperatures.length).fill(0);

    let start = temperatures.length - 1;
    const stack = [];

    for (let i = start; i >= 0; i--) {
        const temp = temperatures[i];

        while (temperatures[stack[stack.length - 1]] <= temp) {
            stack.pop();
        }

        if (stack.length > 0) {
            const top = stack[stack.length - 1];
            result[i] = top - i;
        }
        stack.push(i);
    }
    return result;
};

console.log("daily_temperatures => ", daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]));

//Day 2
//1. Binary Tree Inorder Traversal
const inorder_traversal = (root) => {
    const result = [];
    const recursion = (node) => {
        if (!node.left && !node.right) {
            result.push(node.val);
            return;
        }

        if (node.left) {
            recursion(node.left);
            result.push(node.val);
        }

        if (node.right) {
            if (!node.left) {
                result.push(node.val);
                recursion(node.right);
            } else {
                recursion(node.right);
            }
        }
    };

    recursion(root);
    return result;
};

const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: {
                val: 6,
                left: null,
                right: null,
            },
            right: {
                val: 7,
                left: null,
                right: null,
            },
        },
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 8,
            left: {
                val: 9,
                left: null,
                right: null,
            },
            right: null,
        },
    },
};

console.log("inorder_traversal => ", inorder_traversal(tree));

//2. Combinations
const cominations = (candidates, target) => {
    const result = [];

    const recursion = (start, sum, output) => {
        if (sum === target) {
            result.push([...output]);
            return;
        }

        if (sum > target || start >= candidates.length) {
            return;
        }

        output.push(candidates[start]);
        recursion(start, sum + candidates[start], output);
        output.pop();

        recursion(start + 1, sum, output);
    };

    recursion(0, 0, []);
    return result;
};

console.log("cominations => ", cominations([2, 3, 6, 7], 7));

//Day 3
//1. Min Depth of Tree
const min_depth_of_tree = (root) => {
    if (!root) return 0;

    let min = Infinity;

    const recursion = (node, count) => {
        if (!node.left && !node.right) {
            min = Math.min(min, count);
            return;
        }

        if (node.left) {
            recursion(node.left, count + 1);
        }

        if (node.right) {
            recursion(node.right, count + 1);
        }
    };

    recursion(root, 1);

    return min;
};

console.log(
    "min_depth_of_tree => ",
    min_depth_of_tree({
        val: 3,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 20,
            left: {
                val: 15,
                left: null,
                right: null,
            },
            right: {
                val: 7,
                left: null,
                right: null,
            },
        },
    })
);

//2. Coin Change
const coin_chnage = (coins, amount) => {
    let min = -1;

    const memo = {};

    const recursion = (sum, index, count) => {
        const key = `${sum}-${index}`;

        if (memo[key] !== undefined && memo[key] <= count) return;
        memo[key] = count;

        if (index >= coins.length || sum > amount) return;

        if (sum === amount) {
            if (min > count || min === -1) {
                min = count;
            }
            return;
        }

        recursion(sum + coins[index], index, count + 1);
        recursion(sum, index + 1, count);
    };

    recursion(0, 0, 0);

    return min;
};

console.log("coin_chnage => ", coin_chnage([1, 2, 5], 11));
