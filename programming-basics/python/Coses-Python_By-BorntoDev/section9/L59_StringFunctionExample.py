

'''capitalize() คือการทำให้ตัวอักษรแรกเป็นตัวพิมพ์ใหญ่'''
name = 'lucibel'.capitalize()
lastName = "chomthong".capitalize()
print("Hello ! %s %s !!" % (name, lastName))


'''.center() คือการกำหนดให้อยู่ตรงกลาง'''
text = "Lucibel"
textFormatted = "Welcome %s" % (text)
print(textFormatted.center(21, "-"))


'''len() คือการนับจำนวนตัวอักษร'''
print(len(name))


'''ดูเพิ่มเติมที่: https://www.qhmit.com/python/reference/python_3_string_methods.cfm'''

'''.count() คือการค้นหาตัวอักษรว่าตัวที่หามีกี่ตัว'''
a = "Mushroooom soup" 
print(a.count("O"))
print(a.count("o"))
print(a.count("oo"))
print(a.count("ooo"))
print(a.count("Homer"))
'''ตำแน่งที่1กับ2 มีตัว"u"กี่ตัว'''
print(a.count("u", 1, 2))
'''ตั้งแต่ตัวที่8ไป มีตัว"o"กี่ตัว'''
print(a.count("o", 8))



'''.find() คือการหาลำดับตำแหน่งของตัวอักษรที่หา ถ้าตัวที่หาไม่มีจะขึ้น-1'''
b = "Fitness"
print(b.find("F"))
print(b.find("f"))
print(b.find("n"))
print(b.find("ness"))
print(b.find("ess"))
print(b.find("z"))
print(b.find("Homer"))

'''.format() คล้ายๆ %s %d %f'''
# Example 1
print("{} and {}".format("Tea", "Coffee"))

# Example 2
print("{1} and {0}".format("Tea", "Coffee"))

# Example 3
print("{lunch} and {dinner}".format(lunch="Peas", dinner="Beans"))

# Example 4
print("{1}, {0}, {2}".format(*"123"))

# Example 5
lunch = {"food": "Pizza", "drink": "Wine"}
print("Lunch: {food}, {drink}".format(**lunch))



'''ตรวจสอบเลขฐาน10 ว่าใช่ไหม'''
c = "123"
print(c.isdecimal())

c = u"\u00B2"
print(c.isdecimal())

c = "1.23"
print(c.isdecimal())

c = "u123"
print(c.isdecimal())

c = "Fitness"
print(c.isdecimal())

c = "$*%!!!"
print(c.isdecimal())