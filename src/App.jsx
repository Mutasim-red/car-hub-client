import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import ManageProducts from './pages/ManageProducts/ManageProducts';
import AddProduct from './pages/AddProduct/AddProducts';
import AddReview from './pages/AddReview/AddReview';
import VehicleDetails from './pages/ProductDetail/VehicleDetails';
import UpdateProduct from './pages/UpdateProduct/UpdateProducts';
import PostTeam from './pages/PostTeam/PostTeam';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-vehicles`);
      }
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
    },
    {
      path: "/manage-products",
      element: <ManageProducts/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-vehicles`);
      }
    },
    {
      path: "/add-product",
      element: <AddProduct/>
    },
    {
      path: "/add-review",
      element: <AddReview/>
    },
    {
      path: "/vehicle/:id",
      element: <VehicleDetails></VehicleDetails>,
      loader: function({params})
      {
        
        return fetch(`http://localhost:3000/vehicle/${params.id}`);
      }
    },
    {
      path: "/update-vehicle/:id",
      element: <UpdateProduct></UpdateProduct>,
      loader: function({params}){
        return fetch(`http://localhost:3000/vehicle/${params.id}`);
      }
    },

    {
      path: "/add-teammate",
      element: <PostTeam/>
    },
  ]);

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
