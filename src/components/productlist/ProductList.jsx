import React from "react";

import CarList from "../carlist/CarList";

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
