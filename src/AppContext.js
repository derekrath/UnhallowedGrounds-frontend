import { useCookies } from 'react-cookie';
import { createContext, useEffect, useState, useCallback, useMemo } from 'react';
// import { useCookies } from 'react-cookie';

const productImages = require.context("./images/coffeebags", false, /\.(png)$/);
const imageFiles = productImages.keys().map(productImages);

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
  const [promotionsList, setPromotionsList] = useState([])

  // user context:
  const [userData, setUserData] = useState('')
  const [usernameInput, setUsername] = useState('')
  const [passwordRaw, setPasswordRaw] = useState('');
  const [cookies, setCookies, removeCookies] = useCookies(['username-cookie', 'passwordRaw-hash-cookie']);
  const [showLoginError, setShowLoginError] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [showCreateUserSuccess, setShowCreateUserSuccess] = useState(false);
  const [messageText, setMessageText] = useState('')


//   useEffect(() => {
//     let fakeProducts = [
//       // { name: `Confluence`, description: `Collaboration platform`, url: `https://confluence.il2.dso.mil/#all-updates`, icon_url: `${host}/images/Confluence.svg`, role: '/Platform One/Party Bus/IL2/IL2-Atlassian', icon_alt: 'Confluence', icon_grey_alt: 'Confluence_Grey', icon_url_grey: `${host}/images/Confluence_Grey.svg` }
//     ]
//     setProductList(fakeProducts);
// }, [host]);

useEffect(() => {
  let fakeProducts = [
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Sally Dark Roast`, description: `Toasted Marshmallow`, icon_url: imageFiles[2], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    // Add more products as needed
  ];
  setProductList(fakeProducts);
}, []);

useEffect(() => {
  let fakePromotions = [
    { name: `Horseman Light Roast`, description: `Pumpkin Spice`, icon_url: imageFiles[0], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
    { name: `Jack Medium Roast`, description: `Chocolate Hazelnut`, icon_url: imageFiles[1], amount: 12, rating: 2.5, subscription: true, price: 14.99 },
     // Add more products as needed
  ];
  setPromotionsList(fakePromotions);
}, []);

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
    promotionsList, 
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
    setProductList,
    setPromotionsList
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
