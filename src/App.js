import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AddUser from "./pages/AddUser";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import Products from "./pages/Products";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
