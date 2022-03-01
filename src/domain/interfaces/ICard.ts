export interface ICard {
  cardID: number
  key: number
  cardAccount: string
  maskedCardNumber: string
  expireDate: string
  currency: string
  status: string
  balance: string
  transactions: [
    {
      transactionID: number
      key: number
      cardAccount: string
      cardID: number
      amount: number
      currency: string
      transactionDate: string
      merchantInfo: string
    },
  ]
}
