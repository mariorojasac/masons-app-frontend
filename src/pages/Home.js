import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div>Mason's App</div>
      <Link to="/login">
        <button>Login</button>
        <div className="teddy">
          <div className="right-ear"></div>
          <div className="left-ear"></div>
          <div className="head">
            <div className="right-eye"></div>
            <div className="left-eye"></div>
            <div className="mouth-area">
              <div className="right-cheek"></div>
              <div className="left-cheek"></div>
              <div className="nose">
                <div className="nose-inner"></div>
              </div>
            </div>
          </div>
          <div className="body"></div>
          <div className="right-arm">
            <div className="arm-inner"></div>
            <div className="paw"></div>
          </div>
          <div className="left-arm">
            <div className="arm-inner"></div>
            <div className="paw"></div>
          </div>
          <div className="right-leg">
            <div className="foot"></div>
          </div>
          <div className="left-leg">
            <div className="foot"></div>
          </div>
        </div>
      </Link>

      <div>
        <p>scroll down</p>
      </div>
      <hr />
      <div>
        <p>About</p>
        <p>Our Mission</p>
        <p>Contact</p>
      </div>

      <div className="container">
        <div className="card">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            doloremque voluptatibus nihil earum magnam ullam quod, facilis
            accusamus consequatur unde corrupti repudiandae perspiciatis totam
            hic voluptatem fugiat veritatis, veniam eligendi?
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
