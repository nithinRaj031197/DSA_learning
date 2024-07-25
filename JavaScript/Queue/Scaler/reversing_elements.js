function reversingQueue(A) {
  let stack = [];

  while (A.length > 0) {
    stack.push(A.shift());
  }

  while (stack.length > 0) {
    A.push(stack.pop());
  }

  return A;
}

console.log(reversingQueue([2, 4, 5, 1, 6]));

// TC: O(N)
// SC: O(N)
