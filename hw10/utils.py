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

@getFuncName
@checkTime
def authenticate(fn,ln):
    if fn == "Felicity" and ln == "Ng":
        return True
    else:
        return False
