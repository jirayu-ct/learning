from tkinter import *

def button_click(number):
    current = lableResult.get()
    lableResult.delete(0, END)
    lableResult.insert(0, str(current) + str(number))

main = Tk()
#main.geometry("340x500+700+20")
main.title("Cululater")
main.configure(background="#202020")

lableResult = Entry(main, bg="#202020", fg="white")
lableResult.grid(row=0, column=0, columnspan=4)

#lableResult = Label(main, text="Result", height="2", fg='#FFFFFF',bg='#202020', font=("itim", 40, "bold"))
#lableResult.grid(column=0, row=0, columnspan=3)

#Label(main, text="spac", fg="#202020", bg="#202020").grid(column=1, row=1)

button0 = Button(main, text = "0", command=lambda: button_click(0), width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button0.grid(column=1, row=5)

button1 = Button(main, text = "1", width="3", command=lambda: button_click(1), fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button1.grid(column=0, row=4)

button2 = Button(main, text = "2", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button2.grid(column=1, row=4)

button3 = Button(main, text = "3", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button3.grid(column=2, row=4)

button4 = Button(main, text = "4", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button4.grid(column=0, row=3)

button5 = Button(main, text = "5", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button5.grid(column=1, row=3)

button6 = Button(main, text = "6", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button6.grid(column=2, row=3)

button7 = Button(main, text = "7", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button7.grid(column=0, row=2)

button8 = Button(main, text = "8", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button8.grid(column=1, row=2)

button9 = Button(main, text = "9", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
button9.grid(column=2, row=2)

buttonDel = Button(main, text="Del", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
buttonDel.grid(column=3, row=2)

buttonPus = Button(main, text="+", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
buttonPus.grid(column=3, row=3)

buttonSubtract = Button(main, text="-", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
buttonSubtract.grid(column=3, row=4)

buttonMultiply = Button(main, text="x", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
buttonMultiply.grid(column=3, row=5)

buttonDivide = Button(main, text="/", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
buttonDivide.grid(column=2, row=5)

buttonEquals = Button(main, text="=", width="3", fg="#FFFFFF", bg="#323232", font=("itim", 20, "bold"))
buttonEquals.grid(column=0, row=5)



main.mainloop()