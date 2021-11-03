import { Link } from "react-router-dom";
import { logOut } from "../services/firebase";

const Header = (props) => {
  return (
    <header>
      <nav>
        {props.user ? (
          <>
            <p>Hello, {props.user.displayName} </p>
            <img src={props.user.photoURL} alt={props.user.displayName} />
            <img
              src="https://i.imgur.com/OVOPbLz.jpeg"
              alt="masonsapp"
              style={{ height: 100 }}
            />
            <button onClick={logOut}>Log Out</button>
          </>
        ) : (
          <>
            
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
