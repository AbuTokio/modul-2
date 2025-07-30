import "./style.css"

function calculateAge(birthYear: number): number {
  const currentYear: number = new Date().getFullYear()
  const age: number = currentYear - birthYear
  return age
}

console.log(calculateAge(1996))

function compareAges(age1: number, age2: number): number {
  const altersDifferenz: number = Math.abs(age1 - age2)
  return altersDifferenz
}

const ageDifference = compareAges(25, 30)
console.log(ageDifference)
