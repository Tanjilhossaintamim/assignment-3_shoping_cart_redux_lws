import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { add_product } from "../../../redux/product/axtions";

const formInitialValue = {
  productName: "",
  category: "",
  imageUrl: "",
  price: "",
  quantity: "",
};

const ProductAddForm = () => {
  const dispatch = useDispatch();
  const handelAddProduct = (values) => {
    dispatch(
      add_product(
        values.productName,
        values.category,
        values.imageUrl,
        values.price,
        values.quantity
      )
    );
  };

  const { values, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: formInitialValue,
    onSubmit: (values) => {
      handelAddProduct(values);
      handleReset();
    },
  });
  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              name="productName"
              value={values.productName}
              onChange={handleChange}
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="category"
              value={values.category}
              onChange={handleChange}
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="imageUrl"
              value={values.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="price"
                value={values.price}
                onChange={handleChange}
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductAddForm;
