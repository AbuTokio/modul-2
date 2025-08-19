import "../../../style.css"

// # In TS gibt es soganennte "Utility Types", die uns helfen bestehende types zu modifizieren ohne diese direkt zu verändern.

// * Partial
// * Requiered
// * Readonly
// * Pick
// * Omit
// * Record

type Person = {
  name: string
  age: number
  address?: string
}

const person1: Person = {
  name: "Joe",
  age: 20,
}

console.log(person1.name)

type Product = {
  id: number
  name: string
  desc: string
  price: number
}

// % Partial<T> => wandelt alle Eigenschaften eines Types in optionale Eigenschaften um.

// ⬇️ Diese Zeile ist optional.
// type PartialPerson = Partial<Person>

const person2: Partial<Person> = {
  name: "Alice",
}

console.log(person2.name)

// % Required<T> macht alle Eigenschaften eines Types zu Pflichtfeldern.

type RequiredPerson = Required<Person>

const person3: RequiredPerson = {
  name: "Bob",
  age: 20,
  address: "Musterstraße",
}

console.log(person3.name)

// % Readonly<T> macht alle Eigenschaften eines Types zu unveränderlichen Eigenschaften.

type readOnlyProduct = Readonly<Product>

const product1: readOnlyProduct = {
  id: 1,
  name: "PC",
  desc: "Gaming PC",
  price: 5000,
}

console.log(product1.id)

// Eine Zuweisung für "id" ist nicht mehr möglich, weil es sich um eine schreibgeschützte Eigenschaft handelt.
// ❌ product1.id = 2

// % Pick<T> erlaubt uns, nur bestimmte Eigenschaften eines Types auszusuchen oder zu extrahieren.

type PickProduct = Pick<Product, "id" | "name">

const product2: PickProduct = {
  id: 3,
  name: "Laptop",
}

console.log(product2.id)

// % Omit<T> macht genau das Gegenteil von Pick<T>. Es entfernt bestimmte Eigenschaften aus einem Type.

type ProductWithoutDescAnd = Omit<Product, "desc" | "price">

const product3: ProductWithoutDescAnd = {
  id: 4,
  name: "Handy",
}

console.log(product3.id)

// % Record<T> erstellt einen neuen Type, der ein Obj mit Schlüsseln vom Type K und Werten vom Type T beschreibt.

type PermissionLevel = "admin" | "editor" | "viewer"

type Permission = Record<PermissionLevel, string[]>

const userPermissionObj: Permission = {
  admin: ["create", "delete", "update"],
  editor: ["update", "view"],
  viewer: ["view"],
}

console.log(userPermissionObj.admin)

type Profil = {
  gehalt: number
  urlaub: boolean
}

type PermissionWithAnotherType = Record<PermissionLevel, Profil>

const employee: PermissionWithAnotherType = {
  admin: {
    gehalt: 5000,
    urlaub: true,
  },
  editor: {
    gehalt: 1000,
    urlaub: false,
  },
  viewer: {
    gehalt: 0,
    urlaub: false,
  },
}

console.log(employee.admin)

type CatName = "miffy" | "boris" | "mordred"

interface CatInfo {
  age: number
  breed: string
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
}

console.log(cats.mordred)

if (userPermissionObj.admin) {
  // Ab dueser Stelle kann man sowohl filter als auch find Methode benutzen.
  userPermissionObj.admin.filter((role: string) => {
    if (role === "create") {
      console.log("Du kannst was erstellen.")
    }
  })
}
