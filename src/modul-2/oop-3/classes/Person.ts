// # private / protected / public

// % Protected => ich erlaube der Kindklasse, die Werte meiner Eigenschaften nachträglich zu ändern, aber nichts von außen.

class Person {
  protected _firstName: string = ""
  protected _lastName: string = ""
  public _handyNummer?: string = ""

  protected checkPassport(): void {
    console.log(`${this._lastName} is allowed to fly.`)
  }

  constructor(firstName: string, lastName: string, handyNummer?: string) {
    this._firstName = firstName
    this._lastName = lastName
    this._handyNummer = handyNummer
  }
}

export default Person
