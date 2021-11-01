import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Myprofile = (props) => {
  return (
      <>
          <Header/>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>{" "}
      </Link>
          <div>My Profile</div>
          <Footer/>
    </>
  );
};

export default Myprofile;
