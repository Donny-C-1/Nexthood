import { useEffect, useState } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import EventsLayout from "../components/layout/events.layout";
import EventsPage from "../pages/events/index";
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

  return isAuthenticated ? <EventsPage /> : <Navigate to={"/auth/signup"} replace />;
}

const EventRoutes: RouteObject = {
  path: "events",
  element: <EventsLayout />,
  children: [
    {
      path: "",
      element: <ProtectedRoute />
    },
  ]
}

export default EventRoutes;
