import type OrderStatus from "../enums/OrderStatus"
import type IPizza from "./IPizza"

interface IOrder {
  _orderNumer: number
  _customerName: string
  // ? Ich kann auch ein interface in der Type Definition eines anderen verwenden.
  _pizzen: IPizza[]
  _status: OrderStatus
  // * Schreibweise (wie bei type) => Methodenname: (ggf. Parameter) => Rückgabedatentyp
  updateStatus: () => void
  cancle: () => boolean
}

export default IOrder
