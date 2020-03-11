# hash tables in python are called dictionaries
# you can use a hashtable to filter out duplicate items in a list

items = ["apple", "pear", "orange", "banana", "apple", "orange", "apple", "pear", "banana", "orange", "apple", "kiwi", "pear", "apple", "orange"]

# create a hashtable and assign it to a variable
filtered = dict()
counter = dict()
# loop over each item in the list and add to the hashtable
for key in items:
    filtered[key] = 0

for item in items:
    if (item in counter.keys()):
        counter[item] += 1
    else:
        counter[item] = 1



# create a set from the resulting keys in the hashtable
result = set(filtered.keys())
print(result)
print(counter)