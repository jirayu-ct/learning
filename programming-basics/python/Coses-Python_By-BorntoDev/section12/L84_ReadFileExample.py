'''open() ตัวแรกคือชื่อไฟล์ ต่อมาคือ โหมด "r"=การอ่าน '''
file = open("E:\githup\Coses-Python_By-BorntoDev\section12\demo.txt", "r")

'''.read() คือการอ่าน'''
print(file.read())
'''.readline คือการอ่านทีล่ะบรรทัด'''
print(file.readline())
