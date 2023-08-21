import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewPage() {
  let { ID } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9000/products/${ID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      <h1>Product Details Number: {ID}</h1>
      <h3>title : {product.title}</h3>
    </>
  );
}
export default ViewPage;
