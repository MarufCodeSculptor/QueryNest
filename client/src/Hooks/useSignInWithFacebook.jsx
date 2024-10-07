import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const useSignInWithFacebook = () => {
  const { facebookSignIn } = useAuth();

  const navigate = useNavigate();
  const fireFacebookLogin = async () => {
    try {
      const { user } = await facebookSignIn();
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

  return fireFacebookLogin;
};

export default useSignInWithFacebook;
