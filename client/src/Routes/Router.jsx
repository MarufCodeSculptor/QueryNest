import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Main /Root";
import Login from "../Pages/Athentication/Login/Login";
import Register from "../Pages/Athentication/Register/Register";
import Home from "../Pages/Home /Home";
import About from "../Pages/About/About";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AddSurvey from "../Pages/Dashboard/AddSurvey/AddSurvey";
import Users from "../Pages/Dashboard/Users/Users";
import UserProfile from "../Pages/Dashboard/Profile/UserProfile";
import AdminProfile from "../Pages/Dashboard/Profile/AdminProfile";

// main networking
// Main pages children
const rootChildrens = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const dashboardChildrens = [
  {
    path: "add-survey",
    element: <AddSurvey />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "/dashboard/user/profile",
    element: <UserProfile />,
  },
  {
    path: "/dashboard/admin/profile",
    element: <AdminProfile />,
  },
];

const mainNetwork = [
  {
    path: "/",
    element: <Root />,
    children: rootChildrens,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
    children: dashboardChildrens,
  },
];

const router = createBrowserRouter(mainNetwork);
export default router;
