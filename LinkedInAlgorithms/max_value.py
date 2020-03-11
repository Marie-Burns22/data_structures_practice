items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def find_max(items):
    #breaking condition
    if len(items) == 1:
        return items[0]
    
    #otherwise get the first item and call function again to operate on the rest of the list
    op1 = items[0]
    print(op1)
    op2 = find_max(items[1:])
    print(op2)

    #compare when down to just 2
    if op1 > op2:
        return op1
    else:
        return op2
    
print(find_max(items))