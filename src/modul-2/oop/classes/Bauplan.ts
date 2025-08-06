import type Owner from "./Owner"
import type Rooms from "./Rooms"

// Wie ist die sSchreibweise?
// ? Zuerst kommt das Keyword class, dann der Name des Objects und dann geschweifte Klammern.

class Bauplan {
  // interne Eigenschaften benennen wir immer mit dem Prefix "_", um sie von nach außen sichtbaren Eigenschaften zu unterscheiden.
  // % Wir stellen uns gerade vor, wie ein Haus aussehen sollte.
  _owner: Owner
  _rooms: Rooms
  _color: string = "white"
  _basement: boolean

  // Das wäre wie ein Investor, der meine Vorstellung bestätigt und mich mein Haus aufbauen lässt.
  constructor(owner: Owner, rooms: Rooms, basement: boolean) {
    this._owner = owner
    this._rooms = rooms
    this._basement = basement
  }

  renovate(newColor: string): void {
    this._color = newColor
    console.log(`Das Haus wurde in ${this._color} gestrichen.`)
  }
}

export default Bauplan
