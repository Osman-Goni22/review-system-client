import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Components/Router.jsx';
import { ToastContainer, toast } from 'react-toastify';
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './Components/Auth_Provider/AUthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' />
    </AuthProvider>
  </StrictMode>,
)
