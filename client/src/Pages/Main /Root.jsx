import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Home/Header/Navbar";

const Root = () => {
  return (
   <div>
    <Navbar/>
    <Outlet/>
   </div>
  );
};

export default Root;
