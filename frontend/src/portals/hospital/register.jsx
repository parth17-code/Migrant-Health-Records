import React, { useState } from 'react';

function RegisterForm({changePage}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log({email,password,confirmPassword});
    changePage("Dashboard");
  };

return <div className="Background flex items-center justify-center min-h-screen bg-none"> 
<div className="OuterBox bg-[#0870CF] w-sm rounded-md p-8"> 
  
<form className = "formBox" onSubmit={handleSubmit}>
<div className="Title text-center text-2xl font-bold text-white mb-6"><h2>HOSPITAL REGISTRATION</h2></div>

<div className="emailBox flex flex-col my-4">
    <label className="mb-1 text-white">Enter Email Id : </label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white text-black border border-gray-100 rounded p-2 focus:ring-2" required />
</div>

<div className= "password flex flex-col my-4">
    <label className="mb-1 text-white">Password : </label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white rounded text-black p-2" required />
</div>

<div className="repeatPassword flex flex-col my-4">
          <label className="mb-1 text-white">Repeat Password : </label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-white rounded text-black p-2" required />
</div>


<div className="submit mt-6">
    <button type="submit" id="Submit" className="w-full bg-[#4caf50] text-white font-bold py-2 px-4 rounded hover:bg-green-600">Register</button>
</div>

<div className="switch text-center text-white mt-4">
    <label> Already have an account? <a href='#' onClick={ (e) => {e.preventDefault();changePage("login");
}} className="font-bold hover:underline text-[#4caf50]">Login Now</a></label>
</div>

</form>
</div>
</div>
    }
export default RegisterForm;