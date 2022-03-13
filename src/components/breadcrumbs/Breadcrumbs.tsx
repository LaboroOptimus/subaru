import React from "react";
import cn from "classnames";
import "./index.scss";

interface Props {
  path?: string | null;
}

const Breadcrumbs: React.FC<Props> = ({ path }) => {
  console.log(path);
  return (
    <>
      {path && path.length && (
        <div data-testid="breadcrumbs" className={cn("wrapper", "breadcrumbs")}>
          {path}
        </div>
      )}
    </>
  );
};

export { Breadcrumbs };
