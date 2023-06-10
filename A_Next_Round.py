n, k = list(map(int, input().split()))
out = 0
if n == 0:
  print(0)
else:
  arr = list(map(int, input().split()))
  for num in arr:
    if num >= arr[k - 1] and num > 0:
      out += 1
  print(out)
  