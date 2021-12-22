import React from "react";
import { Breadcrumbs } from "../components/breadcrumbs/Breadcrumbs";
import { TopMenu } from "../components/main/TopMenu";
import { Items } from "../components/products/Items";

const Products = () => {
  return (
    <>
      <TopMenu />
      <Breadcrumbs path="Home / Products" />
      <Items />
    </>
  );
};

export default Products;
