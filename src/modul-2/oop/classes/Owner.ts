class Owner {
  public _surname?: string
  private _lastname: string
  _phoneNumber: string
  _email?: string

  // Mit private kann die Eigenschaft nur innerhalb der Klasse verwendet werden und ist von außen nicht sichtbar.
  // Der Standardwert ist "public" - also von außen immer sichtbar.

  // # GETTER und SETTER
  // ? get ist für das Abrufen des Eigenschaftswerts zuständig.
  // => get NameDerEigenschaft() { return _NameDerEigenschaft }

  get lastname() {
    return this._lastname
  }

  // ? set ist für das Zuweisen des Eigenschaftswerts zuständig.
  // => set NameDerEigenschaft(value: type) { this._NameDerEigenschaft = value }

  set lastname(value: string) {
    this._lastname = value
  }

  constructor(surname: string, lastname: string, phonenumber: string) {
    this._surname = surname
    this._lastname = lastname
    this._phoneNumber = phonenumber
    // if (email) {
    //   this._email = email
    // }
  }

  printInfo(): void {
    console.log(`Der Besitzer ist ${this._surname ?? "Unbekannt"} und seine Handynummer lautet ${this._phoneNumber}.`)
  }
}

export default Owner
