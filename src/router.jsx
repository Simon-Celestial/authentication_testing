import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import Home from './layouts/main/pages/Home';
import AuthLayout from './layouts/auth/AuthLayout';
import Login from './layouts/auth/pages/Login';
import Register from './layouts/auth/pages/Register';
import Detail from './layouts/main/pages/Detail';
import { AuthRoute } from './helpers/AuthRoute.jsx';
import { useContext, useEffect } from 'react';
import { ProfileCall } from './services/auth.js';
import { UserContext } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'home/:id',
        element: <AuthRoute><Detail /></AuthRoute>,
      },
      { path: '*', element: <h1>Page not found</h1> },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

export const MainRouter = () => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    console.log('Checking Token');
    ProfileCall()
      .then((data) => {
        console.log(data.data.client);
        setUser(data.data.client);
      })
      .catch((err) => {
        console.log('Error happened:');
        console.log(err);
        setUser(false);
      });
  }, []);
  return <RouterProvider router={router} />;
};
