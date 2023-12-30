import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/MainLayout/Mainlayout';
import Home from '../Pages/Mainlayoutpages/Home';
import Login from '../Form/Login';
import Register from '../Form/Register';

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },

        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },


      ]
    },
  ]);

  export default router