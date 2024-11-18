const Singly_linked_list = require("./Singly_Linked_List");

const sl = new Singly_linked_list();

sl.push_arr([1, 2, 3, 4, 5, 6]);

//Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list.
// However, if the linked list has an even number of nodes, return the second middle node.

// Example 1:
// Input: LL: 1  2  3  4  5
// Output: 3
// Explanation: Node with value 3 is the middle node of this linked list.

// Example 2:
// Input: LL: 1  2  3  4  5  6
// Output: 4
// Explanation:  In this example, the linked list has an even number of nodes hence we return the second middle node which is 4.

const middle_node = (head) => {
  let start = head;
  let end = head;

  while (end) {
    if (!end.next) break;
    start = start.next;
    end = end.next.next;
  }
  return start;
};

console.log(middle_node(sl.head));
console.log(sl);
