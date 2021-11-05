import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Home = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div style={{ backgroundColor: "gold", m: "0" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "red" }}>
          <Toolbar>
            <>
              <img
                src="https://i.imgur.com/OVOPbLz.jpeg"
                alt="masonsapp"
                style={{ height: 100 }}
              />
            </>
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          width: "100%",
          height: "50rem",
          p: "rem",
          m: "1rem",
          backgroundColor: "gold",
        }}
      >
        <h1 style={{ marginTop: "0rem", padding: "1rem" }}>Mason's App</h1>
        <img
          src="https://c.tenor.com/utzaSeaEOBgAAAAi/teddy-bear-joypixels.gif"
          alt="teadybear"
          style={{ backgroundColor: "gold", margin: "-2rem", padding: "0rem" }}
        />
        <div
          style={{
            width: "100%",
            height: "50rem",
            p: "1rem",
            marginTop: "-20rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              width: "80%",
              p: "1rem",
              m: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ width: "50%", p: "1rem", m: "1rem" }}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <p>scroll down</p>
      </div>
      <hr />
      <div
        style={{
          width: "100%",
          m: "1rem",
          p: "1rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <p style={{ width: "20%", p: "1rem", marginTop: "10rem" }}>About</p>
        <p style={{ width: "20%", p: "1rem", marginTop: "10rem" }}>
          Our Mission
        </p>
        <p style={{ width: "20%", p: "1rem", marginTop: "10rem" }}>Contact</p>
      </div>

      <div className="container">
        <div className="card">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              m: "1rem",
              p: "1rem",
              flexWrap: "wrap",
              marginTop: "6rem",
              marginBottom: "10rem",
            }}
          >
            <Paper
              elevation={4}
              sx={{ width: "80%", height: "25rem", p: "1rem", m: "1rem" }}
            >
              <CardContent>
                <p>What is PECS?</p>
                <p>
                  PECS consists of six phases and begins by teaching an
                  individual to give a single picture of a desired item or
                  action to a “communicative partner” who immediately honors the
                  exchange as a request. The system goes on to teach
                  discrimination of pictures and how to put them together in
                  sentences. In the more advanced phases, individuals are taught
                  to use modifiers, answer questions and comment. The primary
                  goal of PECS is to teach functional communication. Research
                  has shown that some learners using PECS also develop speech.
                  Others may transition to a speech generating device (SGD). The
                  body of research supporting the effectiveness of PECS as an
                  evidence-based practice is substantial and continues to expand
                </p>
                <p>The Six Phases Of PECS</p>
                <ol>
                  <li>
                    Individuals learn to exchange single pictures for items or
                    activities they really want.
                  </li>
                  <li>
                    Still using single pictures, individuals learn to generalize
                    this new skill by using it in different places, with
                    different people and across distances. They are also taught
                    to be more persistent communicators.
                  </li>
                  <li>
                    Individuals learn to select from two or more pictures to ask
                    for their favorite things. These are placed in a PECS
                    Communication Book—a ringed binder with self-adhesive hook
                    fastener strips where pictures are stored and easily removed
                    for communication.
                  </li>
                  <li>
                    Individuals learn to construct simple sentences on a
                    detachable Sentence Strip using an “I want” picture followed
                    by a picture of the item being requested.
                  </li>
                  <li>
                    Individuals learn to expand their sentences by adding
                    adjectives, verbs and prepositions.
                  </li>
                  <li>
                    Individuals learn to use PECS to answer questions such as
                    “What do you want?”
                  </li>
                </ol>
              </CardContent>
            </Paper>
          </Box>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
