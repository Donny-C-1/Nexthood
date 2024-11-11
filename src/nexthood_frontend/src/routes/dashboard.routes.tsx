import { RouteObject } from 'react-router-dom';
import DashboardLayout from '../components/layout/dashboard.layout';
import Home from '../pages/dashboard/Home';


const DashboardRoutes : RouteObject = {
  path: 'dashboard',
  element: <DashboardLayout />,
  children: [
    {
      path: '',
      element: <Home />
    }
  ],
};

export default DashboardRoutes;
