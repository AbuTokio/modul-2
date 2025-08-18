import "../../style.css"

// % Promise

// ? Promise ist wie ein Versprechen und hat entweder gute oder schlechte Nachrichten.
// ? Sie ist im Grunde genommen eine Klasse bzw. eine Art von Object.
// ? Um mit Promise arbeiten zu können benötigt man eine neue Instanz.
// ? Die Instanzen können sowohl als Variable, als auch als Function deklariert werden.

// ? Die Promise FFunctions haben zwei Hauptstände:
// ? fulfilled => (erfüllt) Das Promise wurde erfolgreich erfüllt.
// ? rejected => (abgelehnt) Das Promise wurde nicht erfolgreich erfüllt.
// ? pending => (ausstehend) Das Promise braucht noch Zeit bevor es erfüllt oder abgelehnt wird.

// ? Wo Promise genutzt wird:
// ? Beim Daten laden (API-Abfragen)

// ~ V1 Variable
// new Promise benötigt eine Callback function, die Callback function erwartet immer 2 Argumente: resolve & reject

let myPromise = new Promise((resolve, reject) => {
  let server: boolean = true

  if (server) {
    resolve("Die Operation war erfolgreich!")
  } else {
    reject("Es gab ein Problem!")
  }
})

console.log(myPromise)

// % resolve ist mit then befreundet
// % reject ist mit catch befreundet

// myPromise
//   .then((resp) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => {
//     console.error(err)
//   })
//   .finally(() => {
//     console.log("Alles ist supi dupi!")
//   })

// ~ V2 Function

function loadData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let server: boolean = false

      if (server) {
        resolve("Daten erolgreich geladen!")
      } else {
        reject("Fehler beim Laden der Daten!")
      }
    }, 3000)
  })
}

console.log(loadData())

// loadData()
//   .then((resp: string) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => {
//     console.error(err)
//   })

// ~ V3 Function

function firstStep(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success: boolean = true

      if (success) {
        console.log("Erster Schritt ist abgeschlossen!")
        resolve()
      }
    }, 1000)
  })
}

function secondStep(): Promise<void | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = false

      if (success) {
        console.log("Zweiter Schritt ist abgeschlossen!")
        resolve()
      } else {
        reject("Fehler im zweiten Schritt!")
      }
    }, 1200)
  })
}

function thirdStep(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

firstStep()
  .then(() =>
    secondStep().then(() =>
      thirdStep().then(() => {
        console.log("Alle Schritte sind erfolgreich abgeschlossen")
      })
    )
  )
  .catch((err: Error) => console.error(err))

// ~ V4 Variable

const dogAgePromise: Promise<number> = new Promise((resolve, reject) => {
  const randomAge = Math.floor(Math.random() * 30)
  if (randomAge) {
    resolve(randomAge)
  } else {
    reject("No dog age available!")
  }
})

dogAgePromise
  .then((resp: number) => {
    console.log(resp)
    const myRespToString = resp.toString()
    return myRespToString
  })
  .then((newVariable: string) => {
    console.log(newVariable)
  })
  .catch((err: Error) => {
    console.error(err)
  })
