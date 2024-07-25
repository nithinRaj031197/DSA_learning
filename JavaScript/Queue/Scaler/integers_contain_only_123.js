function solve(N) {
  let q = [];

  q.push(1);
  q.push(2);
  q.push(3);

  const input = [1, 2, 3];

  while (N - 1 > 0) {
    const val = q.shift();

    for (let num of input) {
      q.push(val * 10 + num);
    }

    N -= 1;
  }

  return q.shift();
}

console.log(solve(10));
