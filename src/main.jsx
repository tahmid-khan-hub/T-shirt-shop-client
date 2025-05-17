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
import TshirtDetails from './components/TshirtDetails.jsx';

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
        path: 'tshirt/updateTshirt/:id',
        loader: () => fetch(`http://localhost:3000/tshirts`),
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
      },
      {
        path: 'tshirt/viewTshirt/:id',
        loader: () => fetch('http://localhost:3000/tshirts'),
        element: <TshirtDetails></TshirtDetails>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
