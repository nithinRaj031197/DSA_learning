class MyQueue {
  constructor() {
    this.eqStack = [];
    this.dqStack = [];
  }

  add(x) {
    this.eqStack.push(x);
  }

  popleft() {
    if (this.dqStack.length === 0) {
      while (this.eqStack.length > 0) {
        this.dqStack.push(this.eqStack.pop());
      }
    }
    return this.dqStack.pop();
  }
  isEmpty() {
    return !this.dqStack && !this.eqStack;
  }
}

const Q = new MyQueue();

Q.add(2);
Q.add(4);
Q.add(3);
Q.add(5);
Q.popleft();
Q.add(7);

console.log(Q.eqStack, Q.dqStack);
