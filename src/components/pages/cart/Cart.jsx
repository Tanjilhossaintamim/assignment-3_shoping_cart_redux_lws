import React from "react";
import CartProductList from "./CartProductList";
import Bill from "./Bill";
import { useSelector } from "react-redux";

const Cart = () => {
  const carts = useSelector((state) => state.carts);
  const totalPrice = carts.reduce(
    (previousPrice, currentValue) => previousPrice + (currentValue.price*currentValue.quantity),
    0
  );
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {carts.map((item) => {
              return <CartProductList cartItem={item} key={item.id} />;
            })}
          </div>

          {/* <!-- Bill Details --> */}
          <div>
            <Bill totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
