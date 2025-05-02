from tkinter import *

def leftClickButton(event):
    print("Left Click!!")

def rightClickButton(event):
    print("Right Click!!")

def doubleClickButton(event):
    print("double Click!!")

main = Tk()
button = Button(main, text="My Button!!")
button.pack()
#<Button-1>คลิกซ้าย 2คลิกกลาง 3คลิกขวา
button.bind("<Button-1>", leftClickButton)
button.bind("<Button-3>", rightClickButton)
button.bind("<Double-1>", doubleClickButton)


main.mainloop()