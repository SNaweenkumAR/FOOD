import React, { useState } from 'react'
import'./LogInPopup.css'
import { assets } from '../../assets/assets'

 const LogInPopup = ({setshowlogin}) => {

  const[CurrState,setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form  className='login-popup-container'>
               <div className="login-popup-title">
                   <h2>{CurrState}</h2>
                   <img src={assets.cross_icon}  onClick={() => setshowlogin(false)} alt="" />
               </div>
               <div className="login-popup-inputs">
                {CurrState === "Login" ? <></> : <input type="text" placeholder='Your Name' required/>}
                   
                   <input type="email" placeholder='Your E-Mail' required />
                   <input type="password"  placeholder='Password' required/>
                  
               </div>
               <button>{CurrState=== 'Sign Up' ? "Create account" : "Login"}</button>
               <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
               </div>
             
              { CurrState === "Login" ?  <p>Create a New account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p> } 
        </form>
    </div>
  )
}

export default LogInPopup