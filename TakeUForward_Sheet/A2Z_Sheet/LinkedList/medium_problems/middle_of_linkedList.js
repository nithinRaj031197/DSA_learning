class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

class LinkedList {
  middleOfLinkedList(head) {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next && slowPointer) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    return slowPointer.val;
  }
}

LL = new LinkedList();
console.log(LL.middleOfLinkedList(head));

// TC: O(N/2)
// SC: O(1)
