import React from "react";
import "./productList.css";
import Product from "../product/Product";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Project Title</h1>
        <p className="pl-description">Short description about this Project</p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
