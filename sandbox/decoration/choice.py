import random

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

def dble(f):
    name = f()
    return name + name

@doubler
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print get_name()

get_name = doubler(get_name)

print get_name()
