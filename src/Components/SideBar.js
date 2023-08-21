import { Link } from "react-router-dom";


function SideBar() {
  return (
    <>
      <ul className="">
        <li className="list-unstyled mt-2 ">
          <Link className="link-underline link-underline-opacity-0 mt-2 py-2" to={'/products'}>Get All Products </Link>
        </li>
        <li className="list-unstyled mt-2 ">
          <Link className="link-underline link-underline-opacity-0 " href="#">Get All Categerios </Link>
        </li>
      </ul>
    </>
  );
}
export default SideBar;
