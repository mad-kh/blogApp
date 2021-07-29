import React from 'react'
import { Link } from "react-router-dom";
import {useState} from "react"
import './Login.css'
import { useDispatch } from "react-redux"
//import {addUser} from "../../redux/actions/usersAction"
import {loginUser} from "../../utiles/index"
import axios from 'axios';


function Login() {
    const [loginData, setLoginData] = useState({})
  const handleChange=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
    //const dispatch = useDispatch()

const handleSubmit= (e)=> {
   e.preventDefault();

        axios.post("/api/auth/login",loginData)
              .then((res)=>{loginUser(res.data.data);alert(res.data.msg)})
               .catch((err)=>alert(err.res.data.msg))
               console.log(loginData)
    }

    return (
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm"  >
        <label>Username</label>
        <input className="loginInput" type="text" name="username" placeholder="Enter your name..." onChange={handleChange} />
        <label>Password</label>
        <input className="loginInput" type="password" name="password" placeholder="Enter your password..."  onChange={handleChange}/>
        <button className="loginButton" onClick={handleSubmit}>Login</button>
      </form>
        <button className="loginRegisterButton">  <Link className="Linkcolor" to="/register">
        Register
      </Link></button>
    </div>
    )
}

export default Login
