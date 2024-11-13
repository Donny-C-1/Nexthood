import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthRoutes from "./auth.routes";
// import App from "../App";
import DashboardRoutes from "./dashboard.routes";
import EventRoutes from "./events.routes";

const router = createBrowserRouter([
  { index: true, element: <Navigate to="/auth/signup" replace /> },
  AuthRoutes,
  DashboardRoutes,
  EventRoutes,
]);

export default router;
