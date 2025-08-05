import "../../../style.css"

// # UNDEFINED, NULL, ANY

// ~ UNDEFINED
// * Klassischer Fall: Variable wurde deklariert, aber es wurde ihr kein Wert zugewiesen.

// let sum20: number

// console.log(sum20)

// % Hinter dem undefined versteckt sich ein true/false
// if (sum20) {
//   console.log("Die Zahl wurde gefunden.")
// }

// * Weiterer Fall: Wenn eine function keinen expliziten Rückgabewert hat, gibt es uns undefined zurück.

// function myFunc() {}

// console.log(myFunc())

// * Ein letzter Fall: Der Zugriff auf nicht existente Eigenschaften eines Objects

// let myObj = {}

// console.log(myObj.username)

// * Mit Arrays

// type TPlantsSchema = {
//   name: string
//   color: string
// }

// const plants: TPlantsSchema[] = [
//   { name: "rose", color: "red" },
//   { name: "Ivy", color: "green" },
//   { name: "Lavander", color: "purple" },
// ]

// % Sobald ihr mit gesschweiften Klammern arbeitet, denkt bitte daran, dass ihr mit return arbeiten solltet.
// const ichSucheNachKaktus = plants.find((plant: TPlantsSchema) => {
//   return plant.name.includes("kaktus")
// })

// console.log(ichSucheNachKaktus)

// ~ NULL
// * Wenn etwas nicht vorhanden ist oder nicht existiert.

const myBtn = document.getElementById("mein-btn")
console.log(myBtn)

// ? undefined bedeutet in TS, dass eine Variable / ein Element bereits deklariert ist, aber ihr kein Wert zugewiesen wurde.
// ? null bedeutet, dass diese Variable / das Element gar nicht existiert

// ? Elvis Operator kann nur bei Zuweisung und Ausgaben verwendet werden. Kurz gesagt: Auf der rechten Seite.
const someText = myBtn?.innerText
console.log(someText)

type TMyUser = {
  id?: number
  name: string
  age?: number
}

// ? Man kann null verwenden, um eine Variable zuzuweisen, die später einen Objectwert erhalten soll.
let user: null | TMyUser = null

user = {
  name: "Joe",
  age: 20,
}

const userCollection: TMyUser[] = [
  { id: 1, name: "Andre" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Malte" },
]

function findUserById(id: number): TMyUser | null {
  for (let user of userCollection) {
    if (user.id === id) {
      return user
    }
  }
  // Kein User wurde gefunden, weil es nicht existiert.
  return null
}

const user2 = findUserById(10)

console.log(user2)

if (user2 === null) {
  console.log("Dieser User wurde nicht gefunden.")
}

// # ANY
// % Das sollte sehr sehr sehr selten verwendet werden!

// const iAmSomeThing: any = {
//   firstName: "Joe",
//   age: 20,
// }
