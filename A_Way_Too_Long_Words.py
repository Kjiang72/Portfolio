


from xml.etree.ElementTree import tostring


def solve(word):
  if len(word) > 10:
    out = word[0] 
    out += str(len(word) - 2)
    out += word[-1]
    print(out)
  else:
    print(word)


words = int(input())
for i in range(words):
  solve(input())


