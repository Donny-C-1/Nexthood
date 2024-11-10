import { createBrowserRouter } from 'react-router-dom';
import AuthRoutes from './auth.routes';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  AuthRoutes,
]);

export default router;
