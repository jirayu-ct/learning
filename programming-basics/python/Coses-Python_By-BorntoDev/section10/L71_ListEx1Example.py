menuList = []
priceList = []

def showBill():
    totalPrice = 0
    print("My Food".center(21, "-"))
    for number in range(len(menuList)):
        print(menuList[number], priceList[number])
        totalPrice += priceList[number]

    print("Total :", totalPrice)


while True:
    menuName = input("Please Enter Menu :")
    '''.lower() การทำให้ตัวอักษรเป็นตัวพิมพ์เล็กทั้งหมด'''
    if menuName.lower() == "exit":
        break
    else:
        menuPeice = int(input("Price :"))
        menuList.append(menuName)
        priceList.append(menuPeice)

showBill()