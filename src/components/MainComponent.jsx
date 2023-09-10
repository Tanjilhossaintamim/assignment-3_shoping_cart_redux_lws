import React, { useState } from "react";
import Header from "./Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

const MainComponent = () => {
  const [page, setPage] = useState("home");
  const handelPageChange = (pageName) => {
    setPage(pageName);
  };
  return (
    <div>
      <Header handelPageChange={handelPageChange} />
      {page == "home" ? <Home /> : <Cart />}
    </div>
  );
};

export default MainComponent;
