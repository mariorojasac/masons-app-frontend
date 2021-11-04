import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";

const Dashboard = (props) => {
  return (
    <div className="container">
      
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", mt: "1rem", p: "1rem", flexWrap: "wrap" }}
      >
        <Paper
          elevation={4}
          sx={{ width: "20%", height: "20rem", p: "1rem", m: "1rem" }}
          className="card"
        >
          <CardContent><Link to="/mycards">My Card's</Link></CardContent>
        </Paper>
        <Paper
          elevation={4}
          sx={{ width: "20%", height: "20rem", p: "1rem", m: "1rem" }}
          className="card"
        >
          <CardContent><Link to="/resources">Resources</Link></CardContent>
        </Paper>
      </Box>
      <Footer />
    </div>
  );
};

export default Dashboard;
