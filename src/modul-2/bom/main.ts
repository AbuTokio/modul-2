import "../../style.css"

// # BOM

// => Browser Object Model ist eine Schnittstelle, die vom Browser bereit gestellt wird.
// => Wir können in TS mit dem Browserfenster und den Browserdaten interagieren

// ~ Höhe und Breite
console.log("Aktuelle Bildschirmhöhe in PX", window.screen.height)
console.log("Aktuelle Bildschirmbreite in PX", window.screen.width)

// ~ verfügbare Bildschirmgröße
console.log("Verfügbare Bildschirmhöhe in PX", window.screen.availHeight)
console.log("Verfügbare Bildschirmbreite in PX", window.screen.availWidth)

// ~ Farbtiefe
console.log("Farbtiefe", window.screen.colorDepth)

// ~ Browserfenster - Höhe und Breite
console.log("Innere Höhe des Browserfensters", window.innerHeight)
console.log("Innere Breite des Browserfensters", window.innerWidth)

// ~ Eventlistener, wenn sich die Größe des Fensters ändert
window.addEventListener("resize", () => {
  console.log(`Fenstergröße wurde geändert auf ${window.innerWidth} ${window.innerHeight}`)
})

// ~ Info zur aktuellen URL
console.log("Gesamte URL:", window.location.href)
console.log("PORT", window.location.port)

// ~ Verlauf der Aufrufe
console.log("Länge der History", window.history.length)

// ~ Browsernavigation
document.getElementById("back-button")?.addEventListener("click", () => {
  window.history.back()
})

document.getElementById("reload-button")?.addEventListener("click", () => {
  window.location.reload()
})

document.getElementById("open-button")?.addEventListener("click", () => {
  window.open("https://www.super-code.de/", "_blank")
})

// ~ Browserinfo
console.log("Browserinfo", window.navigator.userAgent)

if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Du bist cool.")
}

// ~ Browsersprache
console.log("Browsersprache:", window.navigator.language)

if (window.navigator.language.startsWith("de")) {
  console.log("Ok, lass mal alles auf deutsch machen.")
}

// ~ normale oder klassiche Funktion
// function greetToUser(): void {

// }

// ~ Arrow function
const greetToUser = (): void => {
  const languageBrowser = window.navigator.language

  switch (languageBrowser) {
    case "de-DE":
      console.log("Hallo, guten Morgen!")
      break
    case "en-US":
      console.log("Hello, good morning!")
      break
    default:
      console.log("Irgendwas stimmt nicht.")
  }
}

greetToUser()

console.log("IsOnline", window.navigator.onLine)

// ~ Cookies
if (window.navigator.cookieEnabled) {
  console.log("Cookies sind aktiv!")
} else {
  console.log("Cookies wurden blockiert!")
}

document.cookie = "username=joedoe"

// # JSON.parse & JSON.stringify
// JSON ist ein leichtes Datenformat, welches hauptsächlich zum Austausch vopn Daten zwischen Server und Client verwendet wird.
// Kann leicht auch von verschiedenen Sprachen verarbeitet werden.
// % JSON => JavaScript Object Notation

// ~ JSON.stringify
// ? Nimmt ein JS-Object und wandelt es in einen JSON-String um.
const user = {
  email: "andre@mail.de",
  password: "123456789",
}
console.log(user)

// % Um im localStorage speichern zu können müssen wir das User Object unbedingt in das JSON Format umwandeln.
// => Dev Tools -> App / Application -> localStorage

const objToJson = JSON.stringify(user)
console.log(objToJson)

localStorage.setItem("currentUser", objToJson)

// ~ JSON.parse
// ? Zurück umwandeln in ein Object.
const userFromLocalStorage = localStorage.getItem("currentUser")
console.log(userFromLocalStorage)

if (userFromLocalStorage) {
  const stringToObj = JSON.parse(userFromLocalStorage)
  console.log(stringToObj)
}

const langSettings = {
  language: "German",
  subtitle: "English",
}

const myLanguage = "Deutsch"
localStorage.setItem("languageSettingEinfach", myLanguage)

const settingAsJSON = JSON.stringify(langSettings)
console.log(settingAsJSON)
localStorage.setItem("languageSettingMitObjStruktur", settingAsJSON)

// * Ice Cream Example
const iceCreamFlavorsArr = [
  {
    name: "Vanilla",
    price: 2.5,
    isPopular: true,
  },
  {
    name: "Chocolate",
    price: 3.0,
    isPopular: true,
  },
  {
    name: "Strawberry",
    price: 2.8,
    isPopular: false,
  },
  {
    name: "Mint Chocolate Chip",
    price: 3.2,
    isPopular: true,
  },
  {
    name: "Cookie Dough",
    price: 3.5,
    isPopular: false,
  },
]

console.log(iceCreamFlavorsArr)

const myArrayToJSON = JSON.stringify(iceCreamFlavorsArr)
console.log(myArrayToJSON)
localStorage.setItem("iceCreamSorten", myArrayToJSON)

// ~ try catch
// ? Für Fälle, in denen ich nicht genau weiß was zurückkommt, oder ob ein Fehler auftreten wird, arbeite ich mit dem try catch Block.
// ? Das wäre wie ein Sicherheitsnetz, in das ich meinen Code spanne.
// ? Sprich: Mit try catch können Codeabschnitte umschlossen werden, die potenziell fehlerhaften Code enthalten.

const myInput = document.getElementById("someIDa") as HTMLInputElement

try {
  console.log(myInput.value)
} catch (error) {
  // % V1
  console.error("Wir haben den Fehler abgefangen:", error)
  // % V2
  const errorMessage = (error as Error).message
  console.error(errorMessage)
  const myParagraph = document.createElement("p") as HTMLParagraphElement
  myParagraph.textContent = errorMessage
  document.body.appendChild(myParagraph)
}

// ~ throw new Error

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!")
  }
  return a / b
}

console.log(divide(10, 2))
console.log(divide(10, 0))
