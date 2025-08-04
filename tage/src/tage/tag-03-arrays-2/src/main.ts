import "./style.css"

// # HIGHER ORDER FUNCTIONS

const beispielArray = [
  "Beerenkonfitüre",
  "blaubeeren",
  "Erdbeeren",
  "kartoffeln",
  "schlagsahne",
  "kichererbsen",
  "Kartoffelpüree",
  "eis",
]
const beispielNumberArray = [-10, 1, 3, -9, 3, 2, 7, 5]

//* Higher Order Functions
// Bedeutet: Funktionen die als Parameter andere Funktionen erhalten

// ~ .forEach
// Wir koennen forEach auf jedem Array aufrufen, und ihm eine Funktion als Argument übergeben
// Diese Funktion wird dann für jedes Element im Array aufgerufen

const meinCallbackFuerForEach = function (element: string, index: number) {
  console.log({ element, index })
}

beispielArray.forEach(meinCallbackFuerForEach)

//* Falls wir die Callbackfunktion inline definieren, sind keine expliziten Typ-Annotationen nötig.
// beispielArray.forEach(function (element, index) {
//     console.log({element, index})
// });

//* Foreach hat keinen Rückgabewert.
//* Um Dennoch Ergebnis außerhalb zu speichern, können wir externe variablen definieren

const bigBeispielArray: string[] = []
beispielArray.forEach((element) => {
  bigBeispielArray.push(element.toUpperCase())
  console.log(bigBeispielArray)
})

console.log(bigBeispielArray)

// ~ .includes
// includes gibt true/false zurück, je nachdem ob das Argument im Array vorliegt.

console.log("includes: himbeeren", beispielArray.includes("himbeeren"))
console.log("includes: blaubeeren", beispielArray.includes("blaubeeren"))

// ~ .indexOf
// ! .indexOf gibt den Index zurück falls das Element vorhanden ist, sonst -1

console.log("indexOf kartoffeln:", beispielArray.indexOf("kartoffeln")) // 2, da index von kartoffel 2 ist
console.log("indexOf salami:", beispielArray.indexOf("salami"))

if (beispielArray.indexOf("salami") !== -1) {
  console.log("Viel Spaß beim Essen der Salami")
}

if (beispielArray.includes("blaubeeren")) {
  console.log("Viel Spaß beim Essen der Blaubeeren")
}

// ~ .find
// .find gibt uns das erste Element des Arrays zurück, bei dem die übergebene Callbackfunktion "true" ergibt.

// Wir wollen ein Element mit mindestens 12 Zeichen finden
const findResult = beispielArray.find(function (value) {
  return value.length >= 12
})

const findResult2 = beispielArray.find(function (value) {
  return value.toLowerCase().includes("beere")
})

console.log({ findResult })

console.log({ findResult2 })

// ~ .findIndex
// => Das gleiche, gibt aber den Index zurück.

const findIndexResult = beispielArray.findIndex(function (value) {
  return value.toLowerCase().includes("beere")
})

console.log({ findIndexResult })

// ~ .filter

const filteredArray = beispielArray.filter(function (value) {
  return value.toLowerCase().includes("beere")
})

console.log({ filteredArray })

const filteredNumbers = beispielNumberArray.filter((value) => value >= 0)

console.dir({ filteredNumbers })

// ~ .sort
// .sort sortiert entweder alphabetisch, oder mit Hilfe einer übergebenen Vergleichsfunktion
// Diese kriegt Elemente a und b übergeben und soll ein negatives Ergebnis liefern, wenn a kleiner ist als b, etc.

const unsortedNumbers = [1, 33, 20, 4, 19, 29, 7, 10, 999]

console.log(unsortedNumbers.sort()) // => [1, 10, 19, 20, 29, 33, 4, 7, 999]
// ! Problem: per default wird alles alphabetisch sortiert, auch Zahlen

// So kann z.B. numerisch sortiert werden:
console.log(unsortedNumbers.sort((a, b) => a - b))
// So absteigend:
console.log(unsortedNumbers.sort((a, b) => b - a))
// So nach Zahl der Ziffern:
console.log(unsortedNumbers.sort((a, b) => a.toString().length - b.toString().length))
// So nach Anzahl der Zeichen:
console.log(beispielArray.sort((a, b) => a.length - b.length))

// ~ .map
// .map ist eine Arraymethode die einen Array in einen Array mit transformierten Elementen verwandeln kann

const resultArray = beispielArray.map((element) => element.toUpperCase())

console.log({ resultArray })

// Alle quadrieren:
const squaredNumbers = beispielNumberArray.map((element) => element * element) // es gibt sonst auch Math.pow(element, 2)
console.log({ squaredNumbers })

// Alle quadrieren und filtern, sodass maximal 99 groß:
const squaredAndFilteredNumbers = beispielNumberArray.map((element) => element * element).filter((value) => value < 100)
console.log({ squaredAndFilteredNumbers })

// const beispielArray = [
// "Beerenkonfitüre",
//   "blaubeeren 🫐",
//   "erdbeeren 🍓",
//   "kartoffeln 🥔",
//   "schlagsahne",
//   "kichererbsen",
//   "eis 🍦"
// ];

const arrayWithEmojis = beispielArray.map((value) => {
  const lowerCaseValue = value.toLowerCase()
  if (lowerCaseValue.includes("blaubeer")) {
    return value + " 🫐"
  } else if (lowerCaseValue.includes("erdbeer")) {
    return value + " 🍓"
  } else if (lowerCaseValue.includes("kartoffel")) {
    return value + " 🥔"
  } else if (lowerCaseValue.includes("eis")) {
    return value + " 🍦"
  } else {
    return value
  }
})

console.log(arrayWithEmojis)

// ~ Mehrdimensionale Arrays
const shoppingLists = [
  ["Eis", "Kartoffeln", "Kekse"],
  ["Hundefutter", "Socken", "Schokolade", "Klopapier"],
  ["Wasser", "Cola", "Energy"],
]

console.log(shoppingLists)

// Zugriff auf das zweite Element im ersten Unterarray
console.log(shoppingLists[0][1])

// Sortieren nach Länge
console.log(shoppingLists.sort((a, b) => a.length - b.length))

console.log(
  shoppingLists
    .flat()
    .sort()
    .map((value) => value.toUpperCase())
)
