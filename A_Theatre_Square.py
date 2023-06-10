n, m, a = list(map(int, input().split()))

vert = m//a + 1 if m % a != 0 else m//a
hor = n//a + 1 if n % a != 0 else n//a
print(vert * hor)
