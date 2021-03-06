import React from "react";
import background from "../images/background.png";
import Username from "../Components/Username";
import GoogleSignIn from "../Components/GoogleSignIn";
import Password from "../Components/Password";
import StyledButton from "../Components/StyledButton";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="relative">
      <img
        src={background}
        alt=""
        className="w-full h-screen transform absolute z-0"
      />

      <Header />

      <div className="absolute w-full h-full flex justify-center items-center mt-40">
        <div className="flex flex-col items-center">
          <Username placeholder="USERNAME" />
          <Password placeholder="PASSWORD" />
          <Password placeholder="Confirm password" />

          <div className="flex flex-row space-x-4 mt-8">
            <Link to="/login">
              {" "}
              <StyledButton text="LOG IN" />
            </Link>

            <GoogleSignIn text="Sign In" />
          </div>

          <p className="text-white text-lg tracking-wider mt-4">
            Forgot password?{" "}
            <span>
              <Link to="/signup">Sign-Up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
