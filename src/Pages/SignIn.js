import React from 'react'
import background from '../images/background.png'
import Username from "../components/Username";
import GoogleSignIn from "../components/GoogleSignIn";
import Password from "../components/Password";
import StyledButton from "../components/StyledButton";
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function SignIn() {

    return (
        <div className="relative">
            <img src={background} alt="" className="w-full h-screen transform absolute z-0" />


            <Header />

            <div className="absolute w-full h-full flex justify-center items-center mt-40">

                <div className="flex flex-col items-center">
                    <Username placeholder="USERNAME" />
                    <Password placeholder="PASSWORD" />


                    <div className="flex flex-row space-x-4 mt-8">
                        <StyledButton text="LOG IN" />
                        <GoogleSignIn text="Sign In" />
                    </div>

                    <p className="text-white text-lg tracking-wider mt-4">Forgot password?  <span><Link to="/signup">Sign-Up</Link></span> </p>
                </div>
            </div>

        </div>
    )
}

export default SignIn
