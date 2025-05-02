print("---------------")
print("  ---LOGIN---")
usernameInput = input("username: ")
passwordInput = input("Password: ")

'''ราคาปืน'''
m16 = 35000
m4 = 105000
ak47 = 150000


if usernameInput == "admin" and passwordInput == "123":
    print("-Wellcome to Lucibel-GunShop-")
    print("1.M16      %s baht" % m16)
    print("2.M4      %s baht" % m4)
    print("3.AK-47   %s baht" % ak47)

    print("สามารถเลือกได้มากกว่า 2 รายการ(ตามลำดับ)")
    userSelected = int(input("เลือกสินค้า(1-3)>>"))

    if userSelected == 1:
        m16Number = int(input("จำนวนสินค้า(M16): "))
        m16Result = m16*m16Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("M16 x %s %s : %sTHB" % (m16Number, m16, m16Result))
        print("Total : %sTHB" % m16Result)
        print("-----------------------------")
        print("Thank you for using the service")

    elif userSelected == 2:
        m4Number = int(input("จำนวนสินค้า(M4): "))
        m4Result = m4*m4Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("M4 x %s %s : %sTHB" % (m4Number, m4, m4Result))
        print("Total : %sTHB" % m4Result)
        print("-----------------------------")
        print("Thank you for using the service")

    elif userSelected == 3:
        ak47Number = int(input("จำนวนสินค้า(AK-47): "))
        ak47Result = ak47*ak47Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("AK-47 x %s %s : %sTHB" % (ak47Number, ak47, ak47Result))
        print("Total : %sTHB" % ak47Result)
        print("-----------------------------")
        print("Thank you for using the service")

    elif userSelected == 12:
        m16Number = int(input("จำนวนสินค้า(M16): "))
        m4Number = int(input("จำนวนสินค้า(M4): "))

        m16Result = m16*m16Number
        m4Result = m4*m4Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("M16 x %s  %s : %sTHB" % (m16Number, m16, m16Result))
        print("M4  x %s %s : %sTHB" % (m4Number, m4, m4Result))
        print("Total : %sTHB" % (m16Result + m4Result))
        print("-----------------------------")
        print("Thank you for using the service")

    elif userSelected == 13:
        m16Number = int(input("จำนวนสินค้า(M16): "))
        ak47Number = int(input("จำนวนสินค้า(AK-47): "))

        m16Result = m16*m16Number
        ak47Result = ak47*ak47Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("M16    x %s  %s : %sTHB" % (m16Number, m16, m16Result))
        print("AK-47  x %s %s : %sTHB" % (ak47Number, ak47, ak47Result))
        print("Total : %sTHB" % (m16Result + ak47Result))
        print("-----------------------------")
        print("Thank you for using the service")

    elif userSelected == 23:
        m4Number = int(input("จำนวนสินค้า(M4): "))
        ak47Number = int(input("จำนวนสินค้า(AK-47): "))

        m4Result = m4*m4Number
        ak47Result = ak47*ak47Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("M4    x %s %s : %sTHB" % (m4Number, m4, m4Result))
        print("AK-47 x %s %s : %sTHB" % (ak47Number, ak47, ak47Result))
        print("Total : %sTHB" % (m4Result + ak47Result))
        print("-----------------------------")
        print("Thank you for using the service")

    elif userSelected == 123:
        m16Number = int(input("จำนวนสินค้า(M16): "))
        m4Number = int(input("จำนวนสินค้า(M4): "))
        ak47Number = int(input("จำนวนสินค้า(AK-47): "))

        m16Result = m16*m16Number
        m4Result = m4*m4Number
        ak47Result = ak47*ak47Number

        print("-----------------------------")
        print("-Lucibel-GunShop-")
        print("-----------------------------")
        print("M16   x %s  %s : %sTHB" % (m16Number, m16, m16Result))
        print("M4    x %s %s : %sTHB" % (m4Number, m4, m4Result))
        print("AK-47 x %s %s : %sTHB" % (ak47Number, ak47, ak47Result))
        print("Total : %sTHB" % (m16Result + m4Result + ak47Result))
        print("-----------------------------")
        print("Thank you for using the service")

    else:
        print("ERROR: Pleses choose 1, 2, 3, 12, 13, 23, 123 !!!")

else:
    print("ERROR: Check Username and Password !!!")