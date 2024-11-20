const Singly_linked_list = require("./Singly_Linked_List");

const sl = new Singly_linked_list();

sl.push_arr([1, 2, 3, 2, 1]);
sl.reverse();
console.log(sl);

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

//Given head, the head of a linked list, determine if the linked list has a cycle in it.

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

const has_loop = () => {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

console.log(has_loop(sl.head));

//Problem Statement: Given the head of a linked list that may contain a cycle, return the starting point of that cycle. If there is no cycle in the linked list return null.

// Example 1:
// Input: LL: 1  2  3  4  5
// Output: 3
// Explanation: This linked list contains a loop of size 3 starting at node with value 3.

// Example 2:
// Input: LL: LL: 1 -> 2 -> 3 -> 4 -> 9 -> 9
// Output: NULL
// Explanation:  This linked list does not contain  a loop hence has no starting point.

const get_loop_index = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (true) {
        if (slow === fast) {
          return fast;
        }
        slow = slow.next;
        fast = fast.next;
      }
    }
  }

  return null;
};

const s2 = new Singly_linked_list();

s2.push_arr([1, 2, 3]);
s2.create_loop_at_index(1);

console.log(get_loop_index(s2.head));

//Check if the given Linked List is Palindrome

// Example 1:
// Input Format:
// LL: 1  2  3  2  1
// Output: True

// Example 2:
// Input Format:
// LL: 1 2 3 3 2 1
// Output: True

// Example 3:
// Input Format:
// LL: 1 2 3 2 3
// Output: False

const is_palindrome = (head) => {
  if (head === null || head.next === null) {
    return true;
  }

  const reverse = (head1) => {
    let prev = null;
    let curr = head1;
    let temp;
    while (curr) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  };

  let middle = middle_node(head);

  let reverse_head = reverse(middle);

  let temp = head;

  while (reverse_head) {
    if (!temp || !reverse_head || temp.data !== reverse_head.data) {
      return false;
    }
    temp = temp.next;
    reverse_head = reverse_head.next;
  }
  return true;
};

console.log(is_palindrome(sl.head));
