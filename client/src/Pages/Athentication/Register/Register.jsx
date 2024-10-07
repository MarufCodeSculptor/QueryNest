import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { IoPersonCircleOutline } from "react-icons/io5";

import Swal from "sweetalert2";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import useSignInWithGoogle from "../../../Hooks/useSignInWithGoogle";
const Register = () => {
  const [passMached, setPassMached] = useState(true);
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const googlePopUp = useSignInWithGoogle();

  const { user, signUp, updateName } = useAuth();

  const handleRegistration = async (form) => {
    setLoginLoading(true);
    const { email, password, name } = form;
    try {
      const { user } = await signUp(email.value, password.value);
      updateName(name.value);
      setLoginLoading(false);

      if (user) {
        form.reset();
        setSubmit(false);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome to our platform have a nice journey!",
          customClass: {
            popup: "font-lato",
          },
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "oops",
        text: err?.message,
        customClass: {
          popup: "font-lato",
        },
      });

      setLoginLoading(false);
    }
  };

  return (
    <div className="flex  items-center justify-center min-h-screen md:bg-gray-200 font-lora">
      <div className="md:flex  md:flex-row flex-col items-stretch justify-center md:max-w-6xl md:w-full 	  md:bg-white md:rounded-lg md:shadow-md">
        <div className="md:w-1/2  bg-blue-300 rounded-l-lg hidden md:block">
          <img
            className=" h-full mx-auto"
            src="https://i.ibb.co.com/Th0599v/register.png"
            alt=""
          />
        </div>
        {/* right item */}
        <div className="md:w-1/2">
          <div className="p-5">
            {/* heading */}
            <h2 className="text-2xl font-bold text-center my-10  ">Register</h2>
            {/* form container */}
            <div className="flex items-center justify-center ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRegistration(e.target);
                }}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    <IoPersonCircleOutline className="text-blue-500 text-xl" />
                    <input
                      type="text"
                      className="grow"
                      name="name"
                      placeholder="Full Name"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    <MdEmail className="text-blue-500" />
                    <input
                      type="email"
                      className="grow"
                      name="email"
                      placeholder="Email"
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
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="grow"
                      placeholder="password"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <IoMdKey className="text-xl text-blue-500" />
                    <input
                      onChange={(e) => {
                        setPassMached(false);

                        if (password === e.target.value) {
                          setPassMached(true);
                          setSubmit(true);
                        }
                      }}
                      type="password"
                      className="grow"
                      name="confirmPassword"
                      placeholder="confirm password"
                    />
                  </label>
                </div>

                {!passMached && (
                  <p className="text-red-700"> password not matched </p>
                )}

                <div className="form-control">
                  <div className="form-control mt-6">
                    <button disabled={!submit} className="btn btn-primary">
                      {(loginLoading && <BeatLoader />) || "Register"}
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
                onClick={googlePopUp}
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
                already have an account?{" "}
                <Link className="link text-blue-500" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
