class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(5);
head.next.next = new Node(2);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(1);

function reverseLinkedList(head) {
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

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  const reversedSecondHalf = reverseLinkedList(slowPointer.next);

  let firstPointer = head;
  let secondPointer = reversedSecondHalf;

  while (secondPointer) {
    if (firstPointer.val !== secondPointer.val) {
      slowPointer.next = reverseLinkedList(reversedSecondHalf);
      return false;
    }
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  slowPointer.next = reverseLinkedList(reversedSecondHalf);
  return true;
}

if (isPalindrome(head)) {
  console.log("The linked list is a palindrome.");
} else {
  console.log("The linked list is not a palindrome.");
}
