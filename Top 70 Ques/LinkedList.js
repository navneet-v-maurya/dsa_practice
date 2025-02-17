const SinglyLinkedList = require("../Strivers/6.Linked_List/Singly_Linked_List");

const ll = new SinglyLinkedList();

ll.push_arr([1, 2, 3, 5, 7]);

const middle_node = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

console.log(middle_node(ll.head));

ll.create_loop_at_index(2);

const has_cycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
};

console.log(has_cycle(ll.head));
