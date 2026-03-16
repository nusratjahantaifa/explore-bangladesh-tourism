import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import TouristCard from './components/TouristCard.jsx';
import AllTouristSpot from './pages/AllTouristSpot.jsx';
import AddTouristSpot from './pages/AddTouristSpot.jsx';
import UpdateSpot from './pages/UpdateSpot.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/spots")
  },

  
   {
    path: "home",
    element: <Home> </Home>,
 
  },
 
  {
    path:'touristCard',
    element:<TouristCard></TouristCard>
  },
{
  path: "allTouristSpot",
element:<AllTouristSpot></AllTouristSpot>
},
{
  path:"addTouristSpot",
  element:<AddTouristSpot></AddTouristSpot>
},
{
  path:"updateSpot/:id",
  element:<UpdateSpot></UpdateSpot>,
  loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
},
{
  path:"login",
  element:<Login></Login>
},
{
  path:"register",
  element:<Register></Register>
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
