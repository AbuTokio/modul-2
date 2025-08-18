import "./style.css"

const shoePromise: Promise<string[]> = new Promise((resolve, reject) => {
  let ourShoeServer: boolean = true
  const shoes: string[] = ["Black High Heels", "Adidas Samba", "Green Crocs", "Nike Air Max", "Red Converse"]

  setTimeout(() => {
    if (ourShoeServer) {
      resolve(shoes)
    } else {
      reject("Sorry. No shoes available!")
    }
  }, 5000)
})

// ? Elemente aus HTML abholen

const htmlElements = {
  orderButton: document.getElementById("order-button") as HTMLButtonElement,
  shoeOutput: document.getElementById("shoe-output") as HTMLDivElement,
  loader: document.getElementById("loading") as HTMLDivElement,
}

if (htmlElements.orderButton && htmlElements.shoeOutput && htmlElements.loader) {
  htmlElements.orderButton.addEventListener("click", () => {
    // ? Ladeanzeige anzeigen, weil es vorher auf "display: none" ist.
    htmlElements.loader.style.display = "block"
    shoePromise
      .then((shoes: string[]) => {
        // ? Schuhe anzeigen lassen
        // ? Hier in shoes steckt das Ergebnis, das oben bei resolve mitgegeben wurde.
        shoes.forEach((shoe: string) => {
          const shoeElement = document.createElement("p") as HTMLParagraphElement
          shoeElement.innerText = shoe
          htmlElements.shoeOutput.appendChild(shoeElement)
        })
      })
      .catch((err: string) => {
        const errorParagraph = document.createElement("p") as HTMLParagraphElement
        errorParagraph.innerText = err
        htmlElements.shoeOutput.appendChild(errorParagraph)
      })
      .finally(() => {
        htmlElements.loader.style.display = "none"
      })
  })
}
