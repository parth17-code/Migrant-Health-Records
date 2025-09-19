import './App.css';
import {useState} from 'react';

import LoginForm from './login';
import Dashboard from './dashboard';
import RegisterForm from './register';


function App() {
  const [page,setPage] = useState("login");

  return (
    <>
    {page==="login" ? (<LoginForm changePage={setPage}/>) : page ==="register" ? (<RegisterForm changePage={setPage}/>) : page==="Dashboard" && (<Dashboard changePage={setPage}/>)
    }
    </>
  )
}

export default App
