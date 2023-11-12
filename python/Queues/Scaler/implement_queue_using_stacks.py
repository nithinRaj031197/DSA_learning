class QueueUsingStacks:
    def __init__(self):
        self.eq_stack = []
        self.dq_stack = []

    def add(self, x):
        self.eq_stack.append(x)

    def popleft(self):
        if not self.dq_stack:
            while self.eq_stack:
                self.dq_stack.append(self.eq_stack.pop())
        return self.dq_stack.pop()

    def isEmpty(self):
        return not self.eq_stack and not self.dq_stack


Q = QueueUsingStacks()

Q.add(2)
Q.add(4)
Q.add(6)
Q.add(5)
Q.popleft()
Q.add(1)
Q.popleft()
Q.popleft()
Q.popleft()
Q.add(12)

print(Q.eq_stack, Q.dq_stack)
