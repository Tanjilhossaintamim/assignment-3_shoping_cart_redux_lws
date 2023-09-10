import { combineReducers } from "redux";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
