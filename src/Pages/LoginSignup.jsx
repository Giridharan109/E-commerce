import React from 'react'
import './CSS/Loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your password' />
          <button>Continue</button>
          <p className='loginsingnup-login'>Already have an account <span>Login Here</span></p>
        <div className="loginsignup-agree">
           <input type="checkbox" name='' id='' />
           <p>By Continuing , i agree to the terms and condition policy</p>
        </div>
        </div>
      </div>
      </div>
  )
}

export default LoginSignup