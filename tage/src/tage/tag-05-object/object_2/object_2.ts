import "./style.css"

// Registrierte Kunden

type TNewCustomer = {
  firstName: string
  lastName: string
  email: string
  mobilePhone?: string
}

const customer1: TNewCustomer = {
  firstName: "Franny",
  lastName: "Salinger",
  email: "f.salinger@gmail.de",
  mobilePhone: "0178 / 12340182",
}

const customer2: TNewCustomer = {
  firstName: "Malte",
  lastName: "Pfeiffer",
  email: "Malte@gmail.de",
}

// # OBJECT KOPIEREN

// const copyCustomer1: TNewCustomer = customer1
// console.log(copyCustomer1)
// ! So wird nicht korrekt kopiert.

// ~ V1: SPREAD OPERATOR

const realCopyCustomer1: TNewCustomer = { ...customer1 }

realCopyCustomer1.firstName = "Joe"

console.log(customer1)
console.log(realCopyCustomer1)

// ~ V2: OBJECT ASSIGN

const copyWithAssign = Object.assign({}, customer1)
console.log(copyWithAssign)

copyWithAssign.firstName = "Sunny"

console.log("Copy Customer:", copyWithAssign.firstName)
console.log("Customer1:", customer1.firstName)

const customer4: TNewCustomer = {
  firstName: "Jochen",
  lastName: "Schweitzer",
  email: "jochen@schweitzer.com",
}

const customerListe: TNewCustomer[] = [customer1, customer2, customer4]

customerListe.forEach((customer: TNewCustomer) => {
  if (customer.mobilePhone) {
    console.log(customer.mobilePhone)
  }
})

type TAppointment = {
  title: string
  date: Date
  isImportant: boolean
}

const footballTraining: TAppointment = {
  title: "Training Alte Herren",
  date: new Date(),
  isImportant: false,
}

const watchMovie: TAppointment = {
  title: "Planet der Affen anschauen",
  date: new Date(),
  isImportant: true,
}

const termine: TAppointment[] = [footballTraining, watchMovie]

termine.forEach((termin: TAppointment) => {
  console.log(termin.title)
})

// ? Datentyp in anderem Datentyp

type TArticle = {
  number: number
  name: string
  quantity: number
}

type TOrder = {
  id: string
  customerNumber: number
  articles: TArticle[]
}

const article1: TArticle = {
  number: 122,
  name: "Adidas Samba Größe 44",
  quantity: 1,
}

const article2: TArticle = {
  number: 100,
  name: "Nike Micheal Jordan Größe 50",
  quantity: 3,
}

const firstOrder: TOrder = {
  id: "AD21e31231",
  customerNumber: 2131231,
  articles: [article1, article2],
}

console.log(firstOrder.articles[0].name)
