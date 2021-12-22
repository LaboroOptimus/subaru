import React from "react";
import cn from "classnames";
import "./index.scss";

interface Props {
  path: string;
}

const Breadcrumbs: React.FC<Props> = ({ path }) => {
  return <div className={cn("wrapper", "breadcrumbs")}>{path}</div>;
};

export { Breadcrumbs };
