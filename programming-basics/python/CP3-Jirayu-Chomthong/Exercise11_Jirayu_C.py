userInputNumber = int(input("Enter Round Number :"))
for i in range(userInputNumber):
    print(' '*(userInputNumber-i-1) + "*"*((i*2)+1))