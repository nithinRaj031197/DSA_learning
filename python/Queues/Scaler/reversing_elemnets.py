def reversingQueue(A):
    stack = []

    while A:
        stack.append(A.pop(0))

    while stack:
        A.append(stack.pop())

    return A


print(reversingQueue([2, 4, 1, 5, 7]))  # 7, 5, 1, 4, 2
