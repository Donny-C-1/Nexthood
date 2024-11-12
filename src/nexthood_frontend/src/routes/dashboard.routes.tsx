import { useEffect, useState } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import DashboardLayout from "../components/layout/dashboard.layout";
import Home from "../pages/dashboard/Home";
import clientPromise from "../auth_client";

const ProtectedRoute = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const client = await clientPromise;
      const authStatus = await client.isAuthenticated();
      setIsAuthenticated(authStatus);
    }

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Home /> : <Navigate to={"/auth/signup"} replace />;
}

const DashboardRoutes: RouteObject = {
  path: "dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <ProtectedRoute />
    },
  ]
}

export default DashboardRoutes;
