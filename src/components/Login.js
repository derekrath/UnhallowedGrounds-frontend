import React from "react";
import { useContext } from 'react';
// import "../styles.css";
// import Button from "./LoginButton";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { AppContext } from "../AppContext";
import TextField from '@mui/material/TextField';

// const cors = require('cors');

const axios = require('axios');

export default function Login() {

  const dev = process.env.NODE_ENV !== 'production';
//   change this from frontend to backend Heroku app url:
  const url = dev ? 'http://localhost:8080' : 'https://unhallowed-grounds-3780794e6cd5.herokuapp.com';

  const {
    usernameInput, 
    setUsername, 
    passwordRaw, 
    setPasswordRaw, 
    // userData, 
    showLoginError, 
    showLoginSuccess, 
    showCreateUserSuccess, 
    messageText, 
    loginUser, 
    setShowLoginError, 
    setShowLoginSuccess, 
    setShowCreateUserSuccess, 
    setMessageText
} = useContext(AppContext);

  async function createUserAccount(username, passwordRaw) {
    axios({
      method: 'post',
      url: `${url}/users`,
      data: {
        user_username: username,
        passwordRaw: passwordRaw
      }
    })
    .then(res => {
      if(res){
        setMessageText(res.data.message)
        setShowCreateUserSuccess(true)
        setShowLoginError(false)
        setShowLoginSuccess(false)
      }
    })
    .catch(e => {
      setMessageText('USERNAME IS ALREADY IN USE')
      setShowCreateUserSuccess(false)
      setShowLoginError(true)
      setShowLoginSuccess(false)
    })
  }

//   useEffect(() => {
//     const getUsers = async () => {
//       axios.get(`${url}/users`)
//         .then(userList => setUsers(userList.data));
//     }
//     getUsers();
//   }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // login(e.target[0].value, e.target[1].value)
  }

  const submitLogin = (e) => {
    setShowLoginError(false)
    e.preventDefault();
    // let password = passwordRaw;
    let username = usernameInput;
    loginUser(username, passwordRaw);
  };

  const submitAccount = (e) => {
    e.preventDefault();
    createUserAccount(usernameInput, passwordRaw);
  };

  return (
    <div className="LoginApp">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          required
          // id="filled-required"
          label="Username"
          placeholder="Username"
          variant="filled"
          value={usernameInput}
          onChange={e => setUsername(e.target.value)}
        />
        <br/>
        <TextField
          required
          // id="filled-password-input"
          label="Password"
          type="password"
          placeholder="Password"
          variant="filled"
          value={passwordRaw}
          onChange={e => setPasswordRaw(e.target.value)}
        />
        <br/>
        <Button 
            type="submit"
            onClick={(e) => submitLogin(e)}
        >
          Log in
        </Button>
        <br/>
        <Button 
            type="submit" 
            onClick={(e) => submitAccount(e)}
        >
          Create Account
        </Button>
        {showLoginError ? <Alert severity="error">{messageText}</Alert> : <></>}
        {showLoginSuccess ? <Alert severity="success">{messageText}</Alert> : <></>}
        {showCreateUserSuccess ? <Alert severity="info">{messageText}</Alert> : <></>}
      </form>
    </div>
  );
}