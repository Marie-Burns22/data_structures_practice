#search for an item in an unordered list
# linear search

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]

def find_item(item, itemlist):
    for i in range(0, len(items)):
        if item == itemlist[i]:
            return i
    
    return None

# print(find_item(87, items))
# print(find_item(100, items))

#########################
#searching an ordered list

itemsSorted = [ 6, 8, 19, 20, 23, 41, 49, 53, 56, 87]

def binarysearch(item, itemlist):
    listsize = len(itemlist) - 1
    lowerIdx = 0
    upperIdx = listsize

    while lowerIdx <= upperIdx:
        pass
        midPt = (lowerIdx + upperIdx) // 2
        if itemlist[midPt] == item:
            return midPt
    
        if item > itemlist[midPt]:
            lowerIdx = midPt + 1
        else:
            upperIdx = midPt - 1

    if lowerIdx > upperIdx:
        return None

print(binarysearch(23, itemsSorted))
print(binarysearch(87, itemsSorted))
print(binarysearch(250, itemsSorted))
