def is_prime(n):
    if n is 2:
        print(True)
        return True
    for i in range(2, n):
        if n % i is 0:
            print(False)
            return False
    print(True)
    return True
