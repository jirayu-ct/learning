import json


def ReadJson():
    # ข้อมูล JSON ที่เราต้องการอ่าน
    x =  '{ "name":"John", "age":30, "city":"New York"}'
    # แปลงข้อมูลให้กลายเป็นรูปที่เราสามารถใช้ได้
    y = json.loads(x)
    # ทำการเรียกข้อมูล age ออกมาแสดง
    print(y["name"])
    print(y["age"])
    print(y["city"])


def WriteJson():
    # สร้างข้อมูลที่เราต้องการแปลง(ประเภท dictionary)
    x = {
        "name": "John",
        "age": 30,
        "city": "New York"
    }
    # คำสั่งที่ใช้ในการแปลง
    y = json.dumps(x)
    # มาลองดูผลลัพธ์กัน
    print(y)

    #สร้าง json ในรูปแบบไฟล์
    with open('L89_TestCreateJson.json', mode='w') as testJson:
        json.dump(y, testJson)

    

ReadJson()
WriteJson()