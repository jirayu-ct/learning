from tkinter import *

_exit = lambda :exit()
sayHello = lambda: print("Hello, World!")

MainWindow = Tk()

Button(MainWindow, text = "Click Me!", command = sayHello, width = 8, height = 1).grid(row = 0, column = 1)
Button(MainWindow, text = "Cancel", command = _exit, width = 8, height = 1).grid(row = 2, column = 0)
Label(MainWindow, text = "Hello, World!", width = 20, fg = "#ffc000", bg = "black").grid(row = 0, column = 0)

MainWindow.mainloop()