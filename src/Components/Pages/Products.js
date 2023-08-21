import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts()
  }, []);
  const getAllProducts = () =>{
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    }
  const deleteItem = (product) => {
    Swal.fire({
      title: ` Are You Sure TO Delete ${product.title} !! `,
      showCancelButton:true
      
    }).then((data)=>{
      if(data.isConfirmed){
        fetch(`http://localhost:9000/products/${product.id}`,{
          method : "DELETE"
        })
        .then((res) => res.json())
          .then(() => {
            
            getAllProducts() 
          });
        }
    })

  };
  return (
    <>
      <h1 className="text-center"> Products Page</h1>
      <Link className="btn btn-success mx-3" to={"/products/add"}>
        {" "}
        Add new products
      </Link>
      <table className="table table-dark table-striped table-hover mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
             <th>category</th> 
            <th>Price </th>
            <th>operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pr) => {
            return (
              <tr key={pr.id}>
                <td>{pr.id}</td>
                <td>{pr.title} </td>
                 <td>{pr.category}</td> 
                <td>{pr.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-1"
                    onClick={() => {
                      deleteItem(pr);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-info btn-sm m-1"
                    to={`/products/${pr.id}`}
                  >
                    view
                  </Link>
                  <Link className="btn btn-primary btn-sm m-1" to={`/products/editpage/${pr.id}`} >edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
