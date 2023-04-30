import {createBrowserRouter, Navigate} from "react-router-dom";
import Users from "./views/Users.jsx";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import HomePage from "./views/HomePage.jsx";
import Counter from "./views/Counter.jsx";
import Customer from "./views/Customer.jsx";

const router = createBrowserRouter([
    {
        path:'/homepage',
        element:<HomePage/>
    },
    {   path:'counter',
        element:<Counter/>

    },
    {   path:'customer',
        element:<Customer/>

    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
            path: '/users',
            element: <Users/>
        },
            {
            path: '/dashboard',
            element: <Dashboard/>
        },
            {
                path: '/',
                element: <Navigate to={"/users"}/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [{
            path: '/login',
            element: <Login/>
        },
            {
                path: '/signup',
                element: <Signup/>
            },]
    },

    {
        path: '*',
        element: <NotFound  />
    }
])

export default router;
