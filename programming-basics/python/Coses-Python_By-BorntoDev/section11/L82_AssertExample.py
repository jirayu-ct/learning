for i in range(10):
    assert i < 5, "Error"
    print(i)
    



x = "hallo"

'''assert ถ้า x ไม่เท่ากับ "hallo" จะแสดง "x should bo 'hello'" '''
'''ถ้า assert เป็นเท็จจะแสดงข้อความทางด้านหลัง'''

assert x == "goodbye", "x should bo 'hello'"