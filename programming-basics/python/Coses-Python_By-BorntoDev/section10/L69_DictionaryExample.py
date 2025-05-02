dict1 = {'Name':'Lucibel', 'Age':18}
print(dict1['Name'], dict1['Age'])
print(dict1)


'''การเพิ่ม Key และ value เข้าไปใน Dict'''
dict1['Lastname'] = 'Bataha'
print("Hello", dict1['Name'], dict1['Lastname'])
print(dict1)


'''การเปลี่ยน value ใน key'''
dict1['Name'] = "Bocchi"
print(dict1['Name'])
print(dict1)


'''.clear() คือการลบข้อมูลทั้งหมดที่อยู่ใน Dict'''
dict1.clear()
print(dict1)