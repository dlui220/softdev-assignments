def pt(n):
    retL = []
    for a in range(1,n):
        for b in range(a,n):
            for c in range(b,n):
                if ((a**2 +  b**2) == c**2):
                    retL.append([a,b,c])
    return retL

def pt2(n):
    return [[a,b,c]
            for a in range(1,n)
            for b in range(a,n)
            for c in range(a,n)
            if a**2 + b**2 == c**2]

print pt(100)
print pt2(100)


