import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditPage() {
  let { ID } = useParams();
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${ID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  const edit = (e) => {
        e.preventDefault();

    fetch(`http://localhost:9000/products/${ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/products')

      });
  };

  return (
    <>
      <h1>Edit Product number {ID} </h1>
      <form onSubmit={edit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="ProductTitle"
            aria-describedby="product title"
            placeholder={product.title}
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
            id="ProductCategory"
            aria-describedby="product category"
            placeholder={product.category}
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
            placeholder={product.price}
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
export default EditPage;
