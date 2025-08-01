import { eightiesHits } from "./eightiesHits"

// # LOOPS

// Wir möchten 5x Hello World in der Konsole ausgeben

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// ;[1, 2, 3, 4, 5].forEach(() => {
//   console.log("Hello World")
// })

// ~ WHILE LOOP
// Der Codeblock in while wird ausgeführt, solange die Bedingung wahr ist.
// Quasi wie ein sich wiederholendes "if"
// ! Das kann auch unendlich lang gehen

let i = 0

while (i < 5) {
  console.log("Hello World")
  i++
}

// Alle Elemente eines Arrays ausgeben:

// Zähler:
// let j = 0
// const arrayLength = eightiesHits.length

// while (j < arrayLength) {
//   const currentHit = eightiesHits[j]
//   console.log(currentHit)
//   j++
// }

// ~ FOR LOOP

// eightiesHits.forEach((hit) => console.log(hit))

for (let i = 0; i < eightiesHits.length; i++) {
  const currentHit = eightiesHits[i]
  console.log(currentHit)
}

// i++ vs ++i
// bei i++ ist der Rückgabewert der Wert vor der Inkrementierung, bei ++i der Nachher-Wert

// ? Alle Zahlen von 30 bis 0 durchzählen und alle ausgeben die durch 3 teilbar sind

for (let i = 30; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

// ? Wir wollen die Summe aller Zahlen von 0 bis einschließlich 100 bilden

let sum = 0

for (let i = 0; i <= 100; i++) {
  sum += i
}

console.log("Summe aller Werte von 0 bis 100:", sum)

// ? Wir wollen von 0 in 7er Schritten hochzählen und aus den Schritten einen Array bilden der 100 Elemente haben soll

let arrayWithSevenMultiples: number[] = []

for (let i = 0; arrayWithSevenMultiples.length < 100; i += 7) {
  arrayWithSevenMultiples.push(i)
}

console.log({ arrayWithSevenMultiples })

// ~ FOR ... OF LOOP
// Fühlt sich an wie ein Zwischending aus for und Arraymethode
// * For ... of geht nicht nur bei Arrays, sondern bei allen Iterables (also auch z.B. String, Set, Map, etc.)

for (const hit of eightiesHits) {
  console.log(hit.toUpperCase())
}

for (const character of "Hallo Kurs") {
  console.log(character, "🎉")
}

// ? Wir wollen rausfinden, ob es im EightiesHits Array einen Titel gibt der "Enjoy" enthält

eightiesHits.forEach((hit) => {
  console.log(hit)
  if (hit.charAt(0) !== "E") {
    console.log("Doesn't start with E")
    return // return in forEach verhält sich ähnlich wie continie in loops
  }
  if (hit.includes("Enjoy")) {
    console.log("HURRA GEFUNDEN!!!!!!")
  }
})

// ? BREAK    => Mit dem break-Statement können wir die Ausführung des Loops in dem wir sind beenden/abbrechen.
// ? CONTINUE => Mit dem continue-Statement brechen wir den aktuellen Durchlauf des Loops ab und gehen zum nächsten.

// for (const hit of eightiesHits) {
//   console.log(hit)
//   if (hit.charAt(0) !== "E") {
//     console.log("Doesn't start with E")
//     continue
//   }

//   console.log("Checking for 'Enjoy'...")
//   if (hit.includes("Enjoy")) {
//     console.log("HURRA GEFUNDEN!!!!!!")
//     break
//   }
// }

// # DO ... WHILE
// Bei do-while steht die Bedingung am Fuß der Struktur
// * Do While Schleifen werden in jedem Fall mindestens einmal ausgeführt, da die Bedingung hier erst am Ende gecheckt wird

let index = 10

do {
  console.log(index)
  index++
} while (index < 10)

// while (index < 10) {
//   console.log(index)
//   index++
// }
