class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

function startingPoint() {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      slowPointer = head;

      while (slowPointer != fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
      }
      return slowPointer;
    }
  }
  return null;
}

const startingNode = startingPoint(head);
if (startingNode) {
  console.log(startingNode.val);
} else {
  console.log(null);
}

// TC: O(N)
// SC: O(1)
