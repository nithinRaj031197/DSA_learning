from collections import deque


def solve(N):
    if N == 0:
        return None

    q = deque()

    q.append(1)
    q.append(2)
    q.append(3)

    input = [1, 2, 3]

    while N-1 > 0:
        val = q.popleft()

        for num in input:
            q.append(val * 10 + num)

        N -= 1

    return q.popleft()


print(solve(10))
print(solve(8))


# or


def solve(N):
    q = deque()

    q.append(1)
    q.append(2)
    q.append(3)

    N -= 3

    input = [1, 2, 3]

    while N > 0:
        val = q.popleft()

        for num in input:
            if N == 0:
                return q.pop()
            q.append(val * 10 + num)
            N -= 1


print(solve(10))
