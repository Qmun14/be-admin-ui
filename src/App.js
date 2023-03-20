import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Members from "./pages/Members";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./components/Login"));
const Users = lazy(() => import("./pages/Users"));
const AddUser = lazy(() => import("./pages/AddUser"));
const EditUser = lazy(() => import("./pages/EditUser"));
const Products = lazy(() => import("./pages/Products"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const EditProduct = lazy(() => import("./pages/EditProduct."));
const Customers = lazy(() => import("./pages/Customers"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          <Route path='*' element={<Dashboard />} />
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<Loading />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="/users/add"
            element={
              <Suspense fallback={<Loading />}>
                <AddUser />
              </Suspense>
            }
          />
          <Route
            path="/users/edit/:id"
            element={
              <Suspense fallback={<Loading />}>
                <EditUser />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<Loading />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="/products/add"
            element={
              <Suspense fallback={<Loading />}>
                <AddProduct />
              </Suspense>
            }
          />
          <Route
            path="/products/edit/:id"
            element={
              <Suspense fallback={<Loading />}>
                <EditProduct />
              </Suspense>
            }
          />
          <Route
            path="/customers"
            element={
              <Suspense fallback={<Loading />}>
                <Customers />
              </Suspense>
            }
          />
          <Route
            path="/members"
            element={
              <Suspense fallback={<Loading />}>
                <Members />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
