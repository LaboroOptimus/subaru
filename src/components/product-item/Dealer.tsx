import React from "react";
import { Button } from "antd";

interface Props {
  name: string;
}

const Dealer: React.FC<Props> = ({ name }) => {
  return (
    <div className="product-dealer">
      <div className="name">{name}</div>
      <div>
        <Button type="primary">Shop now</Button>
      </div>
    </div>
  );
};

export { Dealer };
