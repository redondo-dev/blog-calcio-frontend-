import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';


import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Profil from './pages/Profil';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Connexion/>,
  
  },
  
  
  {
    path: "/register",
    element:<Inscription/>,
   
  },
  {
    path: "/login",
    element: <Connexion/>,
   
  },
  

  {
    path: "/profil",
    element:  <Profil/>,
   
  },
  // {
  //   path: "/comment",
  //   element:  <Comment/>,
   
  // },
  
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);

