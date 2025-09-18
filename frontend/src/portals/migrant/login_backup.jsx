import React, {useState} from "react";
import './login.css'


function LoginForm() {

    const [status, setStatus] = useState("login");

  const submitForm = status === "login" ? "Login" : "Register";
  const switchType = status === "login" ? "Don't Have an account?" : "Already have an account?";
  const switchLink = status === "login" ? "Register Now" : "Login Now";

return <div className="BackGround"> <div className="OuterBox"> <form className = "formBox">
<div className="Title"><h2>HOSPITAL LOGIN</h2></div>

<div className="emailBox">
    <label>Enter Email Id : </label>
    <input type="text" />
</div>

<div className= "password">
    <label>Password : </label>
    <input type="password" />
    <br></br>
   {status === "register" && (
    <label id="forgotPassword"> Forgot Password? <a id="passwordReset">Click Here</a></label>)
   }
</div>

      {status === "register" && (<>
        <div className="repeatPassword">
          <label>Repeat Password : </label>
          <input type="password" />
        </div>

        <div className="positionDropdown">
        <label>What is you position?: </label>
        <select id="post">
          <option value="doctor">Doctor</option>
          <option value="staff">Staff</option>
        </select>
        </div></>
      )}


<div className="submit">
    <button id="Submit">{submitForm}</button>
</div>

<div className="switch">
    <label> {switchType} <a href='#' onClick={ (e) => {e.preventDefault();setStatus(status === "login" ? "register" : "login");
}}>{switchLink}</a></label>
</div>

</form>
</div>
</div>
    }
export default LoginForm;