import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "!bg-blue-500 !text-white rounded-lg"
              : "text-gray-800  hover:bg-blue-200 transition"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "!bg-blue-500 !text-white rounded-lg"
              : "text-gray-800  hover:bg-blue-200 transition"
          }
          to={"/dashboard"}
        >
          dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "!bg-blue-500 !text-white rounded-lg"
              : "text-gray-800  hover:bg-blue-200 transition"
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
    </>
  );

  const role = "user";

  return (
    

      <div className="navbar bg-blue-50 bg-opacity-15 fixed top-0 z-50 font-lora ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="font-lobster text-3xl text-blue-500  p-3 rounded-lg  "
          >
            Query_Nest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  // users image
                  src="https://i.ibb.co.com/Rv9d13p/target.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {role === "user" && (
                <li>
                  <Link to={"/dashboard/user/profile"}> Profile</Link>
                </li>
              )}
              {role === "admin" && (
                <li>
                  <Link to={"/dashboard/admin/profile"}> Profile</Link>
                </li>
              )}

              <li>
                <a>Logout</a>
              </li>
              {role === "user" && (
                <li className="capitalize">
                  <Link to={"/update-role"}> change role </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
