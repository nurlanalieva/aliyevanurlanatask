export interface ITransaction {
  transactionID: number
  key: number
  cardAccount: string
  cardID: number
  amount: number
  currency: string
  transactionDate: string
  merchantInfo: string
}
