class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  push(val) {
    const new_node = new Node(val);

    if (!this.root) {
      this.root = new_node;
    } else {
      const queue = [this.root];
      let added = false;
      while (queue.length > 0) {
        const length = queue.length;

        for (let i = 0; i < length; i++) {
          const temp = queue.shift();
          if (!temp.left) {
            temp.left = new_node;
            added = true;
            break;
          } else {
            queue.push(temp.left);
          }

          if (!temp.right) {
            temp.right = new_node;
            added = true;
            break;
          } else {
            queue.push(temp.right);
          }
        }

        if (added) break;
      }
    }
    return this.root;
  }
}

// const t = new BinaryTree();

// console.log(t.push(1));
// console.log(t.push(2));

// console.log(t.push(3));

// console.log(t.push(4));

module.exports = BinaryTree;
