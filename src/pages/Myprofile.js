import { Link } from "react-router-dom";
const Myprofile = (props) => {
  return (
    <>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>{" "}
      </Link>
      <div>My Profile</div>
    </>
  );
};

export default Myprofile;
