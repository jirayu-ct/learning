class Vehicle:
    licensecode = ""
    seriaCode = ""

    def turnONAriConditioner(self):
        print("Turning on Ari Conditioner")

class Car(Vehicle):
    def sayhello(self):
        print("Hello Car")

class PickUp(Vehicle):
    def sayhello(self):
        print("Hello PickUp")

class Van(Vehicle):
    def sayhello(self):
        print("Hello Van")

class EstateCar(Vehicle):
    def sayhello(self):
        print("Hello EstateCar")


car = Car()
car.turnONAriConditioner()
car.sayhello()

pickup = PickUp()
pickup.turnONAriConditioner()
pickup.sayhello()

van = Van()
van.turnONAriConditioner()
van.sayhello()

estatecar = EstateCar()
estatecar.turnONAriConditioner()
estatecar.sayhello()