import { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  let navigate =useNavigate()
  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/products", {
        title,
        price,
        category,
      })
      .then((data) => {
        console.log(data);
        navigate('/products')
      });
  };
  return (
    <>
      <h2>Add Page</h2>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductTitle"
            aria-describedby="product title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputcategory" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryTitle"
            aria-describedby="product category"
            placeholder="Product category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductPrice"
            aria-describedby="product title"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
export default Add;
