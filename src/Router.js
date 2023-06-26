import { Navigate, useRoutes } from "react-router-dom";
// import Load from "../components/Load";
import useAuth  from "../hooks/useAuth";

// Layouts
const Layout = Load(() => import("./Pages/Layouts/Layout"));


export default function Router() {
  const { isAuthenticated, access } = useAuth();

  const routes = useRoutes([
    { path: "login", element: <h1> hi </h1> },
    ...(isAuthenticated && !access
      ? [
          {
            path: "/",
            element: <Layout />,
            children: [
              { element: <Navigate to="/home" />, index: true },
              { path: "home", element: <h1>user router </h1> },
            ],
          },
        ]
      : []),
    ...(isAuthenticated && access
      ? [
          {
            path: "/",
            element: <Layout />,
            children: [
              { element: <Navigate to="/home" />, index: true },
              { path: "home", element: <h1>Admin router </h1> },
            ],
          },
        ]
      : []),
    {
      path: "/500",
      children: [{ element:  <h1>500 router </h1>, index: true }],
    },
    {
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "404", element:  <h1> 404 </h1>},
        { path: "*", element:  <h1>to 404 </h1> },
      ],
    },
  ]);

  return routes;
}
