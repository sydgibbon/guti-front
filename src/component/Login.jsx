import React from 'react'
import '../style/Login.css'
import logo from '../images/guti-logo.png'

const Login = () => {
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
          <form action="">
            <div className='user-input w-1/3 mx-auto mt-8'>
              <p className='text-left mb-1'>Username</p>
              <input type="text" name="username" id="username" className='w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md' />
            </div>
            <div className='password-input w-1/3 mx-auto mt-6'>
              <p className='text-left mb-1'>Password</p>
              <input type="password" name="password" id="password" className='w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md' />
            </div>
            <div className='remember-me w-1/3 text-left mx-auto mt-9'>
              <input type="checkbox" name="remember-me" id="remember-me" className='mr-2.5 checkbox h-4 w-4' />
              <span className='mb-2'>Remember me</span>
            </div>
            <button type='button' className='block login-button w-1/3 rounded-md bg-primary-light mx-auto mb-28 mt-9 h-10 font-semibold border border-orange-dark'>Login</button>
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

export default Login