import csv


def ReadCsv():
    #ส่วนการเปิดไฟล์ CSV ที่ชื่อ employee_birthday.txt
    with open('E:\githup\Coses-Python_By-BorntoDev\section12\L87_Employee_brithday.txt') as csv_file:
    #สร้างตัวแปรที่มีหน้ามีอ่านข้อมูล CSV ชื่อ csv_reader โดยแยกข้อมูลด้วยเครื่องหมาย , (comma)
        csv_reader = csv.reader(csv_file, delimiter =',')
    #สร้างตัวแปรที่ใช้ในการนับว่ามีกี่แถวแล้ว
        line_count = 0

        for row in csv_reader:
            #ส่วนในการแสดงชื่อ column
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
                line_count += 1
            #ส่วนในการแสดงข้อมูล
            else:
                print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
                line_count += 1
        print(f'Processed {line_count} lines.')


def WriteCSV():
    #ส่วนการเปิดไฟล์ CSV ที่ชื่อ employee_file.txt
    with open('L87_Employee_file.csv', mode='w') as employee_file:
        #ส่วนการกำหนดการเขียนไฟล์
        employee_writer = csv.writer(employee_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        #ส่วนการเพิ่มข้อมูล
        employee_writer.writerow(['Bocchi', 'min in black', 'snake'])
        employee_writer.writerow(['Ichika', 'john wick', 'bird'])
        employee_writer.writerow(['kita', 'anabel', 'cat'])

WriteCSV()
ReadCsv()

n = 4
print(f'Hello {n} wopww')
print(f'\tHello {n} wopww')

