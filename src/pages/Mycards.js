import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";


const Mycards = (props) => {
  return (
      <>
      <Header />
      <Link to="/dashboard"><button>Back to Dashboard</button> </Link>
          <div>My Card's</div>
          <Footer/>
    </>
  );
};

export default Mycards;
