a, b, c, d, e, f, g, h = range(8)

N = [
    {b, c, d, e, f}, # a
    {c, e},          # b
    {d},
    {e},
    {f},
    {c, g, h},
    {f, h},
    {f, g}
]
print(N)
b in N[a]
