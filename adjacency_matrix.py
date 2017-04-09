a, b, c, d, e, f, g, h = range(8)

N = [
        [0, 1, 1, 1, 1, 1, 0, 0], # a
        [0, 0, 1, 0, 1, 0, 0, 0], # b
        [0, 0, 0, 1, 0, 0, 0, 0], # c
        [0, 0, 0, 0, 1, 0, 0, 0], # d
        [0, 0, 0, 0, 0, 1, 0, 0], # e
        [0, 0, 1, 0, 0, 0, 1, 1], # f
        [0, 0, 0, 0, 0, 1, 0, 1], # g
        [0, 0, 0, 0, 0, 1, 1, 0]  # h
]

# checking if d if a neighbor of f
print(N)
N[f][d] is 1  # note that N[f][d] is equal to N[d][f] if the graph is undirected

# finding the degree of f, i.e. the number of neighbors of f
sum(N[f])
