import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    // IconButton,
} from "@mui/material";
import Logo from '../assets/images/Logo.jpg';


function Appnavbar(){
    const history = useNavigate();

    const handleLoginClick = () => {
        history('/login');
    };

    const handleRegistrationClick = () => {
        history('/registration');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              {/* <div>{img}</div> */}
              <img
                    style={{ marginTop: 10,width: "40px", height: "40px"}}
                    src={Logo} // Use the imported image
                    alt="Logo"
                />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Sportz Events
              </Typography>
              <div>
            <Button color="inherit" onClick={handleLoginClick}>
                Login
            </Button>
            <Button color="inherit" onClick={handleRegistrationClick}>
                Register
            </Button>
        </div>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
export default Appnavbar;