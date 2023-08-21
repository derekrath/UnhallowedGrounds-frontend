import * as React from "react";
import './NavBar.css';
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { AppContext } from "../AppContext.js";
import { useContext } from 'react';
// import RegularButton from "./LoginButton";
import Button from '@mui/material/Button';

import {AppBar, Box, Toolbar, Typography, Badge} from "@mui/material";


const cartItemCount = '';
// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
// const theme = createTheme({
//   palette: {
//     custom: createColor('#F40B27'),
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: yellow,
//     secondary: yellow
//   }
// });

export default function NavBar({title}) {
  
  const {setUserData, removeCookies, setShowLoginError, setShowLoginSuccess, setShowCreateUserSuccess} = useContext(AppContext);
  
  const handleLogout = (e) => {
    logout();
  };

   function logout() {
    // console.log('logging out')
    removeCookies('username-cookie')
    removeCookies('passwordRaw-hash-cookie')
    setShowCreateUserSuccess(false)
    setShowLoginError(false)
    setShowLoginSuccess(false)
    setUserData();
  }

    return (
        <AppBar position="static" sx={{backgroundColor:'black'}}>
            <Toolbar 
            sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            }}
            >
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'left',
                '& > *': {
                    m: 1,
                },
                }}
            >
                <Link to={`/login`}>
                    <Button 
                    // color="facebook"
                    // style={{ width: '80px'}}
                    >
                    Login
                    </Button>
                </Link>
                <Link to={'/login'}>
                    <Button 
                        // color="facebook"
                        // style={{ width: '80px'}}
                        onClick={(e) => handleLogout(e)}
                    >
                    Logout
                    </Button>
                </Link>
            </Box>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'left',
                '& > *': {
                    m: 1,
                },
                }}
            >
                <Typography
                variant="h3"
                noWrap
                >
                {title}
                </Typography>
            </Box>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'left',
                '& > *': {
                    m: 1,
                },
                }}
            >
                <Link to={`/cart`}>
                    <Button
                    // variant="contained"
                    // color="primary"
                    // style={{
                    //     // borderRadius: 35,
                    //     // backgroundColor: "white",
                    //     // padding: "18px 36px",
                    //     fontSize: "18px"
                    // }}
                        startIcon={    <Badge badgeContent={cartItemCount} classes={{badge:'custom-badge'}}><ShoppingBagIcon style={{ color: '#494a4b' }} /></Badge>}
                    >
                    {/* Cart */}
                    </Button>
                </Link>
            </Box>
            </Toolbar>
        </AppBar>
    );
  }