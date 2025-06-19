import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import ShopComponent from "../components/shop";
import Product from "../components/mainLayout/store-products/praducts/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/shop",
    element: <ShopComponent />,
  },
  {
    path: "/plant-info/:category/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);
