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
import MyList from './pages/MyList.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/allSpots",
        element: <AllTouristSpot />
      },
      {
        path: "/addSpot",
        element: <AddTouristSpot />
      },
      {
        path: "/updateSpot/:id",
        element: <UpdateSpot />,
        loader: ({ params }) =>
          fetch(`https://explore-bangladesh-tourism.onrender.com/spots/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/myList",
        element: <MyList />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)