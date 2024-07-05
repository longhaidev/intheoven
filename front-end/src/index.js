import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import WebFont from "webfontloader";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
// components
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Menus from "./pages/Menu/Menus";
import Product from "./pages/Menu/Product";
import AllProduct from "./pages/Menu/AllProduct";
import ErrorRoute from "./pages/PageNotFound/ErrorRoute";
import ProductDetail from "./pages/Menu/ProductDetail";
import Cart from "./pages/Cart/Cart";
// main
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorRoute></ErrorRoute>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/menus/all",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/menus/:category",
        element: <Product></Product>,
      },
      {
        path: "/menus/:category/:productId",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
{
  /* <BrowserRouter>
 
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route exact path="/menus/all" element={<AllProduct></AllProduct>} />
    <Route path="/menus" element={<Menus></Menus>}>
      <Route path=":category" element={<Product></Product>}></Route>
      <Route
        path=":category/:productId"
        element={<ProductDetail></ProductDetail>}
      ></Route>
    </Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="*" element={<ErrorRoute></ErrorRoute>}></Route>
  </Routes>
</BrowserRouter> */
}

reportWebVitals();
