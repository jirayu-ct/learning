from tkinter import *

def sayGelloWorld():
    print("Hello Gello World")

#Tkinter คือตัวหลักในการจัดการGUI
MainWindow = Tk()
Button(MainWindow, text="Click Me", command=sayGelloWorld).grid(row=0, column=0)

Button(MainWindow, text="Click Me", command=sayGelloWorld).grid(row=1, column=0)
#button2.place(x=75, y=50)
MainWindow.mainloop()