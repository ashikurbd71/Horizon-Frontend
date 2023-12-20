import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/MainLayout/Mainlayout';

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>
    },
  ]);

  export default router