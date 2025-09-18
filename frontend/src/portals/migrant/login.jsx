import React, { useState } from 'react';

function LoginForm({changePage}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Stop the page from reloading
    // Here you would typically handle the login logic, e.g., call an API
    console.log('Logging in with:', { email, password });
    // On successful login, change the page
    changePage("Dashboard");
  };

return <div className="Background flex items-center justify-center min-h-screen bg-none "> 
<div className="OuterBox bg-[#0870CF] w-sm rounded-md p-8"> 
  
<form className = "formBox" onSubmit={handleLogin}>
<div className="Title text-center text-2xl font-bold text-white mb-6"><h2>HOSPITAL LOGIN</h2></div>

<div className="emailBox flex flex-col my-4">
    <label className="mb-1">Enter Email Id : </label>
    <input type="text" onChange={(e) => setEmail(e.target.value)} className="bg-white text-black border border-gray-100 rounded focus:ring-2" required/>
</div>

<div className= "password flex flex-col my-4">
    <label className="mb-1">Password : </label>
    <input type="password" className="bg-white rounded text-black" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    <label id="forgotPassword"> Forgot Password? <a id="passwordReset">Click Here</a></label>
</div>

<div className="mt-6">
    <button type="submit" className="w-full bg-[#4caf50] text-[#FFFFF] font-bold py-2 px-4 rounded hover:bg-[#4caf50] hover:shadow-lg hover:-translate-y-1">Login</button>
</div>

<div className="switch text-center text-white mt-4">
    <label> Don't Have an account? <a href='#' onClick={ (e) => {e.preventDefault();changePage("register");
}} className="font-bold hover:underline text-[#4caf50]">Register Now</a></label>
</div>

</form>
</div>
</div>
    }
export default LoginForm;