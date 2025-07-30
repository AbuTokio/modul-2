import "./style.css"
import { setupCounter } from "./counter.ts"

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)

// # FUNKTIONEN

// * Deklarierte Funktionen dürfen auch in Zeilen vor ihrer Deklaration aufgerufen werden.
// * Das nennt sich "Hoisting" (auf deutsch: hissen)
printMessages()

// * Funktionsdeklaration, da mit function Keyword am Anfang der Zeile definiert.
function printMessages(): void {
  // * Dinge, die während Funktionsausführung passieren und mit der Außenwelt interagieren.
  // * => Seiteneffekte / Side effects
  console.log("Guten Morgen")
  console.log("Guten Mittag")
  console.log("Guten Abend")
}

printMessages()

// * So in reinem JS:
// function addTwenty(num) {
//   return num + 20
// }

// * So in TS, mit Typ für Parameter und Ergebnis
function addTwenty(num: number): number {
  // * return muss zwingend einen Wert vom Typ number zurückgeben
  return num + 20
}

console.log(addTwenty(20)) // hier soll 40 rauskommen
console.log(addTwenty(100)) // hier soll 120 rauskommen

// # FUNKTIONEN MIT OPTIONALEN PARAMETERN

// ~ MIT DEFAULTWERT

// Soll bis zu 5 Zahlen addieren
// * Mit dem Gleichzeichen (=) nach dem Parametertyp können wir einen default Wert für diesen Parameter festlegen.
// * In diesem Beispiel hier: werden Zahlen nicht übergeben, werden sie gleich null gesetzt.
function addABunchOfNumbers(num1: number, num2: number = 0, num3: number = 0, num4: number = 0, num5: number = 0) {
  return num1 + num2 + num3 + num4 + num5
}

console.log(addABunchOfNumbers(10)) // -> 10
console.log(addABunchOfNumbers(10, 30, 20)) // -> 60
console.log(addABunchOfNumbers(10, 30, 20, 5, 1)) // -> 66

// ~ MIT ?

// Mit ? können wir ausdrücken, dass ein bestimmter Wert nicht übergeben werden muss.
// Er darf also undefined sein.
// Das "wirkt" nur bei den Parametern am Ende der Parameterliste.
function getGreetingMessage(name: string, customGreeting?: string): string {
  const greeting = customGreeting || "Hallo"
  return greeting + " " + name
}

console.log(getGreetingMessage("John")) // "Hallo John"
console.log(getGreetingMessage("John", "Guten Abend")) // "Guten Abend John"

// # FUNCTION EXPRESSIONS

// ! Hoisting funktioniert nur mit Funktionsdeklarationen
// console.log(getMehrwertsteuer(200, 7)) // 14

// Neben Funktionsdeklarationen gibt es auch function expressions (deutsch: Funktionsausdruck)
const getMehrwertsteuer = function (wert: number, steuerSatz: number = 19): number {
  return (wert / 100) * steuerSatz
}

console.log(getMehrwertsteuer(200, 7)) // 14
console.log(getMehrwertsteuer(200)) // 38

// # SCOPE

const steuerSatzMarried = 0.3
const steuerSatzUnmarried = 0.35

function calculateEinkommenssteuer(einkommen: number, isMarried: boolean): number {
  let steuerSatz: number

  if (isMarried) {
    // ? Wir sind hier in einem Codeblock, der ein Child-Scope von calculateEinkommenssteuer ist.
    // ? Haben also Zugriff auf Variablen, die dort definiert wurden.
    steuerSatz = steuerSatzMarried
  } else {
    steuerSatz = steuerSatzUnmarried
  }

  return einkommen * steuerSatz
}

// ! Das hier geht nicht, da steuerSatz im Scope der Funktion definiert wurde.
// console.log(steuerSatz)

console.log("Steuern für 30.000, unverheiratet:", calculateEinkommenssteuer(30000, false))
console.log("Steuern für 40.000, verheiratet:", calculateEinkommenssteuer(40000, true))

// # (ES6) ARROW FUNCTIONS

// ~ Arrow Function
const addThirty = (num: number) => {
  return num + 30
}

console.log(addThirty(10))

// ~ Arrow Function mit implizitem Return
const addVierzig = (num: number) => num + 40

console.log(addVierzig(10))
