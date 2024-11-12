import { RouteObject } from 'react-router-dom';
import AuthLayout from '../components/layout/auth.layout';
import SignUp from '../pages/auth/SignUp';
import Step2 from '../pages/auth/Step2';
import SignIn from '../pages/auth/SignIn';


//we can return the client and pass it here with the asnc func: 
/*
const Client = async () => {
  const client = await AuthClient.create().then(
    (client) => client
  );

  return loggedIn;
};
*/

const AuthRoutes: RouteObject = {
  path: 'auth',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <SignIn client={null} />, // 
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
