for x in range(12):
    for y in range(12):
        print(x+1, "x", y+1, "=", (x+1)*(y+1))
        break

for val in "hell":
    if val == "l":
        continue
    print(val)
print("The end")