class Animal():
    def eat(self):
        print('Eating')

class Cat(Animal):
    #__ คือEncapsulation
    __name = ""
    def setName(self, text):
        self.name = text
        print(f"Setting New Cat Name = {self.name}")
    def eat(self):
        print(f'Meowww {self.name} eating...')

cat = Cat()
cat.setName("TT")
cat.eat()