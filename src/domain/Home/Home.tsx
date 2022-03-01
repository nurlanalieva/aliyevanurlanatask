import "./Home.scss";
import { Card } from "antd";

export const Home = () => {
  return (
    <>
      <Card title="Task Description" style={{ width: "100%" }}>
        <div>
          <p> # Challenge</p>
          <p>
            *Task*: Build an app to view all payment cards, card details,
            transactions related to the card, and transaction details of the
            financial institution{" "}
          </p>

          <p>*Card schema:* </p>

          <p>- cardID</p>
          <p>- cardAccount</p>
          <p>- maskedCardNumber</p>
          <p>- expireDate</p>
          <p>- currency (AZN | EUR | USD)</p>
          <p>- status (active | blocked)</p>
          <p>- balance</p>

          <p>*Transaction schema:*</p>
          <p>- transactionID</p>
          <p>- cardAccount</p>
          <p>- cardID</p>
          <p>- amount</p>
          <p>- currency</p>
          <p>- transactionDate</p>
          <p>- merchantInfo (store name for example)</p>

          <p>
            Cards, card details, transactions and transaction details views
            should be implemented.{" "}
          </p>

          <p>*Flow description:*</p>

          <p>
            - User signs in (conditional, no need to implement sign in, we can
            open transactions page directly)
          </p>

          <p>
            - User should be able to see the list of all transactions related to
            his institution
          </p>
          <p>
            - User should be able to use pagination if there are more than 10
            transactions (10 transactions for each page)
          </p>
          <p>
            - User should be able to filter transactions (by cardID,
            cardAccount, amount, currency and date)
          </p>
          <p>- User should be able to view selected transaction details</p>
          <p>
            - User should be able to navigate to the card details page directly
            from transaction details page
          </p>

          <p>
            - User should be able to see the list of all cards related to his
            institution
          </p>
          <p>
            - User should be able to use pagination if there are more than 10
            cards (10 cards for each page)
          </p>
          <p>
            - User should be able to filter cards (by cardID, cardAccount,
            currency and status)
          </p>
          <p>- User should be able to view selected card details</p>
          <p>
            - User should be able to navigate to the transactions page directly
            from transaction details page (with the cardID filter set)
          </p>
          <p>
            - User should be able to navigate to the previous pages using
            breadcrumbs
          </p>

          <p>
            *!!! States of the page filters should be saved while using
            breadcrumbs*
          </p>

          <p>*Breadcrumbs examples:*</p>
          <p>Home / Transactions </p>
          <p>Home / Transactions / transactionID</p>
          <p>Home / Transactions / transactionID / cardID</p>
          <p>Home / Cards</p>
          <p>Home / Cards / cardID</p>
          <p>Home / Cards / cardID / Transactions</p>
          <p>Home / Cards / cardID / Transactions / transactionID</p>
        </div>
      </Card>
    </>
  );
};
