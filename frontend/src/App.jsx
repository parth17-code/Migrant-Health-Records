import './App.css';
import {useState} from 'react';

import LoginForm from './portals/migrant/login';
import Dashboard from './portals/migrant/dashboard';
import RegisterForm from './portals/migrant/register';


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
