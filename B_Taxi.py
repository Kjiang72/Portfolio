


taxis = [0 for i in range(3)]
out = 0
n = int(input())
arr = list(map(int, input().split()))
for num in arr:
  if num == 4:
    out += 1
  else:
    taxis[num - 1] += 1

if taxis[0] >= taxis[2]:
  out += taxis[2]
  taxis[0] -= taxis[2]
else:
  out += taxis[2]
  taxis[0] = 0

out += taxis[1] // 2
taxis[1] = taxis[1] % 2
if taxis[1] > 0:
  out += 1
  taxis[0] -= 2
while taxis[0] > 0:
  out += 1
  taxis[0] -= 4

print(out)