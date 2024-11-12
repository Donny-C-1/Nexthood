import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from './auth.routes';
import App from '../App';
import DashboardRoutes from './dashboard.routes';
import EventRoutes from './events.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  AuthRoutes,
  DashboardRoutes,
  EventRoutes
]);

export default router;
