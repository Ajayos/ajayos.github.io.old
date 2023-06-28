import { Navigate, useRoutes } from "react-router-dom";
// import Load from "../components/Load";

// Layout
//Home
import HomeLayout from "./Pages/Layout/Home/index"
export default function Router() {
  //const { isAuthenticated, access } = useAuth();
  const isAuthenticated = false;
  const access = false;

  const routes = useRoutes([
    { path: "login", element: <h1> hi </h1> },
    ...(!access
      ? [
          {
            path: "/",
            element: <HomeLayout />,
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
            //element: <Layout />,
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
