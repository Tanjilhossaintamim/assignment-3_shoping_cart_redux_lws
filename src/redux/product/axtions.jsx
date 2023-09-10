import {
  ADDPRODUCT,
  DECREASEQUANTITY,
  INCREASEQUANTITY,
  RETURNQUANTITY,
} from "./actionTypes";

export const add_product = (
  productName,
  category,
  imageUrl,
  price,
  quantity
) => {
  return {
    type: ADDPRODUCT,
    payload: {
      productName,
      category,
      imageUrl,
      price,
      quantity,
    },
  };
};

export const decreasequantity = (productId) => {
  return {
    type: DECREASEQUANTITY,
    payload: productId,
  };
};
export const increasequantity = (productId) => {
  return {
    type: INCREASEQUANTITY,
    payload: productId,
  };
};

export const returnMainQuantity = (productId, oldQuantity) => {
  return {
    type: RETURNQUANTITY,
    payload: { productId, oldQuantity },
  };
};
