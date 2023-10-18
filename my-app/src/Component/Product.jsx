import React from "react";
import Procard from "./Procard";

function Product() {
  return (
    <div className="max-w-5xl px-4 mt-3 space-y-4  ">
      <div
        className="bg-white rounded-xl p-2 product 
        flex 
      items-center justify-between ">
        <h2 className="text-lg font-bold Product2">Product Sell</h2>
        <div className="flex items-end space-x-2">
          <input placeholder="Search" className="h-4 min-w-max mr-5" />
          <h2>Date</h2>
        </div>
      </div>

      <div className="bg-white rounded-xl Product2   p-2 flex items-center justify-between">
        <h4 className="text-sm font-normal">Product Name</h4>
        <div className="flex  w-1/3 justify-between mr-3 product3   font-bold ">
          <h2>Stock</h2>
          <h2>Price</h2>
          <h2>Total</h2>
        </div>
      </div>

      <Procard
        text="Abstract 3D"
        text2="lorem11"
        text3="98 stocks"
        text4="$8833k"
        text5="83"
      />
      <Procard
        text="Abstract 3D"
        text2="lorem 33"
        text3="42 stocks"
        text4="$22k"
        text5="62"
      />
    </div>
  );
}

export default Product;
