import { createBrowserRouter } from "react-router-dom";
import NavBar from "../NavBar";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AddService from "./AddService";
import Services from "./Services";
import MyServices from "./MyServices";
import PrivateRoute from "./PrivateRoute";
import CircularRotateCards from "./circularRotateCards";
import ServiceDetails from "./ServiceDetails";
import Update from "./Update";
import MyReviews from "./MyReviews";
import NotFound from "./NotFound";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<NotFound></NotFound>
    },
    {
      path:'/signup',
      element:<Register></Register>
    },
    {
      path:'/signin',
      element:<Login></Login>
    },
    {
      path:'/addservice',
      element:<AddService></AddService>
    },
    {
      path:'/services',
      element:<Services></Services>
    },
    {
      path:'/myservices',
      element:<PrivateRoute><MyServices></MyServices></PrivateRoute>,
      
    },
    {
      path:"/motion",
      element:<CircularRotateCards></CircularRotateCards>
    },
    {
      path:"/details/:id",
      element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
      loader:({params})=>fetch(`https://service-system-reviews-server.vercel.app/details/${params.id}`)
    },
    {
      path:"/update/:id",
      element:<PrivateRoute><Update></Update></PrivateRoute>,
      loader:({params})=>fetch(`https://service-system-reviews-server.vercel.app/details/${params.id}`)
    },
    {
      path:"/myReview",
      element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
     
    }
  ]);

  export default router