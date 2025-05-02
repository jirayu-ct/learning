import tkinter as tk

def button_click(number):
    current = display.get()
    display.delete(0, tk.END)
    display.insert(0, str(current) + str(number))

def button_clear():
    display.delete(0, tk.END)

def button_equal():
    second_number = display.get()
    display.delete(0, tk.END)
    if math == "addition":
        display.insert(0, f_num + float(second_number))
    if math == "subtraction":
        display.insert(0, f_num - float(second_number))
    if math == "multiplication":
        display.insert(0, f_num * float(second_number))
    if math == "division":
        display.insert(0, f_num / float(second_number))

def button_add():
    first_number = display.get()
    global f_num
    global math
    math = "addition"
    f_num = float(first_number)
    display.delete(0, tk.END)

root = tk.Tk()
root.title("Calculator")

display = tk.Entry(root, width=40, borderwidth=5)
display.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

button_1 = tk.Button(root, text="1", padx=40, pady=20, command=lambda: button_click(1))
button_2 = tk.Button(root, text="2", padx=40, pady=20, command=lambda: button_click(2))
# เพิ่มปุ่มอื่น ๆ ตามต้องการ

button_1.grid(row=3, column=0)
button_2.grid(row=3, column=1)
# และปุ่มอื่น ๆ ตามต้องการ

root.mainloop()
