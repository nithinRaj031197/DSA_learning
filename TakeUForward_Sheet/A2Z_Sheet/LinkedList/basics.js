class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertNodeAtBeginning(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  insertNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  deleteNode() {
    if (!this.head) {
      return this.head;
    }

    if (!this.head.next) {
      this.head = null;
      return this.head;
    }

    let currNode = this.head;

    while (currNode.next.next) {
      currNode = currNode.next;
    }

    currNode.next = null;
    return this.head;
  }

  deleteKthNode(k) {
    if (!this.head) {
      return this.head;
    }

    if (k > this.lengthOfLinkedList()) {
      console.log("Kth position not available!");
      return this.head;
    }

    if (k === 1) {
      this.head = this.head.next;
      return this.head;
    }

    let position = 1;
    let currNode = this.head;
    while (currNode && position < k - 1) {
      currNode = currNode.next;
      position++;
    }

    if (!currNode || !currNode.next) {
      console.log("Kth position not available!");
      return this.head;
    }

    currNode.next = currNode.next.next;
    return this.head;
  }

  lengthOfLinkedList() {
    let length = 0;
    let currNode = this.head;
    while (currNode) {
      currNode = currNode.next;
      length += 1;
    }
    return length;
  }

  search(data) {
    let currNode = this.head;
    let position = 1;
    while (currNode) {
      if (currNode.val === data) {
        console.log("position: ", position);
        return;
      }
      currNode = currNode.next;
      position += 1;
    }
    console.log("Not Found");
  }

  printLinkedList() {
    let currNode = this.head;
    let result = "";
    while (currNode) {
      result += currNode.val + " -> ";
      currNode = currNode.next;
    }
    result += "null";
    console.log(result.trim());
  }
}

const linkedList = new LinkedList();

linkedList.insertNode(3);
linkedList.insertNode(5);
linkedList.insertNode(8);

linkedList.insertNodeAtBeginning(1);
linkedList.insertNodeAtBeginning(0);

linkedList.printLinkedList();

linkedList.deleteNode();
linkedList.printLinkedList();

linkedList.deleteKthNode(2);

console.log("Length of linked list:", linkedList.lengthOfLinkedList());

linkedList.printLinkedList();

linkedList.search(3);
