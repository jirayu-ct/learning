fruits = {"apple", "banana", "pineapple", "orange"}
print(fruits)


'''del คือการลบตัวแปรทิ้ง หายไปเลย'''
'''del fruits
print(fruits)'''



fruits.remove("banana")
fruits.add("Grap")
print(fruits)
fruits.clear()


'''set สิ่งของเดียวกันไม่สามารถซ้ำกันได้'''
userInput = int(input("Enter Number :"))
myFruits = set()
while len(myFruits) < userInput :
    myFruits.add(input("Fruits :"))
    print(myFruits)