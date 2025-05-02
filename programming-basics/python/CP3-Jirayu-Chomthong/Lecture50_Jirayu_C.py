print("---------------------")
print("---------------------")
number1 = int(input("Number1 :"))
number2 = int(input("Number2 :"))
print("---------------------")
print("---------------------")


def AddNumber(number1, number2):
    print("%s + %s = %s" % (number1, number2, (number1+number2)))


def SubtractNumber(number1, number2):
    print("%s - %s = %s" % (number1, number2, (number1-number2)))


def MultiplyNumber(number1, number2):
    print("%s x %s = %s" % (number1, number2, (number1*number2)))


def DivideNumber(number1, number2):
    print("%s / %s = %s" % (number1, number2, (number1/number2)))


AddNumber(number1, number2)
SubtractNumber(number1, number2)
MultiplyNumber(number1, number2)
DivideNumber(number1, number2)
print("---------------------")
print("---------------------")