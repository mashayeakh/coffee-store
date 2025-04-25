import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Error from './components/Error/Error.jsx'
import Home from './components/Home/Home.jsx'
import Root from './components/Root/Root.jsx'
import CreateCoffee from './components/Create/CreateCoffee.jsx'
import ViewCoffee from './components/Coffee/ViewCoffee';
import EditCoffee from './components/Coffee/EditCoffee.jsx'
import AuthContextProvider from './components/Context/AuthContextProvider.jsx'
import Signup from './components/Signup/Signup.jsx'
import Users from './components/User/Users.jsx'
import EditUser from './components/User/EditUser.jsx'
import Login from './components/Login/Login.jsx'
import PrivateRoutes from './components/Routes/PrivateRoutes.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/create-coffee",
          element:
            <PrivateRoutes>
              <CreateCoffee />
            </PrivateRoutes>

        },
        {
          path: "view-coffee/:_id",
          element: <ViewCoffee />,
          loader: ({ params }) => {
            // console.log("PArams =", params);
            return fetch(`http://localhost:5000/specific-coffee/${params._id}`)
          }
        },
        {
          path: "edit/:_id",
          element: <EditCoffee />,
          loader: ({ params }) => {
            // console.log("Params : ", params);
            return fetch(`http://localhost:5000/edit/${params._id}`)
          }
        },
        {
          path: "/signup",
          element: <Signup />
        },

        {
          path: "/users",
          element:
            <PrivateRoutes>
              <Users />
            </PrivateRoutes>,
          loader: () => fetch("http://localhost:5000/users"),
        },

        {
          path: "/edit-user/:id",
          element: (
            <PrivateRoutes>
              <EditUser />
            </PrivateRoutes>
          ),
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/edit-user/${params.id}`);
          }
        },

        {
          path: "/login",
          element: <Login />
        },
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
