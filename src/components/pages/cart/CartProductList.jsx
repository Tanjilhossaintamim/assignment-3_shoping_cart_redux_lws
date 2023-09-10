import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  delete_to_cart,
  increaseItemQuantity,
} from "../../../redux/cart/actions";
import {
  decreasequantity,
  increasequantity,
  returnMainQuantity,
} from "../../../redux/product/axtions";

const CartProductList = ({ cartItem }) => {
  const {
    id,
    productName,
    category,
    imageUrl,
    price,
    mainProductQuantity,
    quantity,
  } = cartItem;
  const dispatch = useDispatch();
  const handelDeleteProduct = (productId) => {
    dispatch(delete_to_cart(productId));
    dispatch(returnMainQuantity(id, mainProductQuantity));
  };
  const handelIncreaseQuantity = (productId) => {
    if (mainProductQuantity != quantity) {
      dispatch(increaseItemQuantity(productId));
      dispatch(decreasequantity(productId));
    }
  };

  const handelDecreaseQuantity = (productId) => {
    if (quantity > 0) {
      dispatch(decreaseItemQuantity(productId));
      dispatch(increasequantity(productId));
    }
    if (quantity < 2) {
      dispatch(delete_to_cart(id));
      dispatch(returnMainQuantity(id, mainProductQuantity));
    }
  };
  return (
    <div className="cartCard">
      {/* <!-- Cart Item --> */}
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={imageUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handelIncreaseQuantity(id)}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handelDecreaseQuantity(id)}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handelDeleteProduct(id)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
      {/* <!-- Cart Items Ends --> */}
    </div>
  );
};

export default CartProductList;
