export type IOrderType = "purchase" | "sale"

export interface IOrderSubmit {
  active: string
  quantity: number
  amount: number
  type: IOrderType
}

export interface IOrder {
  id: string
  active: string
  quantity: number
  amount: number
  type: IOrderType
}
