import React from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const useSignInWithGoogle = () => {
  const { googleSignIn } = useAuth();


  
  const navigate = useNavigate();
  const fireGoogleLogin = async () => {
    try {
      const { user } = await googleSignIn();
      if (user) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome  to our platform have a nice journey!",
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
        title: "Login failed",
        text: err?.message,
        customClass: {
          popup: "font-lato",
        },
      });
    }
  };

  return fireGoogleLogin;
};

export default useSignInWithGoogle;
