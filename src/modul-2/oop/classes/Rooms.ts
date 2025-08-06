import type { RoomType } from "../enums/RoomType"

class Rooms {
  _roomCount: number
  _roomType: RoomType[]

  constructor(roomCount: number, roomType: RoomType[]) {
    this._roomCount = roomCount
    this._roomType = roomType
  }

  anzeigen(): void {
    // Mit der .join Methode wandelt man das Array in einen String um und wir können als Argument den Trenner angeben (z.B. ",")
    console.log(`Das Haus hat ${this._roomCount} Räume. Die Räume sind ${this._roomType.join(", ")}.`)
  }
}

export default Rooms
