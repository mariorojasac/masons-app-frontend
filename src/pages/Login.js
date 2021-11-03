import { Helmet } from "react-helmet";
import { signIn } from "../services/firebase";
const Login = (props) => {
    return (
      <>
        <Helmet>
          <title>Login | React CRM ⚛️</title>
          <meta
            name="description"
            content="Welcome to React CRM, please login to begin"
          />
          <meta
            name="keywords"
            content="login page, authenticate, login to begin"
          />
        </Helmet>
        <h1>Login</h1>
        <button onClick={signIn}>Sign in with Google</button>
      </>
    );
};

export default Login;
