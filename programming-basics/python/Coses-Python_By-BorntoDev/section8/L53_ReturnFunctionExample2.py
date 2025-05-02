price = int(input("Enter Price :"))


def VatCalculate(price):
    result = price + (price*7/100)
    return result


print(VatCalculate(price))