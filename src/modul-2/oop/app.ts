import "../../style.css"
import Bauplan from "./classes/Bauplan"
import Owner from "./classes/Owner"
import Rooms from "./classes/Rooms"
import { RoomType } from "./enums/RoomType"

// OOP => Objektorientierte Programmierung
// * OOP ist ein Programmierstil, bei dem die Software in Objekte unterteilt wird.
// * Diese Objekte sind Instanzen von Klassen, die als Blauplausen/Vorlagen für Objekte dienen.
// * Jedes Objekt kann Daten wie Eigenschaften speichern und bestimmte Aktionen ausführen (Methoden).

// type TBauplan = {
//   _besitzer: string
//   tiefGarage: boolean
// }

// const haus_1: Bauplan = {
//   _besitzer: "Joe",
//   tiefGarage: true,
// }

// # KLASSE

// const today = new Date()

const rooms_haus = new Rooms(3, [RoomType.BEDROOM, RoomType.BATHROOM, RoomType.KITCHEN])

const besitzer_1 = new Owner("Joe", "Doe", "1786 / 231432523")

const haus_1 = new Bauplan(besitzer_1, rooms_haus, false)

haus_1.renovate("red")

// besitzer_1._surname = "Kim"

console.log(haus_1)
besitzer_1.printInfo()
rooms_haus.anzeigen()

// besitzer_1._lastname = "Mustermann"
besitzer_1.lastname = "Batman"
console.log(besitzer_1.lastname)
