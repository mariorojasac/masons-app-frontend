import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { signIn } from "../services/firebase";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
const Login = (props) => {
  return (
    <div
      style={{
        margin: "-1rem",
        backgroundColor: "gold",
        height: "60rem",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          m: "1rem",
          p: "1rem",
          flexWrap: "wrap",
          backgroundColor: "gold",
        }}
      >
        <img
          src="https://c.tenor.com/PrRf4W_uFicAAAAj/rafsdesign-rafs.gif"
          alt="arrow"
          style={{ width: "18rem", height: "10rem", margin: "-10rem" }}
        />
        <Paper
          elevation={4}
          sx={{ width: "20%", height: "20rem", p: "1rem", m: "10rem" }}
        >
          <CardContent>
            <div>
              <h1>Login</h1>
            </div>
            <Button onClick={signIn} variant="contained">
              Sign in with Google
            </Button>
          </CardContent>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
