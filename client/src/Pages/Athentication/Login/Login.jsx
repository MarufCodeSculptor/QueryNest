import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full flex  md:flex-row flex-col items-stretch	 justify-center max-w-7xl  bg-white rounded-lg shadow-md">
        <div className="md:w-1/2 ">
          <div className="flex items-center justify-center h-full ">
            Loading something here ...
          </div>
        </div>
        {/* right item */}
        <div className="md:w-1/2  p-5">
          <h2 className="text-2xl font-bold text-center mt-10">Login</h2>
          <div className="flex items-center justify-center ">
            <form className=" space-y-6 p-5 ">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="max-w-xs p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="max-w-xs p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="max-w-xs p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                  required
                />
                <label className="underline block text-right text-xs mt-2">
                  forgot passowrd?
                </label>
              </div>
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block focus:outline-none focus:ring-4 focus:ring-blue-300 active:ring-4 active:ring-blue-300">
                  Register
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="divider max-w-xs mx-auto px-4 ">Or</div>
          </div>

          <div className="text-center flex items-center justify-center gap-5">
            <button
              title="login with google"
              className="transform transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <FaGoogle className="w-8 h-8 bg-blue-500 text-white rounded-full p-2" />
            </button>

            <button
              title="login with facebook"
              className="transform transition-transform duration-200 ease-in-out hover:scale-110"
            >
              <FaFacebook className="w-8 h-8 bg-violet-500 text-white rounded-full p-2" />
            </button>
          </div>

          <div className="text-center mt-5">
            <p>
              Already Have An account{" "}
              <Link className="link text-blue-500" to={"/login"}>
                {" "}
                login{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
