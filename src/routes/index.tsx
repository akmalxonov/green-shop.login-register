import { createBrowserRouter } from "react-router-dom";
// import SignUp from "../pages/sign-up";
import Home from "../pages/home";
// import Login from "../pages/login";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/sign-up",
  //   element: <SignUp/>,
  // },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);