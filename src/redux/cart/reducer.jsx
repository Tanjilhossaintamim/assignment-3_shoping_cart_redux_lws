import {
  ADD_TO_CART,
  DECREASEQUANTITY,
  DELETE_TO_CART,
  INCREASEQUANTITY,
} from "./actionType";

const initialState = [];

const findProduct = (state, productId) => {
  return state.find((p) => p.id == productId);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, productName, category, imageUrl, price, quantity } =
        action.payload;
      const product = findProduct(state, id);

      if (product) {
        return state.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...state,
          {
            id,
            productName,
            category,
            imageUrl,
            price,
            mainProductQuantity: quantity,
            quantity: 1,
          },
        ];
      }

    case DELETE_TO_CART:
      return state.filter((item) => item.id != action.payload);

    case INCREASEQUANTITY:
      return state.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    case DECREASEQUANTITY:
      return state.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

    default:
      return state;
  }
};

export default reducer;
