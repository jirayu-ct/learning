correcNumber = 17
userGuess = 0
while userGuess != correcNumber:
    userGuess = int(input("Please guss a number: "))
    if userGuess > correcNumber:
        print("Too Large")
    elif userGuess < correcNumber:
        print("Too Small")
    elif userGuess == correcNumber:
        print("Correct !!!")


'''
usernameInput = input("username: ")
passwordInput = input("Password: ")

while usernameInput != "admin" or passwordInput != "123":
    usernameInput = input("username: ")
    passwordInput = input("Password: ")
print("Done !!")
'''