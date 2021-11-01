import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="container">
      <Header />
      <h1>Dashboard</h1>
      <div className="card"><Link to="/mycards">My Card's</Link></div>
      <div className="card"><Link to="/resources">Resources</Link></div>
      <div className="card"><Link to="/myprofile">My Profile</Link></div>
      <Footer />
    </div>
  );
};

export default Dashboard;
