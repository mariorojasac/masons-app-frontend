import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Mycards = (props) => {
 
  return (
    <>
      <div>
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </div>


      <Footer />
    </>
  );
};

export default Mycards;
