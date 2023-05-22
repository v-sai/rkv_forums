import { createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/auth/Login";
import Regitser from "./components/auth/Regitser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Regitser />,
  },
]);

export default router;
