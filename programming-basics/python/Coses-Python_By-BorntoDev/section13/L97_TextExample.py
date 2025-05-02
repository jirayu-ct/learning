from tkinter import *

main = Tk()
#anchor W=ชิดซ้าย E=ชิดขวา
Label(main, text="Hello World", width=20, fg="#ffc004", bg="black", font=("itim", 38), anchor=W).grid(row=0, column=0)

main.mainloop()