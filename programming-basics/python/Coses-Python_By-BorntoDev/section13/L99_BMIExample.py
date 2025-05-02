from tkinter import *
import math

def leftClickButton(event):
    hight = int(textBoxHight.get())
    weight = int(textBoxWeigth.get())

    hight /= 100
    bmi = weight / math.pow(hight, 2)

    if bmi <= 18.5:
        lableBmi = "ผอมเกินไป"
    elif 18.6 <= bmi <= 22.9:
        lableBmi = "น้ำหนักปกติ เหมาะสม"
    elif 23 <= bmi <= 24.9:
        lableBmi = "น้ำหนักเกิน"
    elif 25 <= bmi <= 29.9:
        lableBmi = "อ้วน"
    else:
        lableBmi = "อ้วนมาก"

    labelResult.configure(text = lableBmi)


main = Tk()
lableHight = Label(main, text="ส่วนสูง (cm.)")
lableHight.grid(column=0, row=0)
textBoxHight = Entry(main)
textBoxHight.grid(column=1, row=0)

lableWeigth = Label(main, text="น้ำหนัก (Kg.)")
lableWeigth.grid(column=0, row=1)
textBoxWeigth = Entry(main)
textBoxWeigth.grid(column=1, row=1)

calculateButton = Button(main, text = "คำนวณ")
calculateButton.grid(column=0, row=2)
calculateButton.bind('<Button-1>', leftClickButton)

labelResult = Label(main, text="ผลลัพธ์")
labelResult.grid(column=1, row=2)

main.mainloop()