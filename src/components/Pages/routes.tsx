import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import Mainpage from "./mainpage";
import ErrorPage from "./errorpage";
import OXDcomponets from "./oxdcomponets";
import OxdDropdown from "../Dropdown";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/mainpage", element: <Mainpage /> },
  { path: "/oxdcomponets", element: <OXDcomponets /> },
  { path: "/Dropdown", element: <OxdDropdown /> },
]);

export default router;
