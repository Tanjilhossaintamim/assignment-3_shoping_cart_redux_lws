import React from "react";
import Logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";

const Header = ({ handelPageChange }) => {
  const carts = useSelector((state) => state.carts);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <span onClick={() => handelPageChange("home")}>
          <img src={Logo} alt="LWS" className="max-w-[140px]" />
        </span>

        <div className="flex gap-4">
          <span
            className="navHome"
            style={{ cursor: "pointer" }}
            id="lws-home"
            onClick={() => handelPageChange("home")}
          >
            {" "}
            Home{" "}
          </span>
          <span
            className="navCart"
            style={{ cursor: "pointer" }}
            id="lws-cart"
            onClick={() => handelPageChange("cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{carts.length}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
