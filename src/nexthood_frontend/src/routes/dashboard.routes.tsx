import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard.layout';
import Home from '../pages/dashboard/Home';
import AuthLayout from '../components/layout/auth.layout';
// import SignIn from '../pages/auth/SignIn';
import Cookies from 'js-cookie';

const getAuthToken = Cookies.get('authToken');
const DashboardRoutes : RouteObject = {
  path: getAuthToken ? 'dashboard' : "auth/login",
  element:  getAuthToken ? <DashboardLayout /> : <AuthLayout/>,
  children: [
    {
      path: '',
      element: getAuthToken ? <Home /> : <AuthLayout/>
      // element: (await AuthCheck()) ? (
      //   <Home />
      // ) : (
      //   <Navigate to={"/auth/login"} replace />
      // or <SignIn client={}
      // ),
    },
  ],
}

export default DashboardRoutes;
