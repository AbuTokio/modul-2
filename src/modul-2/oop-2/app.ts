import "../../style.css"
import Dog from "./classes/Dog"

const myDog = new Dog("sunny", 100, "Joe Doe", "2024.06.02")
// myDog.age = 20;

console.log(myDog.dogInGerman)

console.log(myDog.age)

console.log(myDog.name)

console.log(myDog)

const myInputElement = document.getElementById("myInput") as HTMLInputElement

document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault()
  myDog.name = myInputElement.value
  console.log(myDog)
})
