const Doubly_linked_list = require("./Doubly_Linked_List");

const dll = new Doubly_linked_list();

dll.push_arr([1, 1, 1, 2, 3, 4]);

//console.log(dll.head);

//You are given the head_ref of a doubly Linked List and a Key. Your task is to delete all occurrences of the given key if it is present and return the new DLL.

// 2<->2<->10<->8<->4<->2<->5<->2 , 2
// Output: 10<->8<->4<->5
// Explanation:
// All Occurences of 2 have been deleted.

const delete_all_occurance_of_key = (head, key) => {
  let temp = head;
  let prev;
  let next;

  while (temp && temp.data === key) {
    head = temp.next;
    if (head) {
      head.prev = null;
    }
    temp = head;
  }

  temp = temp.next;

  while (temp) {
    if (temp.data === key) {
      prev = temp.prev;
      next = temp.next;
      if (prev) {
        prev.next = next;
      }
      if (next) {
        next.prev = prev;
      }
    }
    temp = temp.next;
  }
  return head;
};

console.log(delete_all_occurance_of_key(dll.head, 2));

//Given a doubly linked list of n nodes sorted by values, the task is to remove duplicate nodes present in the linked list.

// Input: 1<->1<->1<->2<->3<->4
// Output: 1<->2<->3<->4
// Explanation:
// Only the first occurance of node with value 1 is
// retained, rest nodes with value = 1 are deleted.

const remove_duplicates = (head) => {
  if (!head) return null;

  let current = head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
      if (current.next) {
        current.next.prev = current;
      }
    } else {
      current = current.next;
    }
  }

  return head;
};

console.log(remove_duplicates(dll.head));
