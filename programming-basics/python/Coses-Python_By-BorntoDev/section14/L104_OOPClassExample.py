class Customer:
    name = ""
    lastname = ""
    age = 0
    def addCart(self):
        print(f"Added to {self.name} {self.lastname} Age {self.age} cart")

customer1 = Customer()
customer1.name = "Jirayu"
customer1.lastname = "Chomthong"
customer1.age = 19
customer1.addCart()

pompam = Customer()
pompam.name = "pantaree"
pompam.lastname = "Sudla"
pompam.age = 18
pompam.addCart()