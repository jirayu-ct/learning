#ข้อมูลแบบ Set ไม่สารถมาเพิ่ม เปลี่ยนได้ ทำได้แค่ดึงข้อมูล และลบทั้งหมดแล้วเพิ่มเข้าไปใหม่

setTest = {"apple", "banana", "orange"}
for i in setTest:
    print(i)
    
print("apple" in setTest)