import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import { Navigate, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
// import { createContext, useEffect, useState, useContext, useCallback, useMemo } from 'react';
// import { useCookies } from 'react-cookie';
// import { AppContext } from "./AppContext.js";

// const axios = require('axios');

function App() {

  // const {
  //   url,
  //   cookies,
  //   setCookies,
  //   setUserData,
  //   setShowLoginError,
  //   setShowLoginSuccess,
  //   setShowCreateUserSuccess,
  //   setMessageText
  // } = useContext(AppContext);
  
  return (
  <div className="App">
    <NavBar title="Unhallowed Grounds" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  </div>
  );
}

export default App;
