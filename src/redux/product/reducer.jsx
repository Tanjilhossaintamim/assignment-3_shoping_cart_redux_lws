import {
  ADDPRODUCT,
  DECREASEQUANTITY,
  INCREASEQUANTITY,
  RETURNQUANTITY,
} from "./actionTypes";

const initialState = [];

const findNextId = (products) => {
  const nexId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    0
  );
  return nexId + 1;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      const { productName, category, imageUrl, price, quantity } =
        action.payload;
      return [
        ...state,
        {
          id: findNextId(state),
          productName,
          category,
          imageUrl,
          price,
          quantity,
        },
      ];

    case DECREASEQUANTITY:
      return state.map((product) => {
        if (product.id == action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    case INCREASEQUANTITY:
      return state.map((product) => {
        if (product.id == action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    case RETURNQUANTITY:
      const { productId, oldQuantity } = action.payload;
      return state.map((item) => {
        if (item.id == productId) {
          return {
            ...item,
            quantity: oldQuantity,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default reducer;
