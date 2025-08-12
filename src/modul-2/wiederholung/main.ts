import "../../style.css"
import Car from "./classes/Car"
import { userListe } from "./data/userData"
import { ColorPalette } from "./enums/ColorPalette"
import { IAddress } from "./interfaces/IAddress"
import { IMovie } from "./interfaces/IMovie"
import IUser from "./interfaces/IUser"

// console.log(userListe)

const ichSuchNachKeys = Object.keys(userListe)

// forEach() => um irgendwas sehen zu können brauchen wir console.log() und kein return, da forEach() nichts returned und kein neues Array erstellt
// map() => um irgendwas zsehen zu können brauchen wir unbedingt return und console.log() ist optional
const allKeysInObj = userListe.map((user: IUser) => Object.keys(user))
// console.log(allKeysInObj)

// % Object.keys() Object.values() Object.entries()
// ? => Solche Methoden nutzen wir, sobald man ein Object in ein Array umwandeln möchte.

userListe.forEach((user: IUser) => {
  const divElement = document.createElement("div") as HTMLDivElement
  divElement.innerHTML = `<h3>Username: ${user.username}</h3>`
  const ObjToArray = Object.entries(user)
  // console.log(ObjToArray)
  ObjToArray.forEach(([key, value]: [string, string | IAddress | IMovie[]]) => {
    divElement.innerHTML += `<ul>
    <li>${key}: ${typeof value === "string" ? value : objToArrayFunction(value)}</li>
    </ul>`
    document.body.appendChild(divElement)
  })
})

function objToArrayFunction(valueParameter: IAddress | IMovie[]) {
  if (Array.isArray(valueParameter)) {
    const divMovieElement = document.createElement("div") as HTMLDivElement

    const newMovieArrayVariable = valueParameter.map((movie: IMovie) => {
      const myValue = (divMovieElement.innerHTML = `<h6>${movie.title}</h6>
      <p>${movie.rate}</p>`)
      return myValue
    })

    return newMovieArrayVariable.join("")
  }
  // return Object.entries(valueParameter)
}

const enumToArray = Object.entries(ColorPalette)

enumToArray.forEach(([key, value]: string[]) => {
  const btn = document.createElement("button") as HTMLButtonElement
  btn.textContent = key
  btn.style.backgroundColor = value
  document.body.appendChild(btn)
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = value
  })
})

// % static

const car1 = new Car("Tesla", "S")
const car2 = new Car("Porsche", "Panamera")

console.log(car1)
Car.howManyCars()

Car.updateOrder()

Car.isAvailable("LAMBORGHINI")
Car.isAvailable("FORD")
