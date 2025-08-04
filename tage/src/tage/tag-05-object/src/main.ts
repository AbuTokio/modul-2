import "./style.css"

// # OBJECTS

// ? Wie schreibt man Obj?
// * Obj werden immer mit geschweiften Klammern geschrieben.
// * Sie bestehen aus Eigenschaften und deren Werte => Key und Values
// * Zuerst kommt der Name der Eigenschaft, dann ein Doppelpunkt und der Wert

const user = {
  vorName: "Joe",
  nachName: "Doe",
  age: 30,
  address: "Main Street",
}

console.log(user)

console.log("Vorname:", user.vorName)

user.vorName = "Lisa"

console.log("Vorname nach Referenz:", user.vorName)

// ! Eigenschaften eines Objects können auch Arrays oder weitere Objects sein

const user2 = {
  vorName: "Marc",
  nachName: "Mustermann",
  age: 42,
  beruf: "Trainer",
  address: {
    stadt: "Berlin",
    straße: "Musterstraße",
    plz: 10111,
  },
  hobbies: ["Soccer", "Tennis", "Piano"],
}

console.log(user2.nachName)
console.log(user2.address.straße)

// const user3 = {
//   username: "Malte"
// }

// % Type => Wir definieren uns einen eigenen Datentyp namens TMovie und legen die Pflichteigeschaften und Datentypen fest.

type TMovie = {
  title: string
  year: number
  mainCharacter: string
  categories: string[]
}

const movie1: TMovie = {
  title: "Deadpool",
  year: 2016,
  mainCharacter: "Wade Wilson / Deadpool",
  categories: ["Gun Fu", "Comedy", "Science-Fiction", "Action", "Superhero"],
}

console.log(movie1)

movie1.categories.push("Dark Humor")

const movie2: TMovie = {
  title: "Batman Begins",
  year: 2005,
  mainCharacter: "Batman",
  categories: ["Adventure", "Drama", "Fantasy"],
}

const movie3: TMovie = {
  title: "The Lord of the Rings: The Two Towers",
  year: 2002,
  mainCharacter: "Gollum",
  categories: ["Adventure", "Drama", "Fantasy"],
}

const movieCollection: TMovie[] = [movie1, movie2, movie3]

// ? Ich kann das Array von einem Object dann in einer Schleife durchlaufen lassen und jeweils einzelne Eigenschaften ausgeben

movieCollection.forEach((movie: TMovie) => {
  console.log(movie.title)
})

// ? Movies nach Erscheinungsjahr sortieren

movieCollection.sort((movieA: TMovie, movieB: TMovie) => {
  return movieA.year - movieB.year
})

console.log(movieCollection)

const movie4: TMovie = {
  title: "Hulk",
  year: 2010,
  mainCharacter: "Hulk",
  categories: ["Action", "Fantasy"],
}

movieCollection.push(movie4)

// for in ist für Obj zuständig

// Keys
// for (const key in movie4) {
//   console.log(key)
// }

// Values
// for (const key in movie4) {
//   console.log(movie4[key])
// }
// ! Achtung: Schreibweise ist nicht TS Konform. Dient nur zur Veranschaulichung.

// % Richtige Methode
// Keys
console.log(Object.keys(movie4))
// Values
console.log(Object.values(movie4))
