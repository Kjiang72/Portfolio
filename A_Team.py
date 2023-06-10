
def solve(arr):
  out = 0
  for array in arr:
    count = 0
    for num in array:
      count += num
    if count >= 2:
      out += 1
  print(out)
  

matrix = []
for i in range(int(input())):
  matrix.append(list(map(int, input().split())))
solve(matrix)