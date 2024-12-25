import { createBrowserRouter } from "react-router-dom";
import NavBar from "../NavBar";
import Register from "./Register";
import Login from "./Login";
const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar></NavBar>,
    },
    {
      path:'/signup',
      element:<Register></Register>
    },
    {
      path:'/signin',
      element:<Login></Login>
    }
  ]);

  export default router