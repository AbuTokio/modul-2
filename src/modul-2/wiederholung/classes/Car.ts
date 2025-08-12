import { OrderStatus } from "../enums/OrderStatus"
import { ICar } from "../interfaces/ICar"

class Car implements ICar {
  _brand: string
  _model: string

  static status: OrderStatus = OrderStatus.CREATED

  static availableTypes = ["BMW", "BENZ", "TESLA", "VW", "FORD", "FERRARI"]

  // Was ist static?
  // Sie gehört der Klasse und nicht einer Instanz
  // Man greift mit Klassenname.Eigenschaft oder Klassenname.Methode() darauf zu
  // % Dafür braucht man keine neue Instanz bzw. erzeugtes Object
  static numberOfCars: number = 0

  constructor(brand: string, model: string) {
    this._brand = brand
    this._model = model
    Car.numberOfCars++
  }

  static isAvailable(typeParameter: string): void {
    if (Car.availableTypes.includes(typeParameter)) {
      console.log(`Die Marke ${typeParameter} ist vorhanden.`)
    } else {
      console.log(`%c Die Marke ${typeParameter} ist nicht vorhanden.`, "background: red")
    }
  }

  static howManyCars(): void {
    console.log(`Es gibt ${Car.numberOfCars} Autos in der Garage.`)
  }

  startEngine(): void {
    throw new Error("Method not implemented.")
  }

  static updateOrder(): void {
    if (Car.status === OrderStatus.CREATED) {
      Car.status = OrderStatus.READY
    }
    if (Car.status === 1) {
      console.log("Das Auto ist bereit zum Verkaufen!")
    }
  }
}

export default Car
