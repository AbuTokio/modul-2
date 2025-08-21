import "../../style.css"
import "./style.css"
import type { Character, Characters } from "./interfaces/Character"
import type { Episode, Episodes } from "./interfaces/Episode"
import type { Location, Locations } from "./interfaces/Location"

const BASE_URL = "https://rickandmortyapi.com/api"
const CHARACTER_URL = `${BASE_URL}/character`
const LOCATION_URL = `${BASE_URL}/location`
const EPISODE_URL = `${BASE_URL}/episode`

// ~ Elemente vor dem Aufbau abholen

const elements = {
  output: document.getElementById("output") as HTMLDivElement,
  character: document.getElementById("api-character") as HTMLAnchorElement,
  location: document.getElementById("api-location") as HTMLAnchorElement,
  episode: document.getElementById("api-episode") as HTMLAnchorElement,
  pages: {
    last: document.getElementById("last-page") as HTMLButtonElement,
    next: document.getElementById("next-page") as HTMLButtonElement,
  },
}

let currentPageUrl: string = CHARACTER_URL

elements.pages.next.addEventListener("click", async () => {
  elements.output.innerHTML = ""
  try {
    const resp = await fetch(currentPageUrl)
    const { info, results } = (await resp.json()) as Characters

    results.forEach(async (result: Character) => {
      const characterContainer = document.createElement("div") as HTMLDivElement
      characterContainer.innerHTML = await displayCharacter(result)
      elements.output.appendChild(characterContainer)
    })

    if (info.next) {
      currentPageUrl = info.next
    }
  } catch (error) {
    console.error(error)
  }
})

elements.character.addEventListener("click", async () => {
  elements.output.innerHTML = ""
  try {
    const resp = await fetch(CHARACTER_URL)
    if (resp.status === 200 && resp.ok) {
      // console.log(resp)

      // % V1
      // const data: Characters = await resp.json()
      // % V2
      const { results } = (await resp.json()) as Characters

      results.forEach(async (result: Character) => {
        const characterContainer = document.createElement("div") as HTMLDivElement
        characterContainer.innerHTML = await displayCharacter(result)
        elements.output.appendChild(characterContainer)
      })
    }
  } catch (error) {
    console.error(error)
  }
})

async function displayCharacter(character: Character): Promise<string> {
  const resultAsString = `
  <div class="flex flex-col justify-between align-sub">
    <p class="text-red-600 font-bold">Name: ${character.name}</p>
    <p>Status: ${character.status}</p>
    <p>Gender: ${character.gender}</p>
    <p>Origin: ${character.origin?.name}</p>
    <p>Location: ${character.location?.name}</p>
    <img src="${character.image}" alt="${character.name}" />
  </div>
  `
  return resultAsString
}

elements.location.addEventListener("click", async () => {
  elements.output.innerHTML = ""
  try {
    const resp = await fetch(LOCATION_URL)
    const { results } = (await resp.json()) as Locations

    for (let result of results) {
      const locationContainer = document.createElement("div") as HTMLDivElement
      locationContainer.innerHTML = await displayLocation(result)
      elements.output.appendChild(locationContainer)
    }
  } catch (error) {
    console.error(error)
  }
})

async function displayLocation(location: Location): Promise<string> {
  const residents = await fetchCharacters(location.residents)
  const resultAsString = `
  <p>Name: ${location.name}</p>
  <p>Residents: ${residents}</p>
  `
  return resultAsString
}

async function fetchCharacters(characters: string[]): Promise<string> {
  const characterArray: string[] = []
  for (let residentUrl of characters) {
    try {
      const resp = await fetch(residentUrl)
      const character: Character = await resp.json()
      if (character.name) characterArray.push(character.name)
    } catch (error) {
      console.error(error)
    }
  }

  return characterArray.join(", ")
}

elements.episode.addEventListener("click", async () => {
  elements.output.innerHTML = ""
  try {
    const resp = await fetch(EPISODE_URL)
    const episodes = (await resp.json()) as Episodes

    await Promise.all(
      episodes.results.map(async (result: Episode) => {
        const episodeContainer = document.createElement("div") as HTMLDivElement
        episodeContainer.innerHTML = await displayEpisode(result)
        elements.output.appendChild(episodeContainer)
      })
    )
  } catch (error) {
    console.error(error)
  }
})

async function displayEpisode(episode: Episode): Promise<string> {
  const characters = await fetchCharacters(episode.characters)
  const resultAsString = `
  <div>
    <p>Name: ${episode.name}</p>
    <p>Characters: ${characters}</p>
  </div>
  `
  return resultAsString
}
