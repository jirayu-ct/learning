words = {"Brid":"มันคือนก", "Fish":"ปลา", "Dog":"หมา", "wolf":"หมาป่า", "human":"มนุษย์"}
print(words["Brid"])


'''แสดงข้อมูลทั้งในdict'''
words.copy()
print(words.copy())

words.items()
print(words.items())


'''.keys() คือการดูคีร์ทั้งหมดในDict'''
words.keys()
print(words.keys())
for i in words.keys():
    print(i)


'''.values() คือการดู value ทั้งหมดในDict'''
words.values()
print(words.values())
for i in words.values():
    print(i)