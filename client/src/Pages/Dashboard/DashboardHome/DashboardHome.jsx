import { Outlet } from "react-router-dom";



const DashboardHome = () => {
    return (
        <div>
            <h2>Dashboard home</h2>
            <Outlet/>
        </div>
    );
};

export default DashboardHome;