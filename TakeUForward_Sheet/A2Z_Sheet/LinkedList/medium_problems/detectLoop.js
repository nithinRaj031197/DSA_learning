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

function detectLoop(head) {
  let slowPointer = head.next;
  let fastPointer = head.next.next;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }
  return false;
}

if (detectLoop(head)) {
  console.log("Loop  Detected");
} else {
  console.log("Loop  not Detected");
}

// TC: O(N)
// SC: O(1)
