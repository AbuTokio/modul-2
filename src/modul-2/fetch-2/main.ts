import "../../style.css"
import { IHead, IHouse, ITrait } from "./interfaces/IHouse"
import { ISpell } from "./interfaces/ISpell"

// * Immer am Anfang, wenn ich die Schnittstelle aufrufe und mehrere Endpunkte/Routen habe, die URLs am besten festlegen
// * BaseURL ist die Basis URL, ohne Route

const API_BASE_URL: string = "https://wizard-world-api.herokuapp.com"
const API_HOUSES_URL: string = `${API_BASE_URL}/Houses`
const API_SPELLS_URL: string = `${API_BASE_URL}/Spells`

const htmlElements = {
  links: {
    houses: document.getElementById("nav-houses") as HTMLAnchorElement,
    spells: document.getElementById("nav-spells") as HTMLAnchorElement,
  },
  contentDiv: document.getElementById("content") as HTMLDivElement,
}

htmlElements.links.houses.addEventListener("click", () => {
  // console.log("houses clicked")
  fetchAndDisplay(API_HOUSES_URL, "Houses")
})

htmlElements.links.spells.addEventListener("click", () => {
  // console.log("spells clicked")
  fetchAndDisplay(API_SPELLS_URL, "Spells")
})

function fetchAndDisplay(url: string, routeName: string) {
  fetch(url)
    .then((resp: Response) => {
      // console.log(resp)
      return resp.json()
    })
    .then((data: IHouse[] | ISpell[]) => {
      if (routeName === "Houses") {
        const houses = data as IHouse[]
        htmlElements.contentDiv.innerHTML = createHousesList(houses)
        // console.log(houses)
      } else if (routeName === "Spells") {
        const spells = data as ISpell[]
        htmlElements.contentDiv.innerHTML = createSpellsList(spells)
        // console.log(spells)
      }
    })
    .catch((error: Error) => {
      console.error(error)
    })
}

function createHousesList(houses: IHouse[]): string {
  const resultAsString: string[] = houses.map((house: IHouse) => {
    // console.log(house)
    return `
    <div>
      <p>Id: ${house.id}</p>
      <p>Name: ${house.name}</p>  
      <p>House Colours: ${house.houseColours}</p>
      <p>Founder: ${house.founder}</p>
      <p>Animal: ${house.animal}</p>
      <p>Element: ${house.element}</p>
      <p>Ghost: ${house.ghost}</p>
      <p>CommonRoom: ${house.commonRoom}</p>
      <p>Heads: ${house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`).join(", ")}</p>
      <p>Traits: ${house.traits.map((trait: ITrait) => `${trait.name}`).join(", ")}</p>
    </div>
    `
  })
  // console.log(resultAsString.join(""))
  return `<main>${resultAsString.join("")}</main>`
}

const createSpellsList = (spells: ISpell[]): string => {
  const resultAsString: string[] = spells.map((spell: ISpell) => {
    return `
    <li>
      <p>Id: ${spell.id}</p>
      <p>Name: ${spell.name}</p>
      <p>Incantation: ${spell.incantation}</p>
      <p>Effect: ${spell.effect}</p>
      <p>Type: ${spell.type}</p>
    </li>
    `
  })
  return `<ul>${resultAsString.join("")}</ul>`
}
