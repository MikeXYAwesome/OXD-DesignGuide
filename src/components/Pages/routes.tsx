import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import Mainpage from "./mainpage";
import ErrorPage from "./errorpage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/mainpage", element: <Mainpage /> },
]);

export default router;
