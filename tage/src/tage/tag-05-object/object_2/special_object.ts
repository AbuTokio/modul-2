import "./style.css"

const softdrinks: string[] = ["Cola", "Energy", "Ice Tea", "Sprudel", "Ice Tea"]

console.log(softdrinks.length)

// # SET METHODE
// Set verhält sich irgendwie wie ein Array, lässt aber nur eindeutige Werte zu.
// Dazu kommen einige Methoden, undzwar: add, size, usw.

const softdrinksWithSet = new Set<string>()

// ~ ADD
// Equivalent zu push
softdrinksWithSet.add("Cola")
softdrinksWithSet.add("Energy")
softdrinksWithSet.add("Ice Tea")

console.log(softdrinksWithSet)

// ! Kein Indexzugriff möglich
// console.log(softdrinksWithSet[0])

// ~ SIZE
// Equivalent zu length
console.log(softdrinksWithSet.size)

// ~ HAS
// Equivalent zu includes
if (softdrinksWithSet.has("Ice Tea")) {
  console.log("Es gibt Ice Tea auf der Karte")
}

const kostenMitSetMethode = new Set<number>()
kostenMitSetMethode.add(100)
kostenMitSetMethode.add(22)
kostenMitSetMethode.add(4)
kostenMitSetMethode.add(320)

console.log(kostenMitSetMethode)

// Es gibt eine kleine Gemeinsamkeit zwischen Array und Set Methode => forEach()

kostenMitSetMethode.forEach((number: number) => {
  console.log(number)
})

const setA = new Set([1, 3, 7])
const setB = new Set([3, 6, 9])

const union = new Set([...setA, ...setB])
// ! Set ist eine super Möglichkeit, um doppelte Werte in einem Array zu entfernen
console.log(union)

const clearSoftdrinksVariable = new Set(softdrinks)
console.log(clearSoftdrinksVariable)

// % V1
const meinArryVonSoftdrinksSet = [...clearSoftdrinksVariable]
// console.log(meinArryVonSoftdrinks)

// % V2
const meinArryVonSoftdrinksSetVarianteZwei = Array.from(clearSoftdrinksVariable)
console.log(meinArryVonSoftdrinksSetVarianteZwei)

// # MAP METHODE
// Map ist ein spezielles Object, dass man wie ein Nachschlagewerk sehen kann

// Wenn ich mit Map arbeite, dann soll ich deren Methoden dementsprechend benutzen
// => set, get
const germanEnglishDictionary = new Map<string, string>()

// % BEISPIEL 1
// ~ SET
germanEnglishDictionary.set("Tier", "Animal")
germanEnglishDictionary.set("froh", "happy")
germanEnglishDictionary.set("Montag", "Monday")
console.log(germanEnglishDictionary)

germanEnglishDictionary.forEach((value, key) => {
  console.log(`${key} heißt übersetzt ${value}.`)
})

// ~ GET
console.log(germanEnglishDictionary.get("Tier"))

// % BEISPIEL 2

const italianMenu = new Map<number, string>()
console.log(italianMenu)
italianMenu.set(20.0, "Pizza Margherita")
italianMenu.set(14.0, "Pizza Funghi")
italianMenu.set(7.0, "Bruscetta")

console.log(italianMenu)

console.log(italianMenu.get(14.0))

// % BEISPIEL 3

const iceMenu = new Map<number, string>()
iceMenu.set(10, "Himbeere")
iceMenu.set(11, "Erdbeere")
iceMenu.set(12, "Mandel")

console.log(iceMenu)

// % BEISPIEL 4

const iceMenu2 = new Map<number, string>()
//
const flavors = ["Himbeere", "Erdbeere", "Mandel"]

flavors.forEach((flavor, index) => {
  iceMenu2.set(index, flavor)
})

console.log(iceMenu2)

// # TUPLE
// Eingeschränktes Array mit verschiedenen Datentypen

const customer5: [string, number, number] = ["Annie", 22, 1.73]

customer5[0] = "Lisa"
customer5[1] = 21314

type TSimplePerson = {
  name: string
  age: number
  height: number
}

const person: TSimplePerson = {
  name: "Annie",
  age: 22,
  height: 1.73,
}

console.log(person)
