
# a, b must be array
def compareTriplets(a, b):
    # Write your code here
    # alice  result[0]
    # beni result[1]
    result = [0, 0]
    for i in range(3):
        if (a[i] > b[i]):
            result[0] += 1
        elif (b[i] > a[i]):
            result[1] += 1
    return result


print compareTriplets([0,0,0], [1,0,3])