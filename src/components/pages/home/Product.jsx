import React from "react";
import { useDispatch } from "react-redux";
import { decreasequantity } from "../../../redux/product/axtions";
import { add_to_cart } from "../../../redux/cart/actions";

const Product = ({ product }) => {
  const { id, productName, category, imageUrl, price, quantity } = product;
  const dispatch = useDispatch();
  const handelAddToCart = (productId) => {
    dispatch(add_to_cart(id, productName, category, imageUrl, price,quantity));
    dispatch(decreasequantity(productId));
  };
  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={imageUrl} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{productName}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button
            className="lws-btnAddToCart"
            onClick={() => handelAddToCart(id)}
            disabled={quantity < 1 ? true : false}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* .............................. */}
    </>
  );
};

export default Product;
