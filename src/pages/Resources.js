import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Resources = (props) => {
  return (
    <>
      <Header/>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>{" "}
      </Link>
      <div>Resources</div>
      <Footer/>
    </>
  );
};

export default Resources;
