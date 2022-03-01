import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE } from "../routing/routing";

export const NotFound = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to={ROUTE.HOME}>Back Home</Link>
          </Button>
        }
      />
    </>
  );
};
