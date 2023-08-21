import { useCookies } from 'react-cookie';
import { createContext, useEffect, useState, useCallback, useMemo } from 'react';
// import { useCookies } from 'react-cookie';

const axios = require('axios');

export const AppContext = createContext(null);

function AppProvider({ children }) {

  // server url:
    const dev = process.env.NODE_ENV !== 'production'; // true or false
  // for Heroku:
    const url = dev ? `http://localhost:${process.env.REACT_APP_PORT}` : 'https://z-prefix-server.herokuapp.com';
  // for DigitalOcean:
  // const url = dev ? `http://localhost:${process.env.REACT_APP_PORT}` : 'https://z-prefix-ui.web.app';
    const host = url;

  // app context:
  // const [] = useState([])

  // products context:
  const [productList, setProductList] = useState([])

  // user context:
  const [userData, setUserData] = useState('')
  const [usernameInput, setUsername] = useState('')
  const [passwordRaw, setPasswordRaw] = useState('');
  const [cookies, setCookies, removeCookies] = useCookies(['username-cookie', 'passwordRaw-hash-cookie']);
  const [showLoginError, setShowLoginError] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [showCreateUserSuccess, setShowCreateUserSuccess] = useState(false);
  const [messageText, setMessageText] = useState('')

  useEffect(() => {
    let fakeProducts = [
      { name: `MatterMost`, description: `IL2 Chat platform`, url: `https://chat.il2.dso.mil/`, icon_url: `${host}/images/MatterMost.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'MatterMost', icon_alt_grey: 'MatterMost_Grey', icon_grey_alt: `${host}/images/MatterMost_Grey.svg` },
      { name: `Jira`, description: `IL2 Ticket System`, url: `https://jira.il2.dso.mil/secure/Dashboard.jspa`, icon_url: `${host}/images/Jira.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Jira', icon_grey_alt: 'Jira_Grey', icon_url_grey: `${host}/images/Jira_Grey.svg` },
      { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon_url: `${host}/images/Confluence.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Confluence', icon_grey_alt: 'Confluence_Grey', icon_url_grey: `${host}/images/Confluence_Grey.svg` }
    ]
    setProductList(fakeProducts);
}, [host]);

  const nextMonth = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1);
  }, []);

  const loginUser = 
  useCallback((username, password) => 
  {
    axios({
      method: 'post',
      url: `${url}/login`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      if(res){
        let passwordHash = res.data;
        setCookies('username-cookie', username, {expires: nextMonth})
        // !!!!!Change to the hash, hide the raw password!!!!
        setCookies('password-hash-cookie', passwordHash, {expires: nextMonth})
        setShowLoginError(false)
        setShowLoginSuccess(true)
        setShowCreateUserSuccess(false)
        // !!!!!Change to the hash, hide the raw password!!!!
        setUserData({user_username: username, passwordHash: passwordHash})
        setMessageText('LOGIN SUCCESSFUL')
      }
    })
    .catch(e => {
      setCookies('username-cookie','', {expires: nextMonth})
      setCookies('password-hash-cookie','', {expires: nextMonth})
      setShowLoginError(true)
      setShowLoginSuccess(false)
      setShowCreateUserSuccess(false)
      setMessageText('INVALID USERNAME OR PASSWORD')
    });
  }, [url, nextMonth, setCookies]);

  // login with cookies
  useEffect(() => {
    let username = cookies['username-cookie']
    let passwordHash = cookies['password-hash-cookie']
    if (username && passwordHash) {
      let password = passwordHash;
      loginUser(username, password)
    }
  }, [cookies, loginUser])

  const valueObj = {
    url, 
    cookies, 
    usernameInput, 
    passwordRaw, 
    userData, 
    showLoginError, 
    showLoginSuccess, 
    showCreateUserSuccess, 
    messageText, 
    productList, 
    setUserData, 
    setUsername, 
    setPasswordRaw, 
    loginUser, 
    setCookies, 
    removeCookies, 
    setShowLoginError, 
    setShowLoginSuccess, 
    setShowCreateUserSuccess, 
    setMessageText, 
    setProductList
  };

  return (
    <div className="App-provider">
      <AppContext.Provider value={valueObj}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export default AppProvider;
