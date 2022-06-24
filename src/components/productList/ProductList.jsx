import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">Sample of my favorite Projects</p>
      </div>
      <div className="pl-list">
        {""}
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
