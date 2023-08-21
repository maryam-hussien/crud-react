import "./App.css";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import "./Components/siderbar.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Add from "./Components/Pages/Add";
import ViewPage from "./Components/Pages/ViewPage";
import EditPage from "./Components/Pages/EditPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row m-0">
        <div className="col-2 bg-dark sidebar ">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<Add />} />
            <Route path="products/:ID" element={<ViewPage />} />
            <Route path="products/editpage/:ID" element={<EditPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
