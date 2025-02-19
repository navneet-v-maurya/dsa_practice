const BinaryTree = require("../Dsa/BinaryTree");

const t = new BinaryTree();

console.log(t.push(1));
console.log(t.push(2));

console.log(t.push(3));

console.log(t.push(4));

const average_of_levels = (root) => {
  const arr = [];

  let queue = [root];

  let temp;
  let count = 0;
  let temp2;
  while (queue.length > 0) {
    temp = queue.length;

    for (let i = 0; i < temp; i++) {
      temp2 = queue.shift();
      count += temp2.val;

      if (temp2.left) {
        queue.push(temp2.left);
      }

      if (temp2.right) {
        queue.push(temp2.right);
      }
    }

    arr.push(count / temp);
    count = 0;
  }
  return arr;
};

console.log(average_of_levels(t.root));

const min_depth = (root) => {
  if (!root) return 0;

  let queue = [root];

  let temp;
  let count = 1;
  let temp2;
  while (queue.length > 0) {
    temp = queue.length;

    for (let i = 0; i < temp; i++) {
      temp2 = queue.shift();
      if (!temp2.left && !temp2.right) return count;

      if (temp2.left) {
        queue.push(temp2.left);
      }

      if (temp2.right) {
        queue.push(temp2.right);
      }
    }

    count++;
  }
};

console.log(min_depth(t.root));
