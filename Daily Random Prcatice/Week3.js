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

//Day 4
//1. Maximum Product Subarray

const max_product_subarr = (nums) => {
    let max = -Infinity;
    const memo = new Map();

    const recursion = (total, index) => {
        if (index >= nums.length) {
            return;
        }

        const key = `${total}-${index}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const curr = total * nums[index];

        if (curr > max) {
            if (curr === -0) {
                max = 0;
            } else {
                max = curr;
            }
        }

        if (nums[index] > max) {
            max = nums[index];
        }

        recursion(curr, index + 1);
        recursion(1, index + 1);

        memo.set(key, max);
        return max;
    };

    recursion(1, 0);
    return max;
};

console.log("max_product_subarr => ", max_product_subarr([2, -5, -2, -4, 3]));

const find_itinerary = (tickets) => {
    const map = {};

    for (let i = 0; i < tickets.length; i++) {
        const curr = tickets[i];

        if (!map[curr[0]]) map[curr[0]] = [];
        map[curr[0]].push(curr[1]);
    }

    for (const k in map) {
        map[k].sort((a, b) => b.localeCompare(a));
    }

    const route = [];
    const dfs = (node) => {
        const dests = map[node] || [];
        while (dests.length) dfs(dests.pop());
        route.push(node);
    };

    dfs("JFK");
    return route.reverse();
};

console.log(
    "find_itinerary => ",
    find_itinerary([
        ["JFK", "SFO"],
        ["JFK", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "JFK"],
        ["ATL", "SFO"],
    ])
);

//Day 5
//1. Course schedule
const course_schedule = (numCourses, prerequisites) => {
    const map = {};

    for (let i = 0; i < prerequisites.length; i++) {
        const curr = prerequisites[i];

        if (!map[curr[0]]) map[curr[0]] = [];
        map[curr[0]].push(curr[1]);
    }

    const visited = {};
    const visiting = {};
    let finidhed = true;

    const dfs = (node) => {
        visited[node] = true;
        visiting[node] = true;
        const neighbors = map[node] || [];

        for (let j = 0; j < neighbors.length; j++) {
            if (visiting[neighbors[j]]) {
                finidhed = false;
                return;
            }
            if (!visited[neighbors[j]]) {
                dfs(neighbors[j]);
            }
        }

        delete visiting[node];
    };

    for (let i = 0; i < numCourses; i++) {
        dfs(i);
    }

    return finidhed;
};

console.log(
    "course_schedule => ",
    course_schedule(2, [
        [1, 0],
        [0, 1],
    ])
);
