import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./router.js";
import { GlobalProvider } from "./store/globalContext";
import "@/assets/css/index.scss";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={routers} />
    </GlobalProvider>
  );
};

export default App;
