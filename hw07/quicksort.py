def qSort(l):
    if (l == []):
        return l

    # selects pivot point
    p = l[0]

    # partition lower and upper lists
    # then qsort both upper and lower lists again
    # (requires recursion)
    low = qSort([x for x in l[1:] if x < p])
    up = qSort([x for x in l[1:] if x >= p])
    
    return low + [p] + up

print qSort([22,42,71,16,9,11]) # returns [9, 11, 16, 22, 42, 71]

