const has_cycle = (head) => {
    let slow = head;
    let fast = head;
    let start = true;

    while (fast) {
        if (fast === slow && !start) return true;
        start = false;

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};

console.log(
    "has_cycle => ",
    has_cycle({
        val: 3,
        next: {
            val: 2,
            next: {
                val: 0,
                next: {
                    val: -4,
                    next: null,
                },
            },
        },
    })
);

const head = {
    val: 3,
    next: {
        val: 2,
        next: {
            val: 0,
            next: {
                val: -4,
                next: null,
            },
        },
    },
};

const delete_node = (node) => {
    let curr = node;

    node.val = curr.next.val;
    node.next = curr.next;
};
console.log("delete_node => BEFORE ", head);
delete_node(head.next.next);
console.log("delete_node => AFTER", head);
