import sys

systemMenu = {"a":45, "b":40, "c":50, "d":45}
menuList = []


def showBill():
    totalPrice = 0
    print("My Food".center(21, "-"))
    for number in range(len(menuList)):
        print(menuList[number][0], menuList[number][1], "Bath")
        totalPrice += menuList[number][1]

    print("Total : %s Bath" % totalPrice)


while True:
    try:
        menuName = input("Please Enter Menu :").lower()
        '''.lower() การทำให้ตัวอักษรเป็นตัวพิมพ์เล็กทั้งหมด'''
        if menuName == "exit":
            break
        else:
            menuList.append([menuName, systemMenu[menuName]])
            
    except KeyError:
        print("ERROR: Please Enter Menu a b c d or exit")
    
    except:
        print("ERROR:", sys.exc_info()[0])

showBill()