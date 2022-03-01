import React, { useState, useEffect } from "react";
import "./TransactionList.scss";
import { Table, Input } from "antd";
import { Link, useLocation } from "react-router-dom";
import transactions from "../../../data/transaction-mock-data.json";
import { createPath, ROUTE } from "../../routing/routing";

export const TransactionList = () => {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(transactions);
  const location = useLocation();

  const columns = [
    {
      title: "Transaction Id",
      dataIndex: "transactionID",
      key: "transactionID",
      render: (id: number) => {
        return location.pathname.split("/")[1] === "cards" ? (
          <Link
            to={createPath({
              path: ROUTE.CARD_TRANSACTIONS__ACTIVITY,
              params: {
                cardID: Number(location.pathname.split("/")[2]),
                transactionID: id,
              },
            })}
          >
            {id}
          </Link>
        ) : (
          <Link
            to={createPath({
              path: ROUTE.TRANSACTION,
              params: { transactionID: id },
            })}
          >
            {id}
          </Link>
        );
      },
    },
    {
      title: "Card Account",
      dataIndex: "cardAccount",
      key: "cardAccount",
    },
    {
      title: "Card ID",
      dataIndex: "cardID",
      key: "cardID",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      key: "transactionDate",
    },
    {
      title: "Merchant Info",
      dataIndex: "merchantInfo",
      key: "merchantInfo",
    },
  ];
  const handleSearch = (event: any) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = transactions.filter((data) => {
      return (
        // data.cardID.toString().toLowerCase().indexOf(event.target.value) >= 0 ||
        data.amount.toString().toLowerCase().search(value) >= 0 ||
        data.cardAccount.toLowerCase().search(value) >= 0 ||
        data.cardID.toString().toLowerCase().search(value) >= 0 ||
        data.transactionDate.toLowerCase().search(value) >= 0 ||
        data.currency.toLowerCase().search(value) >= 0
      );
    });
    setFilteredData(result);
  };

  useEffect(() => {
    if (transactions) {
      let result = [];
      setLoading(false);
      if (location.pathname.split("/")[1] === "cards") {
        result = transactions.filter((data: any) => {
          let cardId = Number(location.pathname.split("/")[2]);
          if (data.cardID === cardId) {
            return data;
          } else {
            return false;
          }
        });
        setFilteredData(result);
      } else {
        setFilteredData(transactions);
      }
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname.split("/")[1] === "cards" ? null : (
        <Input
          className="input-style"
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />
      )}
      <Table loading={loading} columns={columns} dataSource={filteredData} />
    </>
  );
};
