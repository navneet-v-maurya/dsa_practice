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

  console.log("sort_stack => ", before_sort, " => ", stack.print());
};

const stack = new Stack();
stack.push(5);
stack.push(12);
stack.push(34);
stack.push(2);
stack.push(67);
stack.push(1);

sort_stack(stack);

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

  console.log("delete_middle_el_stack => ", before_sort, " => ", stack.print());
};

const stack2 = new Stack();
stack2.push(5);
stack2.push(12);
stack2.push(34);
stack2.push(2);
stack2.push(67);
// stack2.push(1);

delete_middle_el_stack(stack2);

//reverse a stack using recursion
const reverse_stack = (stack) => {
  const before_sort = stack.print();

  const reverse = (stack) => {
    if (!stack.head) {
      return;
    }

    const val = stack.pop();
    reverse(stack);
    insert(stack, val);
  };

  const insert = (stack, val) => {
    if (!stack.head) {
      stack.push(val);
      return;
    }

    const temp = stack.pop();
    insert(stack, val);

    stack.push(temp);
  };

  reverse(stack);

  console.log("reverse_stack => ", before_sort, " => ", stack.print());
};

const stack3 = new Stack();
stack3.push(5);
stack3.push(12);
stack3.push(34);
stack3.push(2);
stack3.push(67);
stack3.push(1);

reverse_stack(stack3);

//kth symbol in grammer
const kth_symbol = (n, k) => {
  if (n === 1 && k === 1) return 0;

  const mid = Math.pow(2, n - 2);

  if (k > mid) {
    return 1 - kth_symbol(n - 1, k - mid);
  } else {
    return kth_symbol(n - 1, k);
  }
};

console.log("kth_symbol => ", kth_symbol(3, 3));

//print subsets
const subset_of_str = (str) => {
  const arr = [];

  const print_subsets = (input, output = "") => {
    if (input.length === 0) {
      arr.push(output);
      return;
    }

    print_subsets(input.substring(1), output);
    print_subsets(input.substring(1), output + input[0]);
  };

  print_subsets(str);

  return arr;
};

console.log("subset_of_str => ", subset_of_str("aabc"));

//unique subsets
const unique_subset_of_str = (str) => {
  const map = new Map();

  const print_subsets = (input, output = "") => {
    if (input.length === 0) {
      map.set(output, output);
      return;
    }

    print_subsets(input.substring(1), output);
    print_subsets(input.substring(1), output + input[0]);
  };

  print_subsets(str);

  const arr = [];

  map.forEach((el) => {
    arr.push(el);
  });

  return arr;
};

console.log("unique_subset_of_str => ", unique_subset_of_str("aabc"));

//subsets of array
const subset_of_arr = (arr) => {
  const map = new Map();

  const print_subsets = (input, output, counter) => {
    if (counter === arr.length) {
      map.set(output.toString(), output);
      return;
    }
    const temp = input[counter];

    print_subsets(input, output, counter + 1);
    print_subsets(input, [...output, temp], counter + 1);
  };

  print_subsets(arr, [], 0);

  const result = [];

  map.forEach((el) => {
    result.push(el);
  });

  return result;
};

console.log("subset_of_arr => ", subset_of_arr([1, 2, 3]));

//permutaion with spaces

const permutaion_with_spaces = (str) => {
  const arr = [];
  let output = str[0];
  let input = str.substring(1);

  const add_spaces = (input, output = "") => {
    if (input.length === 0) {
      arr.push(output);
      return;
    }

    add_spaces(input.substring(1), output + input[0]);
    add_spaces(input.substring(1), output + "_" + input[0]);
  };

  add_spaces(input, output);
  return arr;
};

console.log("permutaion_with_spaces => ", permutaion_with_spaces("abcd"));

//permutation with case change   abc
const permutation_with_case_change = (str) => {
  const arr = [];

  const case_change = (input, output = "") => {
    if (input.length === 0) {
      arr.push(output);
      return;
    }

    case_change(input.substring(1), output + input[0]);
    case_change(input.substring(1), output + input[0].toUpperCase());
  };

  case_change(str);

  return arr;
};

console.log("permutation_with_case_change => ", permutation_with_case_change("abc"));

//letter case permutaion  a1B2

const letter_case_permutation = (str) => {
  const arr = [];

  const letter_case = (input, output = "") => {
    if (input.length === 0) {
      arr.push(output);
      return;
    }

    if (!isNaN(input[0])) {
      letter_case(input.substring(1), output + input[0]);
    } else {
      letter_case(input.substring(1), output + input[0].toLowerCase());
      letter_case(input.substring(1), output + input[0].toUpperCase());
    }
  };

  letter_case(str);

  return arr;
};

console.log("letter_case_permutation => ", letter_case_permutation("a1B2"));

//generate all balanced parenthesis
//print N birt binary numbers 1s >= 0s
//josephus problem
//tower of  hanoi
