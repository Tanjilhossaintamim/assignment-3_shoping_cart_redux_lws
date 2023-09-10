import React from "react";
import ProductList from "./ProductList";
import ProductAddForm from "./ProductAddForm";

const Home = () => {
  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          <ProductList />

          <div>
            {/* <!-- Product Input Form --> */}
            <ProductAddForm />
            {/* <!-- Product Input Form Ends --> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
