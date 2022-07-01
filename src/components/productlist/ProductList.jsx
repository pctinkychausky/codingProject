import React from "react";
import data from "../data/date.json";

function ProductList() {
  return (
    <div>
      {data.map((data) => {
        return <div>{data}</div>;
      })}
    </div>
  );
}

export default ProductList;
