import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard.layout';
import Home from '../pages/dashboard/Home';
import AuthLayout from '../components/layout/auth.layout';
// import SignIn from '../pages/auth/SignIn';
import Cookies from 'js-cookie';

const getAuthToken = Cookies.get('authToken');
const DashboardRoutes : RouteObject = {
  path: 'dashboard',
  element:  getAuthToken ? <DashboardLayout /> : <AuthLayout/>,
  children: [
    {
      path: '',
      element: getAuthToken ? <Home /> : <AuthLayout/>
    }
  ],
}

export default DashboardRoutes;
