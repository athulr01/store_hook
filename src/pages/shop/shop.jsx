import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
// import  Filter from "../Filter";

export const Shop = () => {
  return (
    <>
    {/* <Filter/> */}
    <div className="shop">
      <div className="shopTitle">
        <h1>Store Hook</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </>
  );
};
