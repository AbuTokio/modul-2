class Dog {
    _owner: string;
    _breed: string | undefined = "";
    _favoriteFood?: string = "";
    private _birthday: string;
    private _numberOfMeals: number = 0;
    private _name: string | undefined = "";
    private _age: number = 0



    get age(): number {
        return this._age
    }

    set age(value: number) {
        if (value < 0 || value > 40) {
            console.error("Invalid Value for dog Age. Must be between 0 and 40");
        } else {
            this._age = value
        }
    }


    get dogInGerman(): string {
        return "Hund"
    }



    get name(): string | undefined {
        return this._name
    }


    set name(value: string) {
        this._name = value
    }




    constructor(name: string, age: number, owner: string, birthday: string) {
        this._name = name;
        this._birthday = birthday;


        // ! V1
        // if (age < 0 || age > 40) {
        //     throw new Error("Invalid Value for dog Age.Must be between 0 and 40")
        // }
        // this._age = age


        // ! V2

        this.age = age // ! wir rufen den Setter auf, nicht direkt _age

        this._owner = owner
        console.log("Dog was created");
    }





}


export default Dog;