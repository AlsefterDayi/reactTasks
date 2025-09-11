import { Badge } from "antd";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { BasketContext } from "../services/context/BasketContextProvider"
const CardButton = () => {
  let { basket } = useContext(BasketContext);
  return (
    <Badge count={basket?.length}>
      <Link to={"/"} className="border rounded px-2 py-1">
        Cart
      </Link>
    </Badge>
  );
};

export default CardButton;
