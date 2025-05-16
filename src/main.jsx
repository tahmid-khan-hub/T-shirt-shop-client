import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home.jsx';
import Login from './components/login.jsx';
import Register from './components/Register.jsx';
import UpdateTshirt from './components/updateTshirt.jsx';
import AddTshirt from './components/addTshirt.jsx';
import Tshirts from './components/Tshirts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'updateTshirt',
        element: <UpdateTshirt></UpdateTshirt>,
      },
      {
        path: 'addTshirt',
        element: <AddTshirt></AddTshirt>,
      },
      {
        path: 'tshirt',
        loader: () => fetch('http://localhost:3000/tshirts'),
        element: <Tshirts></Tshirts>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
