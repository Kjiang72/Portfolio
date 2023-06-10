n, l = list(map(int, input().split()))
arr = list(map(int, input().split()))
arr.sort()
rad = max(arr[0] - 0, l - arr[-1])
for i in range(1, len(arr)):
  if arr[i] - rad > arr[i - 1] + rad:
    rad = (arr[i] - arr[i - 1]) / 2
print("%.10f" % rad)