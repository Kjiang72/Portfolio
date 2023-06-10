


m, s = list(map(int,input().split()))
out_min = out_max = -1
for i in range(1, pow(10, m) + 1):
  cur_sum = 0
  for char in (str(i)):
    cur_sum += int(char)
  if cur_sum == s:
    if out_min == -1:
      out_min = i
    if i > out_max:
      out_max = i
print(out_min, out_max)