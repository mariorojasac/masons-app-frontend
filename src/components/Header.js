import * as React from "react";
import { logOut } from "../services/firebase";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";



const Header = (props) => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "red" }}>
          <Toolbar>
            {props.user ? (
              <>
                <img
                  src="https://i.imgur.com/OVOPbLz.jpeg"
                  alt="masonsapp"
                  style={{ height: 100 }}
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Welcome, {props.user.displayName}
                </Typography>
                <img
                  src={props.user.photoURL}
                  alt={props.user.displayName}
                  style={{
                    height: "5rem",
                    borderRadius: "50%",
                    marginRight: "2rem",
                  }}
                />
                <Button style={{ backgroundColor: "gold" }} onClick={logOut}>
                  Log Out
                </Button>
              </>
            ) : (
              <></>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
