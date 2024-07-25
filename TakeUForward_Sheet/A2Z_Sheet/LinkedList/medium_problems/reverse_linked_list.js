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
  reverseLinkedList(head) {
    let prev = null;
    let currNode = head;

    while (currNode) {
      let front = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = front;
    }
    return prev;
  }

  printLinkedList(head) {
    let result = "";

    let currNode = head;

    while (currNode) {
      result += currNode.val + " -> ";
      currNode = currNode.next;
    }
    result += "null";
    console.log(result);
  }
}
LL = new LinkedList();
const reversedHead = LL.reverseLinkedList(head);
LL.printLinkedList(reversedHead);

// TC: O(N)
// SC: O(1)
