import "./style.css"

function returnOne(): number {
  return 1
}

const x: number = 1
const y: number = returnOne()

if (x === y) {
  console.log("Wird das gedruckt?")
}
