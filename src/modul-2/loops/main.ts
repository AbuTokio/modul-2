import "../../style.css"

// querySelector<HTMLInputElement> - Hiermit können wir TS mitteilen welches Element wir erwarten
const arrayInput = document.querySelector<HTMLInputElement>("#array-input")
const buttonElement = document.querySelector<HTMLButtonElement>("#button")

// const inputValue = arrayInput ? arrayInput.value : undefined
// * mit dem Optional Chaining Operator (?.) können wir auf properties von Werten zugreifen, die vielleicht nicht vorhanden sind.
// * Falls sie nicht vorhanden sind, ist das Ergebnis undefined.
// const inputValue = arrayInput?.value

buttonElement?.addEventListener("click", function buttonCallback() {
  if (arrayInput) {
    const array: number[] = JSON.parse(arrayInput.value)
    let sorted

    do {
      sorted = 0
      // wir iterieren einmal ueber den array, hoeren dabei aber ein element frueher auf als sonst,
      // da wir immer zwei benachbarte elemente vergleichen wollen, und sonst uebers ziel hinausschiessen wuerden.
      for (let i = 0; i < array.length - 1; i++) {
        const a = array[i]
        const b = array[i + 1]

        if (a > b) {
          array[i + 1] = a
          array[i] = b
          sorted++
        }
      }
      // etwas sortierten array zurück in input schreiben:
      arrayInput.value = JSON.stringify(array)
    } while (sorted != 1)
    console.log(array)
  }
})
