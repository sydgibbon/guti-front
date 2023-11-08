import { useEffect, useState } from "react";
import "./SignUpView.css";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../domain/services/api/Auth.service";

import Logo from "../../assets/img/logo/guti-logo.png";

const SignUpView = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      navigate("/");
    }
  }, [isRegistered]);

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const confirmPassword = e.target.confirmPassword.value;
    const datosdelform = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
    };
    console.log(datosdelform);

    // Check if passwords match before registering
    if (password === confirmPassword) {
      authService
        .register(username, email, password)
        .then(() => {
          setIsRegistered(true);
          // Navigate to login page after successful registration
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
          // Handle registration error
        });
    } else {
      // Handle password mismatch error
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen login-container">
      <div className="mt-16 logo-section">
        <img
          className="mx-auto"
          src={Logo}
          alt="guti-logo"
          width="200px"
        />
      </div>
      <div className="flex flex-col items-center w-3/5 my-8 bg-white border rounded-md form-section border-secondary-light">
        <div className="w-1/3 pb-4 mt-20 text-2xl font-semibold text-center border-b account-login border-secondary-dark">
          <span className="">Create Account</span>
        </div>
        <div className="items-center w-full mx-auto text-center login-form">
          <form onSubmit={handleSignUp}>
            <div className="w-1/3 mx-auto mt-8 user-input">
              <p className="mb-1 text-left">Username</p>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md"
              />
            </div>
            <div className="w-1/3 mx-auto mt-6 email-input">
              <p className="mb-1 text-left">Email</p>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md"
              />
            </div>
            <div className="w-1/3 mx-auto mt-6 password-input">
              <p className="mb-1 text-left">Password</p>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md"
              />
            </div>
            <div className="w-1/3 mx-auto mt-6 password-input">
              <p className="mb-1 text-left">Confirm Password</p>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md"
              />
            </div>
            <button
              type="submit"
              className="block w-1/3 h-10 mx-auto font-semibold border rounded-md login-button bg-primary-light mb-28 mt-9 border-orange-dark"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="mb-16 text-center footer">
        <p>GUTI Copyright (C) 2022</p>
      </div>
    </div>
  );
};

export default SignUpView;
