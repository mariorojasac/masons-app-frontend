import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div>Mason's App</div>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <button>sign Up</button>
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
