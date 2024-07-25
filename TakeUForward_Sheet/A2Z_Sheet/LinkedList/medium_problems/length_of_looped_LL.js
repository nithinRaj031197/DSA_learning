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

function findLength(slow, fast) {
  let counter = 0;
  fast = fast.next;
  while (fast !== slow) {
    fast = fast.next;
    counter += 1;
  }
  return counter;
}

function lengthOfLoopedLL(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return findLength(slowPointer, fastPointer);
    }
  }
  return 0;
}

console.log(lengthOfLoopedLL(head));
