import { createBrowserRouter } from "react-router-dom";
import NavBar from "../NavBar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar></NavBar>,
    },
  ]);

  export default router