import { useState, useEffect } from "react";
import "./CardList.scss";
import { Table, Input } from "antd";
import { Link } from "react-router-dom";
import cards from "../../../data/card-mock-data.json";
import { createPath, ROUTE } from "../../routing/routing";

export const CardList = () => {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(cards);

  const columns: any = [
    {
      title: "Card Id",
      dataIndex: "cardID",
      key: "cardID",
      render: (id: number) => {
        return (
          <Link
            to={createPath({
              path: ROUTE.CARD,
              params: { cardID: id },
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
      title: "Masked Card Number",
      dataIndex: "maskedCardNumber",
      key: "maskedCardNumber",
    },
    {
      title: "Expire Date",
      dataIndex: "expireDate",
      key: "expireDate",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
  ];
  const handleSearch = (event: any) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = cards.filter((data) => {
      return (
        // data.cardID.toString().toLowerCase().indexOf(event.target.value) >= 0 ||
        data.status.search(value) >= 0 ||
        data.cardAccount.search(value) >= 0 ||
        data.cardID.toString().search(value) >= 0 ||
        data.currency.toLowerCase().search(value) >= 0
      );
    });
    setFilteredData(result);
  };

  useEffect(() => {
    if (cards) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Input
        className="input-style"
        placeholder="Search"
        onChange={(e) => handleSearch(e)}
      />
      <Table loading={loading} columns={columns} dataSource={filteredData} />
    </>
  );
};
