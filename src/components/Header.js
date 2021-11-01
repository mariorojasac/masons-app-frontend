import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header>
        <nav>
          <p>Hello, Name</p>
          <img
            src="https://i.imgur.com/OVOPbLz.jpeg"
            alt="masonsapp"
            style={{ height: 100 }}
          />
          <button>Log Out</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
