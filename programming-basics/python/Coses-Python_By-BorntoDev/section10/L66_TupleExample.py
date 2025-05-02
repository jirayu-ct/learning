'''Tuple เหมือนกับListแต่จะไม่สามารถเปลี่ยนแปร เพิ่ม ลบ ข้อมูลในนั้นได้ และ ทำงานได้เร็วกว่า List'''


tupleEx = ('Lucibel', 'Bocchi', 'Goto Hitori')
print(tupleEx)

tupleEx2 = ('Naki', 'Hina')
tupleEx3 = tupleEx + tupleEx2 *2
print(tupleEx3)

print(tupleEx3[3])
print(tupleEx3[:3])

print('Hina' in tupleEx3)

for i in tupleEx3:
    print("hello", i)