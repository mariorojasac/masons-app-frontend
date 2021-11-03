import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Resources = (props) => {
  return (
    <>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
      <div>
        <div> Kids Youtube </div>
        <div> Blipi</div>
        <div> Disney Plus </div>
        <div> Netflix </div>
        <div> Pocoyo </div>
        <div> Mickey Clup House </div>
      </div>
      <Footer/>
    </>
  );
};

export default Resources;
