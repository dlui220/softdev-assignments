# nums = []
# for x in range(8):
#     nums.append(x)
# print "nums = " + str(nums)
# squares = []
# for x in range(8):
#     squares.append(x**2)
# print "squares = " + str(squares)
# print "list comprehensions = " + str([x for x in range(8)])
# print "list comprehensions with squares = " + str([x*x for x in range(8)])
# print "list of tuples" + str([ (x, x*x, x*x*x) for x in range(8) ])

# p="myNoobPass1234"
# print [x for x in p]
# print [x for x in "1234"]

# UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# print [ x for x in p if x in UC_LETTERS ]
# print [ 1 if x in UC_LETTERS else 0 for x in p ]


def checkPassword( password ):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS="abcdefghijklmnopqrstuvwyxz"
    NUM="1234567890"
    
    u = [ 1 if x in UC_LETTERS else 0 for x in password ]
    l = [ 1 if x in LC_LETTERS else 0 for x in password ]
    n = [ 1 if x in NUM else 0 for x in password ]

    if ((sum(u) > 0) and (sum(l) > 0) and (sum(n) > 0)):
        return True
    return False

print checkPassword("HelloThisIsPassword")
print checkPassword("HelloThisIsPassword1")
