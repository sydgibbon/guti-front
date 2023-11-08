import { useEffect, useState } from "react";
import "./LoginView.css";
import { useNavigate } from "react-router-dom"
import { authService } from "../../../domain/services/api/Auth.service";

import Logo from "../../assets/img/logo/guti-logo.png"

const LoginView = () => {
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      navigate("/")
    }
  }, [isLogged])

  const handleLogin = (e: any) => {
    e.preventDefault();
    authService.login(e.target.username.value, e.target.password.value).then(response =>
      setIsLogged(response));
  }


  return (
    <div className="flex flex-col items-center w-full h-screen login-container">
      <div className="mt-16 logo-section">
        <img className="mx-auto" src={Logo} alt="guti-logo" width="200px" />
      </div>
      <div className="flex flex-col items-center w-3/5 my-8 bg-white border rounded-md form-section border-secondary-light">
        <div className="w-1/3 pb-4 mt-20 text-2xl font-semibold text-center border-b account-login border-secondary-dark">
          <span className="">Account Login</span>
        </div>
        <div className="items-center w-full mx-auto text-center login-form">
          <form onSubmit={handleLogin}>
            <div className="w-1/3 mx-auto mt-8 user-input">
              <p className="mb-1 text-left">Username</p>
              <input
                type="text"
                name="username"
                id="username"
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
            <div className="w-1/3 mx-auto text-left remember-me mt-9">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="mr-2.5 checkbox h-4 w-4"
              />
              <span className="mb-2">Remember me</span>
            </div>
            <button
              type="submit"
              className="block w-1/3 h-10 mx-auto font-semibold border rounded-md login-button bg-primary-light mb-28 mt-9 border-orange-dark"
            >
              Login
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

export default LoginView;
