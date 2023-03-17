import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddProduct from "./pages/AddProduct";
import AddUser from "./pages/AddUser";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/EditProduct.";
import EditUser from "./pages/EditUser";
import Products from "./pages/Products";
import Users from "./pages/Users";
// import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route element={<PrivateRoutes />} > */}
          <Route path='*' element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/customers" element={<Customers />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
