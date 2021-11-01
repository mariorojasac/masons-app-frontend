import { Link } from "react-router-dom";
const Resources = (props) => {
  return (
    <>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>{" "}
      </Link>
      <div>Resources</div>
    </>
  );
};

export default Resources;
