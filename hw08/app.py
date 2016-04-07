yo = [1,2,3]
bro = [2,3,4]
swag = [1,2]
man = ["red","white"]

### Union ###
def union(a,b):
    l = [ x for x in b if x not in a ]
    return a + l

print union(yo,bro)

### Intersection ###
def intersection(a,b):
    return [ x for x in a if x in b ]

print intersection(yo,bro)
    
### Set Difference ###
def setDiff(a,b):
    return [ x for x in a if x not in b ]

print setDiff(yo,bro)

### Symmetric Difference ###
def symDiff(a,b):
    i = [ x for x in a if x not in b ]
    j = [ x for x in b if x not in a ]
    return i + j

print symDiff(yo,bro)

### Cartesian Product ###
def cartesian(a,b):
    l = []
    for i in a:
        for j in b:
            l.append([i,j])
    return l

print cartesian(swag,man)
