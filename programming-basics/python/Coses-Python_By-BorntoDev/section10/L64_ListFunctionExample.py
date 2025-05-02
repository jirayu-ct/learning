myFriends = ['Bocchi', 'Hitori', 'Goto']


'''.append คือการเพิ่มข้อมูลเข้าไปใน list'''
myFriends.append('Hinata')
print(myFriends)


'''.remove คือการลบข้อมูลใน list ต้องระบุด้วย'''
myFriends.remove('Hitori')
print(myFriends)


'''คือการแทรกเข้าไปแทนที่ลำดับข้อมูลนั้นๆ'''
myFriends[2] = "Hina"
print(myFriends)


'''คือการลบข้อมูลลำดับนั้นๆ'''
del myFriends[0]
print(myFriends)