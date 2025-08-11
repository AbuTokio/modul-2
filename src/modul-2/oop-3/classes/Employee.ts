import Person from "./Person"

// ? Wenn ich von einer Elternklasse Eigenschaften und Methoden erben will, sieht es immer so aus:
// ? class [Klassenname] extends [Name der Elternklasse]
// Eine Klasse erbt von einer anderen Klasse.

// * Ich brauche 2 Dinge, um zu erben: "extends" und "super" im constructor

class Employee extends Person {
  public _isMarried: boolean = false
  private _email: string = ""

  public get email(): string {
    return this._email
  }

  public set email(value: string) {
    this._email = value
  }

  constructor(firstName: string, lastName: string, handyNummer?: string) {
    // ? Diese Logik passiert schon in der Elternklasse:
    // this._firstName = firstName
    // this._lastName = lastName
    // this._handyNummer = handyNummer
    // ? Stattdessen arbeiten wir mit dem keyword "super"
    super(firstName, lastName, handyNummer)
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`
  }

  public checkingFly(): void {
    if (this._isMarried) {
      this.checkPassport()
    }
  }
}

export default Employee
