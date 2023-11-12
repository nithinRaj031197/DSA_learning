
from collections import deque


def taskScheduling(A, B):
    A = deque(A)
    B = deque(B)

    count = 0
    while A and B:
        if A[0] != B[0]:
            A.append(A.popleft())
        else:
            A.popleft()
            B.popleft()

        count += 1

    return count


print(taskScheduling([2, 3, 1, 5, 4],  [1, 3, 5, 4, 2]))
