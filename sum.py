def sum(seq):
    s = 0
    for x in seq:
        s += x
    return s

if __name__ == '__main__':
    test = sum([1, 4, 5])
    print "sum is ", test
    assert(test is 10)
