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


UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS="abcdefghijklmnopqrstuvwyxz"
NUMERALS="1234567890"
CHARS=".?!&#,;:-_*"

def checkPasswordSimple( password ):
    
    u = [ 1 if x in UC_LETTERS else 0 for x in password ]
    l = [ 1 if x in LC_LETTERS else 0 for x in password ]
    n = [ 1 if x in NUMERALS else 0 for x in password ]

    if ((sum(u) > 0) and (sum(l) > 0) and (sum(n) > 0)):
        return True
    return False

# print checkPasswordSimple("HelloThisIsPassword")
# print checkPasswordSimple("HelloThisIsPassword1")

def checkPasswordStrength( password ):
    strength = 1;
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS="abcdefghijklmnopqrstuvwyxz"
    NUM="1234567890"
    SYM=".?!&#,;:-_*"
    
    u = [ 1 if x in UC_LETTERS else 0 for x in password ]
    l = [ 1 if x in LC_LETTERS else 0 for x in password ]
    n = [ 1 if x in NUMERALS else 0 for x in password ]
    s = [ 1 if x in CHARS else 0 for x in password ]
    
    if ((sum(u) > 0) and (sum(l) > 0)):
        strength += 2
    if (sum(n) > 0):
        strength += 1
    if (sum(s) > 0):
        strength += 1
    if (strength > 1):
        return "From 1-10, your password (" + password + ") strength is: "+ str(strength*2)
    return "From 1-10, your password (" + password + ") strength is: "+ str(strength)


print checkPasswordStrength("hello")    # return 1
print checkPasswordStrength("hello1")   # return 8
print checkPasswordStrength("hello_1")  # return 6
print checkPasswordStrength("Hello1")   # return 8
print checkPasswordStrength("Hello_1")  # return 10

def strengthCheck(p):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMERALS else
         0 for x in p]
    return 1 in l and 2 in l and 3 in l

print strengthCheck("hello")
print strengthCheck("Hello")
print strengthCheck("Hello1")
print strengthCheck("hello1")

def strength_rate(p):
    l = [1 if x in UC_LETTERS else
         2 if x in LC_LETTERS else
         3 if x in NUMERALS else
         4 if x in chars else
         0 for x in p]
    uc = len(p) - l.count(1)
    lc = len(p) - l.count(2)
    nums = len(p) - l.count(3)
    chrs = len(p) - l.count(4)
