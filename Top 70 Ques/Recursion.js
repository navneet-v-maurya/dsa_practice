const { Stack } = require("../Dsa/Stack");
const { BinaryTree } = require("../Dsa/BinaryTree");

//print 1 to n
const print_1_to_n = (n) => {
    if (n < 1) return;
    print_1_to_n(n - 1);
    console.log("print_1_to_n => ", n);
};

print_1_to_n(5);
console.log("\n******");

// print n to 1
const print_n_to_1 = (n) => {
    if (n < 1) return;

    console.log("print_n_to_1 => ", n);
    print_n_to_1(n - 1);
};

print_n_to_1(5);
console.log("\n******");

// facrorial of a number

const factoral = (n) => {
    if (n <= 1) return 1;

    return factoral(n - 1) * n;
};

console.log("factoral => ", factoral(5));
console.log("\n******");

//sort array
const sort_arr = (arr) => {
    const insert = (arr, val) => {
        if (arr.length === 0 || arr[arr.length - 1] <= val) {
            arr.push(val);
            return;
        }

        const popped_val = arr.pop();
        insert(arr, val);

        arr.push(popped_val);
    };

    const sort = (arr) => {
        if (arr.length === 1) {
            return;
        }

        const val = arr.pop();
        sort(arr);
        insert(arr, val);
    };

    sort(arr);
    return arr;
};

console.log("sort_arr => ", sort_arr([4, 3, 5, 3, 1]));
console.log("\n******");

//height of a binary tree
const height_of_binary_tree = (root) => {
    if (!root) {
        return 0;
    }

    const h1 = 1 + height_of_binary_tree(root.left);
    const h2 = 1 + height_of_binary_tree(root.right);

    return Math.max(h1, h2);
};

const binary_tree = new BinaryTree();

binary_tree.push(2);
binary_tree.push(3);
binary_tree.push(6);
binary_tree.push(34);
binary_tree.push(1);

console.log("height_of_binary_tree => ", height_of_binary_tree(binary_tree.root));
console.log("\n******");

//sort a stack
const sort_stack = (stack) => {
    const before_sort = stack.print();

    const insert = (stack, value) => {
        if (!stack.head || stack?.head?.val <= value) {
            stack.push(value);
            return;
        }

        const temp = stack.pop();

        insert(stack, value);

        stack.push(temp);
    };

    const sort = (stack) => {
        if (!stack.head.next) {
            return;
        }

        const temp = stack.pop();

        sort(stack);

        insert(stack, temp);
    };

    sort(stack);

    console.log("sort_stack => ", before_sort, "\t => \t", stack.print());
};

const stack = new Stack();
stack.push(5);
stack.push(12);
stack.push(34);
stack.push(2);
stack.push(67);
stack.push(1);

sort_stack(stack);
console.log("\n******");

//delete middle el of a stack
const delete_middle_el_stack = (stack) => {
    if (!stack.head) return;

    const before_sort = stack.print();

    let temp = stack.head;
    let length = 0;

    while (temp) {
        length++;
        temp = temp.next;
    }

    const mid = Math.floor((length + 1) / 2);

    const del = (stack, counter) => {
        if (counter === mid - 1) {
            stack.pop();
            return;
        }
        const val = stack.pop();
        del(stack, counter + 1);
        stack.push(val);
    };

    del(stack, 0);

    console.log("delete_middle_el_stack => ", before_sort, "\t => \t", stack.print());
};

const stack2 = new Stack();
stack2.push(5);
stack2.push(12);
stack2.push(34);
stack2.push(2);
stack2.push(67);
// stack2.push(1);

delete_middle_el_stack(stack2);
console.log("\n******");

//reverse a stack using recursion

//kth symbol in grammer
