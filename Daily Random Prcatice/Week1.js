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

console.log(fibonacci(10));

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
