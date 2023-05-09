import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddChocolet from './components/addChocolet.jsx';
import UpdateChocolet from './components/UpdateChocolet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/chocolets')
  },
  {
    path: "/addChocolet",
    element: <AddChocolet></AddChocolet>
  } ,
  {
    path: 'updateChocolet/:id',
    element: <UpdateChocolet></UpdateChocolet> ,
    loader: ({params}) => fetch(`http://localhost:5000/chocolets/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
