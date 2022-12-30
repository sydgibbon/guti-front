import React , { useRef } from 'react';
import '../style/Login.css'
import logo from '../images/guti-logo.png'

// importando hooks 
import { useServiceUser } from '../hooks/useServiceUser.js'

// importando servicios 
import { userLoguin } from '../api/axios';

const Login = () => {

  const { login } = useServiceUser()

  const username = useRef()
  const password = useRef()
  
  const handleLoguin = async (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value
    }

    try {
      
      const response = await userLoguin(user)
      
      if(response.status === 201 ){
        // ! aqui debemoos guardar el token que envie el backend
        alert('Loguin exitoso')
        login(true)
      }else{
        alert('Loguin Fallido')
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center h-screen login-container'>
      <div className='w-full h-1/4 flex justify-center items-center logo-section'>
        <img className='mx-auto' src={logo} alt="guti-logo" width='200px' />
      </div>
      <div className='form-section bg-white rounded-md h-auto w-5/6 md:w-4/5 lg:w-3/5 border border-secondary-light p-2 md:p-6'>
        <div className='login-form flex flex-col items-center justify-center h-full w-full text-center'>
          <div className='account-login border-b border-secondary-dark w-2/3 my-4 text-center'>
            <span className='text-2xl font-semibold'>Account Login</span>
          </div>
          <form className='w-full' onSubmit={handleLoguin}>
            <div className='user-input w-2/3 mx-auto mt-4'>
              <p className='text-left mb-1'>Username</p>
              <input ref={username} type="text" name="username" id="username" className='w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md' />
            </div>
            <div className='password-input w-2/3 mx-auto mt-4'>
              <p className='text-left mb-1'>Password</p>
              <input ref={password} type="password" name="password" id="password" className='w-full h-10 pl-2.5 bg-secondary-light border border-secondary-dark rounded-md' />
            </div>
            <div className='remember-me w-2/3 text-left mx-auto mt-4'>
              <input type="checkbox" name="remember-me" id="remember-me" className='mr-2.5 checkbox h-4 w-4' />
              <span className='mb-2'>Remember me</span>
            </div>
            <button type='submit' className='block login-button text-white w-2/3 rounded-md bg-primary-light mx-auto mb-12 mt-4 h-10 font-semibold border border-orange-dark'>Login</button>
          </form>
        </div>
      </div>
      <div className='w-full h-1/4 m-auto flex justify-center items-center'>
        <p>
          GUTI Copyright (C) 2022
        </p>
      </div>
    </div>
  )
}

export default Login;