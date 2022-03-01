import { useEffect, useState } from "react";
import { Descriptions } from "antd";
import { Link, useLocation } from "react-router-dom";
import cards from "../../../data/card-mock-data.json";
import { ICard } from "../../interfaces/ICard";
import { createPath, ROUTE } from "../../routing/routing";
export const CardItem = () => {
  const location = useLocation();
  const [card, setCard] = useState<ICard>();

  useEffect(() => {
    cards.filter((data: any) => {
      const cardID = location.pathname.substring(
        location.pathname.lastIndexOf("/") + 1
      );
      if (data.cardID.toString() === cardID) {
        setCard(data);
      }
      return false;
    });
  }, [location.pathname, card]);

  return (
    <>
      <Descriptions title="Card Info" layout="vertical" bordered>
        <Descriptions.Item label="Card Id">{card?.cardID}</Descriptions.Item>
        <Descriptions.Item label="Card Account">
          {card?.cardAccount}
        </Descriptions.Item>
        <Descriptions.Item label="Masked Card Number">
          {card?.maskedCardNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Expire Date">
          {card?.expireDate}
        </Descriptions.Item>
        <Descriptions.Item label="Currency">{card?.currency}</Descriptions.Item>
        <Descriptions.Item label="Status">{card?.status}</Descriptions.Item>
        <Descriptions.Item label="Balance">{card?.balance}</Descriptions.Item>
      </Descriptions>
      <Link
        to={createPath({
          path: ROUTE.CARD_TRANSACTIONS_ACTIVITY,
          params: { cardID: Number(card?.cardID) },
        })}
        type="link"
      >
        View Transactions
      </Link>
    </>
  );
};
