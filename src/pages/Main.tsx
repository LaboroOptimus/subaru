import React from "react";
import { TopMenu } from "../components/main/TopMenu";
import { SelectVehicle } from "../components/main/SelectVehicle";
import { SelectCategory } from "../components/main/SelectCategory";
import { Cta } from "../components/main/Cta";
import "./index.scss";

const Main = () => {
  return (
    <>
      <TopMenu />
      <SelectVehicle />
      <SelectCategory />
      <Cta />
    </>
  );
};

export default Main;
