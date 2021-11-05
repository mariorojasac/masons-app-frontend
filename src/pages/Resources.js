import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { positions } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const Resources = (props) => {
  return (
    <div style={{ backgroundColor: "gold", color: "black", height: "100rem" }}>
      <Link to="/dashboard">
        <Button
            variant="contained"
            sx={{
              width: "50%",
              m: "3rem",
              backgroundColor: "white",
              color: "black",
            }}
            style={{ backgroundColor: "white", color: "black" }}
          >Back to Dashboard</Button>
      </Link>
      <div>
        <Box
          display="flex"
          justifyContent="center"
          style={{ width: "100%", flexWrap: "wrap", height: "40rem", }}
        >
          <Button
            style={{
              width: "20rem",
              height: "30rem",
              margin: "1rem",
              backgroundColor: "white",
              color: "black",
              backgroundImage:
                "url(https://i.pinimg.com/originals/00/cb/53/00cb5311a87e250a175a143515e99b42.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Button>
          <Button
            style={{
              width: "20rem",
              height: "30rem",
              margin: "1rem",
              backgroundColor: "orange",
              color: "black",
              backgroundImage:
                "url(https://c.tenor.com/JprStizZPeEAAAAi/youtube-logo-youtube-play-button.gif)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Button>
          <Button
            style={{
              width: "20rem",
              height: "30rem",
              margin: "1rem",
              backgroundColor: "green",
              color: "black",
              backgroundImage:
                "url(https://c.tenor.com/29qm4Hg4NFwAAAAC/disney-plus-pixar.gif)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            
          </Button>

          <Button
            style={{
              width: "20rem",
              height: "30rem",
              margin: "1rem",
              backgroundColor: "blue",
              color: "black",
              backgroundImage:
                "url(https://c.tenor.com/XXTlQoh28EMAAAAj/stacks-red.gif)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
          </Button>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
