import React from "react";
import Product from "./Product";
function Footer() {
  return (
    <>
      <div className=" block  footer1 w-11/12  mb-5  ">
        <div className="shadow-gray-400 shadow-lg rounded-xl bg-white flex-col  max-h-max  w-full  ">
          <Product />
        </div>
      </div>
    </>
  );
}

export default Footer;
