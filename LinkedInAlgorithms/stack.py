from collections import deque

stack  = []
stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)
print(stack)
x = stack.pop()
print(x)
print(stack)


queue = deque()
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

print(queue)

x = queue.popleft()
print(x)
print(queue)

