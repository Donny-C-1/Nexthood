import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from './auth.routes';
import App from '../App';
import DashboardRoutes from './dashboard.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  AuthRoutes,
  DashboardRoutes,
]);

export default router;
