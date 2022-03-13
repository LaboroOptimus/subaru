import React from "react";
import { TopMenu } from "../components/main/TopMenu";
import { Breadcrumbs } from "../components/breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import { data } from "../components/mock/products";
import { ProductItem } from "../components/product-item/ProductItem";

const dealers = ["Saint J Subaru", "Saint J Subaru2", "Saint J Subaru3"];

const Item = () => {
  const params = useParams();
  const product = data.find((item) => item.part === params.productId);

  return (
    <>
      <TopMenu />
      <Breadcrumbs path={`Home / Products / ${product?.title}`} />
      <ProductItem product={product} dealers={dealers} />
    </>
  );
};

export default Item;
