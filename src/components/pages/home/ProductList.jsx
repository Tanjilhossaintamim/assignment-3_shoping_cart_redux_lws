import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {products.length == 0 && <p>No Product Available !</p>}
    </div>
  );
};

export default ProductList;
