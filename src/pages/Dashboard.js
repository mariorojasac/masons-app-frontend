import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";

const Dashboard = (props) => {
  return (
    <div
      style={{
        margin: "-10rem",
        height: "50rem",
        backgroundColor: "gold",
        // height: "60rem",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", mt: "10rem", p: "1rem", flexWrap: "wrap" }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "20%",
            height: "20rem",
            p: "1rem",
            m: "1rem",
            mt: "10rem",
            mb: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="card"
        >
          <CardContent>
            <img
              src="https://c.tenor.com/3yzjqtIafAYAAAAj/love-doughnut-donut.gif"
              alt="bear donut"
              style={{
                width: "80%",
                height: "10rem",
                p: "1rem",
                m: "1rem",
                mt: "10rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            />
            <Link to="/mycards">MY CARDS</Link>
          </CardContent>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            width: "20%",
            height: "20rem",
            p: "1rem",
            m: "1rem",
            mt: "10rem",
            mb: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="card"
        >
          <CardContent>
            <img
              src="https://c.tenor.com/T6siG3zPhqkAAAAi/fire-engine-joypixels.gif"
              alt="truck"
              srcset=""
              style={{
                width: "80%",
                height: "10rem",
                p: "1rem",
                m: "1rem",
                mt: "10rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            />
            <Link to="/resources">LINKS</Link>
          </CardContent>
        </Paper>
      </Box>
      <Footer />
    </div>
  );
};

export default Dashboard;
