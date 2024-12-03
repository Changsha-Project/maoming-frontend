import { createBrowserRouter, Navigate } from "react-router-dom";
import MainContainer from "./components/main_container.jsx";
import Overview_page from "./pages/overview";

const routers = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "*",
    element: <Navigate to="/screen" replace />,
  },
  {
    path: "/screen",
    element: <MainContainer />,
    name: "screen",
    children: [
      {
        path: "overview",
        element: <Overview_page />,
        name: "overview",
      },
    ],
  },
]);

export default routers;
