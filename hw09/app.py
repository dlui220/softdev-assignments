
# Examples
# def wrapper(f):
#     def inner(*arg):
#         return f(*arg)
#     return inner

# def foo(n1,n2,s):
#     return s

# closure = wrapper(foo)
# print closure(-2,3,'hello')

#a simple example of applying multiple decorators
# def make_bold(fn):
#     return lambda : "<b>" + fn() + "</b>"

# def make_italic(fn):
#     return lambda : "<i>" + fn() + "</i>"

# @make_bold
# @make_italic
# def hello():
#     return "hello world"

# helloHTML = hello()

# print helloHTML

# Homework 9
import time

def getFuncName(f):
    def args(*arg):
        arguments = ''.join(str(e) + ' | ' for e in arg)
        print "function name: " + f.func_name
        print "arguments provided: | " + arguments
        return f(*arg)
    return args

def checkTime(f):
    a = time.time()
    def args(*arg):
        return f(*arg)
    print "runtime of function: " + str(time.time()-a)
    return args

# @checkTime
# @getFuncName
# # idk what this function does tbh but wrapping works
# def func(a,b,c,d):
#     return a * b ** c * d

@checkTime
@getFuncName
def checkPythag(a,b,c):
    return (a**2 + b**2 == c**2)

# print func(5,20,2,405) # ---> 810000
print checkPythag(5,12,13)

