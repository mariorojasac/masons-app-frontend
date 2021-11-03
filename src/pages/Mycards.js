
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Mycards = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    picture: "",
    description: "",
    sound: "",
    type: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
     props.createCard(formState);
    setFormState({
      title: "",
    picture: "",
    description: "",
    sound: "",
    type: "",
    })
  }

  

  return (
    <>
      <div>
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </div>

      <div>
        {props.cards.map((c) => (
          <div>
            <h1>Cards</h1>
            <p>Title: {c.title}</p>
            <p>Picture: {c.picture}</p>
            <p>Description: {c.description}</p>
            <p>Sound: {c.sound}</p>
            <p>Type: {c.title}</p>
          </div>
        ))}
        <p>Add Card</p>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            value={formState.title}
            name="title"
            onChange={handleChange}
          />
          <label>Picture</label>
          <input
            type="text"
            value={formState.picture}
            name="picture"
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            type="text"
            value={formState.description}
            name="description"
            onChange={handleChange}
          />
          <label>Sound</label>
          <input
            type="text"
            value={formState.sound}
            name="sound"
            onChange={handleChange}
          />
          <label>Type</label>
          <input
            type="text"
            value={formState.type}
            name="type"
            onChange={handleChange}
          />
          <input type="submit" value="Add Card" />
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Mycards;
