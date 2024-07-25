// User
// TUF
// +
// Launching in
// Segregate even and odd nodes in LinkedList

// 14

// 3
// Problem Statement : Segregate even and odd nodes in LinkedList

// Given a LinkedList of integers. Modify the LinkedList in such a way that in Modified LinkedList all the even numbers appear before all the odd numbers in LinkedList.

// Also, note that the order of even and odd numbers should remain the same.

// Examples:

// Example 1:
// Input: 1→2→3→4→5→6→Null
// Output: 2→4→6→1→3→5→Null
// Explanation :
// Odd Nodes in LinkedList are 1,3,5 and
// Even Nodes in LinkedList are 2,4,6
// In Modified LinkedList all even Nodes comes before
// all Odd Nodes. So Modified LinkedList looks like
// 2→4→6→1→3→5→Null. Order of even and odd Nodes is
// maintained in modified LinkedList.

// Example 2:
// Input: 1→3→5→Null
// Output: 1→3→5→Null
// Explantion: As there are no Even Nodes in LinkedList,
// The Modified LinkedList is same as Original LinkedList.

// Example 3:
// Input: 2→4→6→8→Null
// Output: 2→4→6→8→Null
// Explanation: As there are no Odd Nodes in LinkedList,
// The Modified LinkedList is same as Original LinkedList.

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

function oddEvenSegregation(head) {
  const oddHead = new Node(-1);
  const evenHead = new Node(-1);

  let oddCurrNode = oddHead;
  let evenCurrNode = evenHead;

  let currNode = head;

  while (currNode) {
    if (currNode.val % 2 === 0) {
      evenCurrNode.next = currNode;
      evenCurrNode = currNode;
    } else {
      oddCurrNode.next = currNode;
      oddCurrNode = currNode;
    }
    currNode = currNode.next;
  }
  oddCurrNode.next = null;

  evenCurrNode.next = oddHead.next;

  return evenHead.next;
}
function printLinkedList(head) {
  let currNode = head;
  let result = "";
  while (currNode) {
    result += currNode.val + " -> ";
    currNode = currNode.next;
  }
  result += "null";
  console.log(result.trim());
}

const c = oddEvenSegregation(head);
printLinkedList(c);
