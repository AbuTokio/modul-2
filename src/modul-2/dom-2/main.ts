import "../../style.css"

// ~ querySelector

// ? holt sich nur das erste Element das gefunden wird.
// ? Wir können hier die Elemente über die bekannte CSS Syntax "." für Klassen oder "#" für IDs finden.
// ? Oder mit "div" für div-Elemente.

// % Variante 1

// ? non-null assertion operator
// const containerElement = document.getElementById("container")!
// containerElement.innerHTML = "<p>Hello World</p>"

// % Variante 2

const containerElement = document.querySelector("#container") as HTMLDivElement
containerElement.innerHTML = "<p>Hello World</p>"

// % Variante 3

// ? Diese Variante funktioniert nur unter der Bedingung, dass man querySelector verwendet. Bei getElementById funktioniert es zum Beispiel nicht.
// const containerElementVarianteDrei = document.querySelector<HTMLDivElement>("#container")

// % Variante 4

// const containerElementVarianteVier: HTMLDivElement | null = document.querySelector("#container")

// ~ createElement

const paragraphElement = document.createElement("p") as HTMLParagraphElement
paragraphElement.textContent = "Was geeeeeeht ab"
containerElement.appendChild(paragraphElement)

// + Container 2

const container2 = document.getElementById("container2") as HTMLDivElement

const obstSalat: string[] = ["Kiwi", "Apfel", "Aprikose"]

const ungeordneteListeElement = document.createElement("ul") as HTMLUListElement

obstSalat.forEach((obst: string) => {
  const listElement = document.createElement("li") as HTMLLIElement
  listElement.style.color = "red"
  listElement.style.listStyle = "none"
  listElement.textContent = obst
  ungeordneteListeElement.appendChild(listElement)
})

container2.appendChild(ungeordneteListeElement)

const shoppingList = ["Gemüse", "Obst", "Snacks", ["Shampoo", "Seife", "Spüllung"]]

const myBtnElement = document.getElementById("show_myList") as HTMLButtonElement

myBtnElement.addEventListener("click", () => {
  const orderedListElement = document.createElement("ol") as HTMLOListElement
  orderedListElement.style.listStyle = "none"
  shoppingList.forEach((product: string | string[]) => {
    // debugger
    const liElement = document.createElement("li") as HTMLLIElement
    if (Array.isArray(product)) {
      const innerUnorderedList = document.createElement("ul") as HTMLUListElement
      innerUnorderedList.style.listStyle = "none"
      const innerLiElement = document.createElement("li") as HTMLLIElement
      innerLiElement.textContent = "DM"
      innerUnorderedList.appendChild(innerLiElement)
      product.forEach((innerProduct: string) => {
        const innerArrayLiElement = document.createElement("li") as HTMLLIElement
        innerArrayLiElement.textContent = innerProduct
        innerUnorderedList.appendChild(innerArrayLiElement)
      })
      liElement.appendChild(innerUnorderedList)
    } else {
      liElement.textContent = product
    }
    orderedListElement.appendChild(liElement)
  })

  document.body.appendChild(orderedListElement)
})

// ~ querSelectorAll
// ? Holt sich alle Elemente, auf die die Bedingung zutrifft.

// const allDivElements = document.querySelectorAll("div") as NodeList
// console.log(allDivElements)

const allLiElements = document.querySelectorAll<HTMLLIElement>("#testingArea li")
console.log(allLiElements)

allLiElements[1].style.color = "red"
allLiElements[0].textContent = "Ich bin das erste Kind."

allLiElements.forEach((element: HTMLLIElement, index: number) => {
  if (index % 2 === 0) {
    element.style.color = "red"
  } else {
    element.style.color = "green"
  }
})

const myImg = document.createElement("img") as HTMLImageElement
myImg.setAttribute("src", "https://picsum.photos/id/237/200/300")
myImg.setAttribute("alt", "Random Pic from Picsum")

const anchorElement = document.createElement("a") as HTMLAnchorElement
anchorElement.setAttribute("href", "https://www.google.com/")
anchorElement.setAttribute("target", "_blank")
anchorElement.textContent = "Go to Google"

document.body.appendChild(myImg)
document.body.appendChild(anchorElement)
