function doHomework(studentName: string, timeInMilliseconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (timeInMilliseconds === 0) {
      reject("Homework duration must be greater than 0!")
    }
    setTimeout(() => {
      resolve(`${studentName} has finished homework!`)
    }, timeInMilliseconds)
  })
}

const aliceHomework = doHomework("Alice", 1000)
const joeHomework = doHomework("Joe", 2000)

console.log(aliceHomework)
console.log(joeHomework)

// ~ Lange Version - sich an alle Promises einzeln hängen
// aliceHomework
//   .then((lastMsg: string) => {
//     console.log(lastMsg)
//   })
//   .catch((err: string) => {
//     console.error(err)
//   })

Promise.all([aliceHomework, joeHomework])
  .then((results: string[]) => {
    // ? Hier landen wir, wenn alle Promises erfolgreich in resolve gegangen sind (bis auch der letzte fertig ist).
    // ? In results stehen die zwei Ergebnisse der Promises genau in der Reihenfolge.
    results.forEach((result: string) => {
      console.log(result)
    })
  })
  .catch((err: Error) => {
    console.error(err)
  })

type IceCream = {
  id: number
  name: string
  details?: string
  price: number
}

// local IceCream
const localIceCreams: IceCream[] = [
  { id: 1, name: "Vanilla", price: 2.0 },
  { id: 2, name: "Chocolate", price: 2.5 },
]

// Online IceCream
const onlineIceCreams: IceCream[] = [
  { id: 3, name: "Strawberry", price: 3.0 },
  { id: 4, name: "Mango", price: 2.5 },
]

const getLocalIceCream = (): Promise<IceCream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localIceCreams)
    }, 2000)
  })
}

const getOnlineIceCream = (): Promise<IceCream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(onlineIceCreams)
    }, 2000)
  })
}

Promise.all([getLocalIceCream(), getOnlineIceCream()])
  // % V1 => IceCream[][]
  // % V2 => [IceCream[], IceCream[]]
  .then((resp: IceCream[][]) => {
    console.log(resp)
    // ? resp ist ein Array von Arrays von IceCream Objects
    const [local, online] = resp
    console.log("Local IceCream: ", local)
    console.log("Online IceCream:", online)

    const allIceCream: IceCream[] = [...local, ...online]

    console.log(allIceCream)

    allIceCream.forEach((iceCream: IceCream) => {
      console.log(iceCream.price)
    })
  })
  .catch((err: string) => {
    console.error(err)
  })
