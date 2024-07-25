function taskScheduling(A, B) {
  let count = 0;

  while (A.length > 0 && B.length > 0) {
    if (A[0] !== B[0]) {
      A.push(A.shift());
    } else {
      A.shift();
      B.shift();
    }
    count += 1;
  }

  return count;
}

console.log(taskScheduling([2, 3, 1, 5, 4], [1, 3, 5, 4, 2]));
