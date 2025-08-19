import "../../../style.css"

function reverseAndPrintString(myArray: string[]): void {
  const reversedArray: string[] = myArray.reverse()
  reversedArray.forEach((element: string) => console.log(element))
}

reverseAndPrintString(["Andre", "John", "Riya", "Rebecca"])

// reverseAndPrintString([22, 44, 100, 200])
// reverseAndPrintString([false, true, true, false])

// % Generics
// Die function braucht spitze Klammern - T steht für jeden beliebigen Datentyp.
// "T" muss ich dann überall innerhalb der function statt konkretem Type (wie string, number, etc.) verwenden.
// <T> ist eine Konvention bzw. Abmachung für generische Types. Wenn es um mehrere Types geht gibt es U, V und weitere.

function reverseAndPrintStringWithGenerics<T>(array: T[]): void {
  const reversedArray = array.reverse()
  reversedArray.forEach((el: T) => console.log(el))
}

reverseAndPrintStringWithGenerics<string | number>(["Andre", "John", "Riya", "Rebecca", 231, 3452])

reverseAndPrintStringWithGenerics<number>([22, 44, 100, 200])

reverseAndPrintStringWithGenerics<boolean>([false, true, true, false])
