import "../../style.css"

const BASE_URL: string = "https://jsonplaceholder.typicode.com"
const USER_URL: string = `${BASE_URL}/users`
const POST_URL: string = `${BASE_URL}/posts`

interface User {
  id: number
  name: string
  username: string
  email: string
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

// function myFetchFunction(): Promise<string> {
//   return new Promise((resolve, reject) => {

//   })
// }

async function fetchJson<T>(url: string): Promise<T> {
  const resp: Response = await fetch(url)
  if (!resp.ok) {
    throw new Error(`HTTP-Error: ${resp.status} ${resp.statusText}`)
  }
  return resp.json() as Promise<T>
}

async function getUsers(): Promise<User[]> {
  const users: User[] = await fetchJson<User[]>(USER_URL)
  return users
}

async function getPosts(): Promise<Post[]> {
  const posts: Post[] = await fetchJson<Post[]>(POST_URL)
  return posts
}

async function getPostsByUser(userId: number, posts: Post[]): Promise<Post[]> {
  return posts.filter((post: Post) => post.userId === userId)
}

async function giveMePostsAndUsers(): Promise<void> {
  try {
    // Hier schmeißen wir alle unsere Promise functions in einen Topf (array), damit wir die einzelnen Promises nicht hängen lassen.
    const usersAndPosts = await Promise.all([getPosts(), getUsers()])
    // console.log(usersAndPosts)

    // % V1
    // const posts = usersAndPosts[0]
    // const users = usersAndPosts[1]

    // % V2
    const [posts, users] = usersAndPosts

    users.forEach(async (user: User) => {
      // console.log(user)
      const myResult = await getPostsByUser(user.id, posts)
      console.log(myResult)
    })
  } catch (error) {
    console.error(error)
  }
}

// giveMePostsAndUsers()

async function doTasks(name: string, duration: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task wurde durch ${name} nach ${duration}ms erledigt.`)
    }, duration)
  })
}

doTasks("John", 20000).then

async function runParallelTasks(): Promise<void> {
  const tasks = [doTasks("Joe", 1000), doTasks("Alice", 2000), doTasks("Andre", 4000)]

  const taskArray = await Promise.all(tasks)
  taskArray.forEach((task) => console.log(task))
}

async function mainFunction() {
  await giveMePostsAndUsers()
  await runParallelTasks()
}

mainFunction()
