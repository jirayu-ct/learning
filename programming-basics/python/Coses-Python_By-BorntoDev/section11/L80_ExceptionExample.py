import sys

randomList = ['a', 0, 2]

for entry in randomList:
    '''try คือการลอง ทำจนกว่าโปรแกรมจะError ถ้า Error มันจะไปทำงานที่ Except ถ้าไม่Errorก็จะจบการทำงานไป'''
    try:
        print("The entry is", entry)
        r = 1/int(entry)
        break

    except:
        '''sys.exc_info() คือการบอกว่าการทำงานนี้ มันทำงานอะไร'''
        print("Oops!", sys.exc_info()[0], "occuted.")
        print("Next entry.")
        print()

print("The reciprocal of", entry, "is", r)