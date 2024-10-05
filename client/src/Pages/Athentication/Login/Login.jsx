import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const { user, signUp, login } = useAuth();
  const navigate = useNavigate()

  const [emailTyped, setEmailTyped] = useState(false);
  const [passwordType, setPasswordType] = useState(false);

  const handleLogin = async (form) => {
    const { email, password } = form;

    try {
      const { user } = await login(email.value, password.value);
      if (user) {
        form.reset();
        setEmailTyped(false);
        setPasswordType(false);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back to our platform have a nice journey!",
          customClass: {
            popup: "font-lato",
          },
        });
        navigate("/");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: err?.message,
        customClass: {
          popup: "font-lato",
        },
      });
      
    }
  };

  return (
    <>
      <div className="flex  items-center justify-center min-h-screen md:bg-gray-200 font-lora">
        <div className="md:flex  md:flex-row flex-col items-stretch justify-center md:max-w-5xl md:w-full 	  md:bg-white md:rounded-lg md:shadow-md">
          <div className="md:w-1/2  bg-blue-300 rounded-l-lg hidden md:block">
            <img
              className=" h-full mx-auto"
              src="https://i.ibb.co.com/3FZKGtJ/password-front-1.png"
              alt=""
            />
          </div>
          {/* right item */}
          <div className="md:w-1/2">
            <div className="p-5">
              {/* heading */}
              <h2 className="text-2xl font-bold text-center my-10  ">Login</h2>
              {/* form container */}
              <div className="flex items-center justify-center ">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(e.target);
                  }}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                      <MdEmail className="text-blue-500" />
                      <input
                        type="email"
                        name="email"
                        className="grow"
                        placeholder="Email"
                        onChange={(e) => {
                          console.log(e.target.value);

                          e.target.value.length > 0 && setEmailTyped(true);
                          e.target.value.length === 0 && setEmailTyped(false);
                        }}
                      />
                    </label>
                  </div>
                  {/* password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <IoMdKey className="text-xl text-blue-500" />
                      <input
                        type="password"
                        name="password"
                        className="grow"
                        placeholder="password"
                        onChange={(e) => {
                          e.target.value.length > 6 && setPasswordType(true);
                          e.target.value.length === 0 && setPasswordType(false);
                        }}
                      />
                    </label>

                    <label className="label">
                      <Link
                        className="label-text-alt link link-hover"
                        to="/login"
                      >
                        Forgot password?
                      </Link>
                    </label>
                  </div>

                  <div className="form-control">
                    <div className="form-control mt-6">
                      <button
                        disabled={!emailTyped || !passwordType}
                        className="btn btn-primary"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* devider */}
              <div>
                <div className="divider max-w-xs mx-auto px-4 ">Or</div>
              </div>
              {/* social login icons  */}
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
              {/* button text */}
              <div className="text-center mt-5">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link className="link text-blue-500" to={"/register"}>
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
