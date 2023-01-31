import React , { useRef, useEffect } from 'react';
import '../style/Login.css'
import logo from '../images/guti-logo.png'

// importando cumtom hooks UserService 
import { useServiceUser } from '../hooks/useServiceUser.js'

// importando servicios 
import { userLogin } from '../api/axios';

const Login = () => {
  const username = useRef()
  const password = useRef()

  const { login } = useServiceUser()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('logguedUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      login(user)
    }
  }, [login])
  
  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value
    }

    try {
      
      const response = await userLogin(user)
      
      if(response.status === 202 ){
        alert('Login exitoso')
        login(user)
        window.localStorage.setItem(
          'logguedUser', JSON.stringify(user)
        )
      }else{
        alert('Login Fallido')
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col w-full items-center login-container h-screen'>
      <div className='logo-section mt-16'>
        <img className='mx-auto' src={logo} alt="guti-logo" width='200px' />
      </div>
      <div className='form-section bg-white rounded-md w-3/5 border border-secondary-light flex flex-col items-center my-8'>
        <div className='account-login mt-20 pb-4 border-b border-secondary-dark w-1/3 text-center text-2xl font-semibold'>
          <span className=''>Account Login</span>
        </div>
        <div className='login-form items-center mx-auto w-full text-center'>
          <form onSubmit={handleLogin}>
            <div className='user-input w-1/3 mx-auto mt-8'>
              <p className='text-left mb-1'>Username</p>
              <input ref={username} type="text" name="username" id="username" className='w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md' />
            </div>
            <div className='password-input w-1/3 mx-auto mt-6'>
              <p className='text-left mb-1'>Password</p>
              <input ref={password} type="password" name="password" id="password" className='w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md' />
            </div>
            <div className='remember-me w-1/3 text-left mx-auto mt-9'>
              <input type="checkbox" name="remember-me" id="remember-me" className='mr-2.5 checkbox h-4 w-4' />
              <span className='mb-2'>Remember me</span>
            </div>
            <button type='submit' className='block login-button w-1/3 rounded-md bg-primary-light mx-auto mb-28 mt-9 h-10 font-semibold border border-orange-dark'>Login</button>
          </form>
        </div>
      </div>
      <div className='footer text-center mb-16'>
        <p>
          GUTI Copyright (C) 2022
        </p>
      </div>
    </div>
  )
}

export default Login;