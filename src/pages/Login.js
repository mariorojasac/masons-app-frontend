import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { signIn } from "../services/firebase";
import CardContent from "@mui/material/CardContent";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
const Login = (props) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", m: "1rem", p: "1rem", flexWrap: "wrap" }}
      >
        <Paper
          elevation={4}
          sx={{ width: "20%", height: "20rem", p: "1rem", m: "1rem" }}
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
    </>
  );
};

export default Login;
