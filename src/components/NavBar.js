import "./NavBar.css"; // Replace with your CSS file path
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext.js";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";
// import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
  //   InputBase,
  //   IconButton,
  //   List,
  //   ListItem,
  //   ListItemText,
} from "@mui/material";

// Nav Link text:
const theme = createTheme();
theme.typography.body1 = {
  color: "#684f46",
  fontSize: 16,
  // "@media (min-width:600px)": {
  //   fontSize: "1.5rem",
  // },
  // [theme.breakpoints.up("md")]: {
  //   fontSize: "2.4rem",
  // },
};

const cartItemCount = "";

const NavBar = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    setUserData,
    removeCookies,
    setShowLoginError,
    setShowLoginSuccess,
    setShowCreateUserSuccess,
  } = useContext(AppContext);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    logout();
    handleMenuClose();
  };

  function logout() {
    // console.log('logging out')
    removeCookies("username-cookie");
    removeCookies("passwordRaw-hash-cookie");
    setShowCreateUserSuccess(false);
    setShowLoginError(false);
    setShowLoginSuccess(false);
    setUserData();
  }

  // const searchData = [
  //     //   'Coffee Beans',
  //     //   'Coffee Accessories',
  //     //   'Brewing Equipment',
  //     //   'Coffee Subscription',
  //     //   'Gifts',
  // ];

  //   const [searchTerm, setSearchTerm] = useState('');
  //   const [filteredResults, setFilteredResults] = useState([]);

  //   const handleSearchChange = (e) => {
  //     const value = e.target.value;
  //     setSearchTerm(value);

  //     if (value.trim() !== '') {
  //       const results = searchData.filter((item) =>
  //         item.toLowerCase().includes(value.toLowerCase())
  //       );
  //       setFilteredResults(results);
  //     } else {
  //       setFilteredResults([]);
  //     }
  //   };

  //   const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const handleSearchIconClick = () => {
  //   setIsSearchOpen((prev) => !prev);
  // };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "black",
          // backgroundColor: "#121217",
          height: "110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          "@media (max-width: 700px)": {
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        {/* First Row: Title and Account */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            // padding: "10px",
            "& > *": {
              m: 1,
            },
          }}
        >
          {/* First of Three Columns */}
          <Box
            sx={{
              // display: "flex",
              flex: 1,
              // flexDirection: "row",
              // alignItems: "center",
              // justifyContent: "space-between",
              // "& > *": {
              //   m: 1,
              // },
            }}
          >
            {/* Nothing */}
          </Box>
          {/* Second of Three Columns */}
          <Box
            sx={{
              display: "flex",
              flex: 2,
              // flexShrink: 1,
              // flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // "& > *": {
              //   m: 1,
              // },
            }}
          >
            <Link to={`/Home`}>
              <Button>
                <Typography
                  variant="h3"
                  noWrap
                  sx={{
                    fontFamily: "Garamond",
                    fontSize: 36,
                    color: "#ffebcd",
                  }}
                >
                  {title}
                </Typography>
              </Button>
            </Link>
          </Box>
          {/* Third of Three Columns */}
          <Box
            sx={{
              display: "flex",
              flex: 1,
              // flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              //   "& > *": {
              //     m: 1,
              //   },
            }}
          >
            {/* Icons */}
            <ThemeProvider theme={theme}>
              {/* First Icon */}
              <div>
                <Link to={`/cart`}>
                  <Button
                    startIcon={
                      <Badge
                        badgeContent={cartItemCount}
                        classes={{ badge: "custom-badge" }}
                      >
                        <ShoppingBagIcon style={{ color: "#494a4b" }} />
                      </Badge>
                    }
                  />
                </Link>
              </div>
              <div>
                {/* Second Box Icon */}
                <Button onClick={handleMenuClick}>
                  <AccountCircleIcon style={{ color: "#494a4b" }} />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    // backgroundColor: "black",
                    // opacity: 0.8,
                    // mt: "1px",
                    "& .MuiMenu-paper": { backgroundColor: "#121217" },
                  }}
                  // TransitionComponent={Fade}
                >
                  <MenuItem>
                    <Link to={`/account`}>
                      <Button>
                        <Typography variant="body1">Account</Typography>
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/login`}>
                      <Button>
                        <Typography variant="body1">Login</Typography>
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={"/login"}>
                      <Button onClick={(e) => handleLogout(e)}>
                        <Typography variant="body1">Logout</Typography>
                      </Button>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </ThemeProvider>
          </Box>
        </Box>

        {/* Second Row: Pages */}
        <Box
          name="NavLinks"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              // justifyContent: "center",
              width: "auto",
            },
            // "& > *": {
            //   m: 1,
            // },
          }}
        >
          <ThemeProvider theme={theme}>
            <Box>
              <Link to={`/Products`}>
                <Button>
                  <Typography variant="body1">Coffee</Typography>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={`/Gear`}>
                <Button>
                  <Typography variant="body1">Artifacts</Typography>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={`/About`}>
                <Button>
                  <Typography variant="body1">History</Typography>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={`/About`}>
                <Button>
                  <Typography variant="body1">Library</Typography>
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={`/Contact`}>
                <Button>
                  <Typography variant="body1">Correspondence</Typography>
                </Button>
              </Link>
            </Box>
          </ThemeProvider>
        </Box>

        {/* <Box
			sx={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				backgroundColor: 'white',
				borderRadius: '5px',
				padding: '5px',
				boxShadow: 1,
			}}
			>
			<InputBase
				placeholder="Search..."
				sx={{ ml: 1, flex: 1 }}
				value={searchTerm}
				onChange={handleSearchChange}
			/>
			<IconButton onClick={handleSearchIconClick}>
				<SearchIcon />
			</IconButton>
			{isSearchOpen && filteredResults.length > 0 && (
				<List sx={{ position: 'absolute', width: '100%', mt: 1 }}>
				{filteredResults.map((result) => (
					<ListItem key={result}>
					<ListItemText primary={result} />
					</ListItem>
				))}
				</List>
			)}
		</Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
