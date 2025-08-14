import "../../style.css"

// * Unser Ziel ist es, dass wir uns alle Posts von 'https://jsonplaceholder.typicode.com/posts' abholen wollen

const API_URL = "https://jsonplaceholder.typicode.com/posts"

type TPost = {
  userId: number
  title: string
  id: number
  body: string
}

fetch(API_URL)
  .then((resp: Response) => {
    console.log(resp)
    if (!resp.ok) {
      console.error("Response does not work!")
    }
    // ? Nach resp bzw. response ist der nächste Schritt immer:
    // ? Die Response in ein echtes JavaScript Object umwandeln, indem man resp über die json() Methode im return zurückgibt.
    // ? ⬇️
    return resp.json()
  })
  .then((posts: TPost[]) => {
    // console.log(posts)
    posts.forEach((post: TPost) => {
      // console.log(post)
      const postObjToArray = Object.entries(post)
      // console.log(postObjToArray)
      postObjToArray.forEach(([key, value]: [string, string | number]) => {
        // console.log([key, value])
        if (key === "title" || key === "id") {
          const titleElement: HTMLParagraphElement = document.createElement("p")
          titleElement.textContent = `${key}: ${value.toString()}`
          document.body.appendChild(titleElement)
        }
      })
      // const titleElement: HTMLParagraphElement = document.createElement("p")
      // titleElement.textContent = post.title
      // document.body.appendChild(titleElement)
    })
  })
  .catch((error: Error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("Done with fetching the posts.")
  })
