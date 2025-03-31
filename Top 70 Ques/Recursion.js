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

//sort array
const sort_arr = (arr) => {};

//height of a binary tree
const height_of_binary_tree = (root) => {
  console.log(root);
};

const binary_tree = new BinaryTree();

binary_tree.push(2);
binary_tree.push(3);
binary_tree.push(6);
binary_tree.push(34);
binary_tree.push(1);

console.log("height_of_binary_tree => ", height_of_binary_tree(binary_tree.root));

//sort a stack
const sort_stack = (stack) => {};

const stack = new Stack();
stack.push(5);
stack.push(12);
stack.push(34);
stack.push(2);
stack.push(67);
stack.push(1);

console.log(sort_stack(stack));
