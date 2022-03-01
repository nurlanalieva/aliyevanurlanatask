import React, { useEffect, useState } from "react";
import "./TransactionItem.scss";
import { Descriptions } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import transactions from "../../../data/transaction-mock-data.json";
import { createPath, ROUTE } from "../../routing/routing";
import { ITransaction } from "../../interfaces/ITransaction";

export const TransactionItem = () => {
  const location = useLocation();
  const [transaction, setTransaction] = useState<ITransaction>();

  useEffect(() => {
    transactions.filter((data: any) => {
      const transactionID = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
      );
      if (data.transactionID.toString() === transactionID) {
        setTransaction(data);
      }
      return false;
    });
  }, [location.pathname, transaction]);

  return (
    <>
      <Descriptions title="Transaction Info" layout="vertical" bordered>
        <Descriptions.Item label="Transaction Id">
          {transaction?.transactionID}
        </Descriptions.Item>
        <Descriptions.Item label="Card Account">
          {transaction?.cardAccount}
        </Descriptions.Item>
        <Descriptions.Item label="Card ID">
          <Link
            to={createPath({
              path: ROUTE.TRANSACTION_ACTIVITY,
              params: {
                transactionID: Number(
                  location.pathname.substring(
                    location.pathname.lastIndexOf("/") + 1
                  )
                ),
                cardID: Number(transaction?.cardID),
              },
            })}
          >
            {" "}
            View Card : {transaction?.cardID}{" "}
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Amount">
          {transaction?.amount}
        </Descriptions.Item>
        <Descriptions.Item label="Currency">
          {transaction?.currency}
        </Descriptions.Item>
        <Descriptions.Item label="Transaction Date">
          {transaction?.transactionDate}
        </Descriptions.Item>
        <Descriptions.Item label="Merchant Info">
          {transaction?.merchantInfo}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
