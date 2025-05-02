from tkinter import *
from tkinter.ttk import Combobox
from tkinter import messagebox
from currency_converter import CurrencyConverter
from datetime import datetime


def clickConverter():
    try:

        date_str = date_entry.get()
        date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()
        if date_obj in allDates():
            try:
                amount = float(textboxAmount.get())
                from_ = boxFrom.get()
                to = boxTo.get()

                result = c.convert(amount, from_, to, date_obj)
                result = '{:.2f}'.format(result)

                boxFrom.set(from_)
                labelResult.config(text=result)

                print(f"จำนวน {amount} แปลงจาก {from_} เป็น {to} ในวันที่ {date_obj}  >> {result}")
            except ValueError:
                messagebox.showerror("Error", "กรุณาระบุตัวเลข!!")

            except:
                messagebox.showwarning("ขออภัยไม่มีวันที่ที่คุณต้องการ!", "โปรดหาวันที่ที่ใกล้เคียง")
        else:
            messagebox.showerror("ไม่มีวันที่ที่ระบุ", f"โปรดกรอกวันที่ใหม่ตั้งแต่ {dateConverter()[0]} ถึง {dateConverter()[1]} \nหรือกดปุ่ม'อัพเดทวันที่'เพื่อดูขอบเขต")
    except ValueError:
        #labelResult.config(text='Value Error!!')
        messagebox.showerror("รูปแบบวันที่ผิดพลาด!!", "โปรดกรอก 'YYYY-MM-DD' \nหรือกดปุ่ม'อัพเดทวันที่'")


def dateConverter():
    all_dates = allDates()
    return [all_dates[0], all_dates[-1]]


def allDates():
    return sorted(c.rates[boxFrom.get()].keys())


def supportDate():
    new_date = allDates()

    date_converter = dateConverter()
    earliest_date = date_converter[0]
    latest_date = date_converter[-1]

    text = f'{earliest_date} ถึง {latest_date}'
    label_showDate.config(text=text)

    date_entry.config(values=new_date)
    date_entry.set(dateConverter()[1])


root = Tk()
#root.geometry('600x400')
root.title(' Currency Converter')

c = CurrencyConverter()
currencies = list(c.currencies)
currencies.sort()

label = Label(root, text='Currency Converter', fg='black', font=('Helvetica', 20))
label.grid(column=0, row=0, pady=10, columnspan=3)

label_amount = Label(root, text='จำนวน:', fg='black', font=('Helvetica', 16))
label_amount.grid(column=0, row=1)
textboxAmount = Entry(root)
textboxAmount.grid(column=1, row=1, pady=5, columnspan=2)

label_from = Label(root, text='จาก:', fg='black', font=('Helvetica', 16))
label_from.grid(column=0, row=2)
boxFrom = Combobox(root, values=currencies, width = 5)
boxFrom.grid(column=1, row=2)
boxFrom.set("THB")

Label(root, text=' ').grid(column=4, row=2)

label_to = Label(root, text='ถึง:', fg='black', font=('Helvetica', 16))
label_to.grid(column=0, row=3)
boxTo = Combobox(root, values=currencies, width = 5)
boxTo.grid(column=1, row=3, pady=10)
boxTo.set("USD")

button_ok = Button(root, text='อัพเดทวันที่', command=supportDate, font=('Helvetica', 10))
button_ok.grid(column=0, row=4)

text_showDate = f'{dateConverter()[0]} ถึง {dateConverter()[1]}'
label_showDate = Label(root, text=text_showDate)
label_showDate.grid(column=1, row=4, columnspan=2)

dateFrom = StringVar()

label_date = Label(root, text="วันที่:", fg='black', font=('Helvetica', 16))
label_date.grid(column=0, row=5)
date_entry = Combobox(root, textvariable = dateFrom)
date_entry['values'] = allDates()
date_entry.grid(column=1, row=5, pady=10, columnspan=2)
date_entry.set("2024-06-04")

ConverterButton = Button(root, text = "แปลง", font = ('Helvetica', 12), command = clickConverter)
ConverterButton.grid(column=0, row=6, pady=10, columnspan=1)

labelResult = Label(root, text="ผลลัพธ์", fg='black', font=('Helvetica', 16))
labelResult.grid(column=1, row=6, pady=10, columnspan=2)

root.mainloop()