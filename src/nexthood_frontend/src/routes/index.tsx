import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthRoutes from './auth.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  AuthRoutes,
]);

export default router;
