function solve(N) {
  const queue = [];

  queue.push(1);
  queue.push(2);

  while (N - 1 > 0) {
    const val = queue.shift();

    for (let i = 1; i <= 2; i++) {
      queue.push(val * 10 + i);
    }

    N -= 1;
  }

  const res = queue[0];
  return parseInt(res.toString() + res.toString().split("").reverse().join(""));
}

console.log(solve(3));
