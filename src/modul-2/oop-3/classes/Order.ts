import OrderStatus from "../enums/OrderStatus"
import IOrder from "../interfaces/IOrder"
import IPizza from "../interfaces/IPizza"

class Order implements IOrder {
  _orderNumer: number
  _customerName: string
  _pizzen: IPizza[] = []
  _status: OrderStatus

  updateStatus(): void {
    if (this._status === OrderStatus.CREATED) {
      this._status = OrderStatus.READY
    }
  }

  cancle(): boolean {
    if (this._status === OrderStatus.CREATED) {
      return false
    } else {
      return true
    }
  }

  constructor(orderNumer: number, customerName: string, status: OrderStatus) {
    this._orderNumer = orderNumer
    this._customerName = customerName
    this._status = status
  }
}

export default Order
