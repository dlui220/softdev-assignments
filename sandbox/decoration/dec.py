#Notes

def inc(x):
    return x + 1

def dec(x):
    return x - 1

f = inc

print f(5)
flist = [inc, dec]
print flist


#a simple closure in python
def makeAdder(n):
    def inner(x):
        return x + n;
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

add3(10) # -->
add5(10) # -->


# A clunky approach to class type abstraction:
# TASK: Simulate a class definition using inner functions

def make_counter():
    count = o
    def inc():
        count[0] = count[0] + 1

    def inc():
        count[0] = count[0] - 1

    def reset():
        count[0] = 0

    def get():
        return count[0]


#instantiate counters

c1 = make_counter()
c2 = make_counter()

#must use clunky list notation:

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()
