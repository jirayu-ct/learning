print("---------------------")
print("---------------------")
price = int(input("Price :"))
print("---------------------")


def VatCalculate(price):
    return price + (price*7/100)


print("Total Price = %s Baht" % VatCalculate(price))
print("---------------------")
print("---------------------")