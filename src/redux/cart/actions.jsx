import {
  ADD_TO_CART,
  INCREASEQUANTITY,
  DECREASEQUANTITY,
  DELETE_TO_CART,
} from "./actionType";

export const add_to_cart = (
  id,
  productName,
  category,
  imageUrl,
  price,
  quantity
) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      productName,
      category,
      imageUrl,
      price,
      quantity,
    },
  };
};

export const delete_to_cart = (productId) => {
  return {
    type: DELETE_TO_CART,
    payload: productId,
  };
};
export const increaseItemQuantity = (productId) => {
  return {
    type: INCREASEQUANTITY,
    payload: productId,
  };
};
export const decreaseItemQuantity = (productId) => {
  return {
    type: DECREASEQUANTITY,
    payload: productId,
  };
};
