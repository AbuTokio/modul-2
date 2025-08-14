import "../../style.css"

// % URL_LINK = https://api.chucknorris.io/jokes/random

type TJoke = {
  icon_url: string
  id: string
  url: string
  value: string
}

const jokeOutput = document.getElementById("joke-output") as HTMLParagraphElement
const myJokeBtn = document.getElementById("joke-button") as HTMLButtonElement

const URL_JOKE_API: string = "https://api.chucknorris.io/jokes/random"

myJokeBtn.addEventListener("click", () => {
  fetch(URL_JOKE_API)
    .then((response: Response) => {
      // Ohne diesen Schritt können wir nicht weitermachen
      return response.json()
    })
    .then((joke: TJoke) => {
      console.log(joke)
      const imgElement = document.createElement("img") as HTMLImageElement
      imgElement.src = joke.icon_url
      jokeOutput.textContent = joke.value
      document.body.appendChild(imgElement)
    })
})
