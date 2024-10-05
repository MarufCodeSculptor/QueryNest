import { Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";



const DashboardHome = () => {
    const {user}= useAuth();
    return (
        <div>
            <h2>Dashboard home</h2>
             <p>The user</p> <h2>{user?.displayName}</h2>
            <Outlet/>
        </div>
    );
};

export default DashboardHome;