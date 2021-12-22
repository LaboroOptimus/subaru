import React from "react";
import cn from "classnames";
import { Slider } from "./Slider";
import { Content } from "./Content";
import { Dealer } from "./Dealer";
import { Product } from "../mock/products";
import { Row, Col } from "antd";
import "./index.scss";

interface Props {
  product?: Product;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className={cn("wrapper", "products")}>
      <h3>{product?.title}</h3>
      <Row gutter={[48, 32]}>
        <Col span={10}>
          <Slider product={product} />
        </Col>

        <Col span={6}>
          <Content product={product} />
        </Col>

        <Col span={8}>
          <div className="product-price">
            <span>MSPR</span>
            <span className="price">${product?.price}</span>
          </div>
          <p className="price-caption">
            Please select a dealer to view local pricing
          </p>
          <Dealer name="Saint J Subaru" />
          <Dealer name="Saint J Subaru" />
          <Dealer name="Saint J Subaru" />
        </Col>
      </Row>
    </div>
  );
};

export { ProductItem };
