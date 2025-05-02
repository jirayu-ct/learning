def Login():
    print("---------Login---------")
    usernameInput = input("username: ")
    passwordInput = input("Password: ")

    if usernameInput == "admin" and passwordInput == "123":
        return True
    else:
        return False


def ShowMenu():
    print("Done !!")
    print("--------IShop--------")
    print("1. Vat Calculator")
    print("2. Price Calculator")


def MenuSelect():
    userSelected = int(input(">>"))
    return userSelected


def VatCalculate(totalPrice):
    vat = 7
    return totalPrice+(totalPrice*vat/100)


def PriceCalculate():
    print("-------------------------")
    price1 = int(input("First Product Price: "))
    price2 = int(input("Second Product Price: "))
    print("-------------------------")
    return VatCalculate(price1+price2)
     

if Login() == True:
    ShowMenu()
    menuSelect = MenuSelect()
    if menuSelect == 1:
        print("-------------------------")
        totalPrice = int(input("Price :"))
        print("-------------------------")
        print("Total Price = %s Baht" % VatCalculate(totalPrice))
        print("-------------------------")

    elif menuSelect == 2:
        print("Total Price = %s Baht" % PriceCalculate())
        print("-------------------------")

    else:
        print("Please Enter Number 1 or 2 !!!")

else:
    print("Check Your Username or Password!!!")