import { RouteObject } from 'react-router-dom';
import AuthLayout from '../components/layout/auth.layout';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Step2 from '../pages/auth/Step2';


const AuthRoutes: RouteObject = {
  path: 'auth',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <SignIn />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
    {
      path: 'step-2',
      element: <Step2 />
    }
  ],
};

export default AuthRoutes;
