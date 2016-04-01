def inc(x):
    return x + 1
f = inc
print f(10) #returns 11

def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)

def f(x):
    def g(y):
        return x + y
    return g

a = f(1)
b = h(1)
print a
print b

# Q1: How would you explain to your ducky what this Scheme code does?
# (lambda (a b) (+ a b))
# it adds togethers the parameters a and b

# Q2: How would you explain to your ducky what this Scheme code does?
# (define foo (lambda (a b) (+ a b)))
# it defines the function foo and then calls the lambda function within it

# def h(x):
#     return lambda y: x + y

# To get a feel for this, try defining h as shown, then examining the output of these calls:

# h(1)
# h(2)
# h(1)(3)
# h(2)(5)

# Q3: Which of the four h() calls above would you say also created closures?
# The latter two, because the inner lambda function has access to x which is
# previously defined in the outer function

def repeat(word):
    return lambda count: word * count

print repeat('cool')(3)
