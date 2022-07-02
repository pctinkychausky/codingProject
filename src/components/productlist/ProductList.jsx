import React from "react";
import data from "../data/date.json";
import { nanoid } from "nanoid";

import CarList from "../carlist/CarList";

let carID = nanoid();

function ProductList() {
  return (
    <>
      <CarList />
    </>
    // <div key={carID}>
    //   {data.map((entry) => {
    //     let { Doors, Make, Model } = entry;
    //     console.log(
    //       "🚀 ~ file: ProductList.jsx ~ line 11 ~ {data.map ~ entry",
    //       entry
    //     );
    //     return <div>{Model}</div>;
    //   })}
    // </div>
  );
}

export default ProductList;
