import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import Account from './components/Account';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';
import { Navigate, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar2.js";
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
    <NavBar title="UNHALLOWED GROUNDS" />
    <div className="App-content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
