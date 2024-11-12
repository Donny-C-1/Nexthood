import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard.layout';
import Home from '../pages/dashboard/Home';
import AuthLayout from '../components/layout/auth.layout';
import SignIn from '../pages/auth/SignIn';
import Cookies from 'js-cookie';

const getAuthToken = Cookies.get('authToken');
const DashboardRoutes : RouteObject = getAuthToken ? {
  path: 'dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <Home />
      // element: (await AuthCheck()) ? (
      //   <Home />
      // ) : (
      //   <Navigate to={"/auth/login"} replace />
      // or <SignIn client={}
      // ),
    },
  ],
} : {
    path: 'auth',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <SignIn />,
    },
  ]
};

export default DashboardRoutes;
