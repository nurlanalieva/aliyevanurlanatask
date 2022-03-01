export enum ROUTE {
  HOME = '/',
  NOTFOUND = '*',
  CARDS = '/cards',
  CARD = '/cards/:cardID',
  TRANSACTIONS = '/transactions',
  TRANSACTION = '/transactions/:transactionID',
  TRANSACTION_ACTIVITY = `/transactions/:transactionID/:cardID`,
  CARD_ACTIVITY = '/cards/:cardID/:transactionID',
  CARD_TRANSACTIONS_ACTIVITY = '/cards/:cardID/transactions',
  CARD_TRANSACTIONS__ACTIVITY = '/cards/:cardID/transactions/:transactionID',
}

export enum CARD_TRANSACTION_ROUTE {
  TRANSACTION_ACTIVITY = 'cards/:cardID',
  CARD_ACTIVITY = 'transactions/:transactionID',
}

type TArgs =
  | { path: ROUTE.HOME }
  | { path: ROUTE.CARDS }
  | { path: ROUTE.TRANSACTION; params: { transactionID: number } }
  | { path: ROUTE.CARD; params: { cardID: number } }
  | {
      path: ROUTE.TRANSACTION_ACTIVITY
      params: { transactionID: number; cardID: number }
    }
  | {
      path: ROUTE.CARD_TRANSACTIONS_ACTIVITY
      params: { cardID: number }
    }
  | {
      path: ROUTE.CARD_TRANSACTIONS__ACTIVITY
      params: { cardID: number; transactionID: number }
    }
  | {
      path: CARD_TRANSACTION_ROUTE.TRANSACTION_ACTIVITY
      params: { cardID: number }
    }
  | {
      path: ROUTE.CARD_ACTIVITY
      params: { cardID: number; transactionID: number }
    }
  | {
      path: CARD_TRANSACTION_ROUTE.CARD_ACTIVITY
      params: { transactionID: number }
    }

type TArgsWithParams = Extract<TArgs, { path: any; params: any }>

export function createPath(args: TArgs) {
  // Save some CPU power for routes without params
  if (args.hasOwnProperty('params') === false) return args.path

  // Create a path by replacing params in the route definition
  return Object.entries((args as TArgsWithParams).params).reduce(
    (previousValue: string, [param, value]) =>
      previousValue.replace(`:${param}`, '' + value),
    args.path,
  )
}
