import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";
import { positions } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const Mycards = (props) => {

  // const id = props.match.params.id;
  // const cards = props.cards;
  // const card = cards.find((c) => c._id === id);
  const { id } = useParams();
  const history = useHistory();


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
    e.preventDefault();
    props.createCard(formState);
    setFormState({
      title: "",
      picture: "",
      description: "",
      sound: "",
      type: "",
    });
  };

   const removeCard = async (id) => {
      await props.deleteCard(id);
      history.push('/Mycards');
    }

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div style={{ backgroundColor: "gold", padding: "1rem" }}>
      <div>
        <Link to="/dashboard">
          <Button
            variant="contained"
            sx={{
              width: "50%",
              m: "3rem",
              backgroundColor: "white",
              color: "black",
            }}
            style={{ backgroundColor: "white", color: "black" }}
          >
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <Box display="flex" justifyContent="center" style={{ width: "100%" }}>
        <h1 style={{ width: "5rem", height: "5rem", marginRight: "5rem" }}>
          Categories:
        </h1>
        <img
          src="https://c.tenor.com/56o7RDGMd0UAAAAi/yellow-card.gif"
          alt="wavy card"
          srcset=""
          style={{ width: "5rem", height: "5rem", marginLeft: "5rem" }}
        />
      </Box>

      <Box display="flex" justifyContent="center" style={{ width: "100%", marginBottom: "2rem" }}>
        <Button
          style={{
            width: "8rem",
            height: "5rem",
            marginRight: "5rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Home
        </Button>
        <Button
          style={{
            width: "8rem",
            height: "5rem",
            marginRight: "5rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Food
        </Button>
        <Button
          style={{
            width: "8rem",
            height: "5rem",
            marginRight: "5rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Play
        </Button>
        <Button
          style={{
            width: "8rem",
            height: "5rem",
            marginRight: "5rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Bathroom
        </Button>
        <Button
          style={{
            width: "8rem",
            height: "5rem",
            marginRight: "5rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Outside
        </Button>{" "}
        <Button
          style={{
            width: "8rem",
            height: "5rem",
            marginRight: "5rem",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Feeling
        </Button>
      </Box>

      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", flexWrap: "wrap" }}
        >
          {props.cards.map((c) => (
            <Paper
              elevation={4}
              sx={{ width: "20%", height: "22rem", p: "1rem", m: "1rem" }}
              key={c._id}
            >
              <CardContent>
                <h3>{c.title}</h3>
                <img
                  src={c.picture}
                  alt="picture"
                  srcset=""
                  style={{ height: "10rem" }}
                />
                <h4>{c.description}</h4>
                {/* <p>Sound: {c.sound}</p> */}
                {/* <p>Type: {c.title}</p> */}
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: "gold", color: "black" }}
                  onClick={() => removeCard(c._id)}
                >
                  DELETE
                </Button>
              </CardContent>
            </Paper>
          ))}
        </Box>
        <h1>ADD CARD</h1>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", mt: "2rem" }}
        >
          <Paper
            elevation={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "70%", height: "30rem", p: "1rem", flexWrap: "wrap" }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                value={formState.title}
                name="title"
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                label="Title"
              />
              {/* <label>Title</label>
              <input
                type="text"
                value={formState.title}
                name="title"
                onChange={handleChange}
              /> */}
              <TextField
                type="text"
                value={formState.picture}
                name="picture"
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                label="Picture"
              />
              {/* <label>Picture</label>
              <input
                type="text"
                value={formState.picture}
                name="picture"
                onChange={handleChange}
              /> */}
              <TextField
                type="text"
                value={formState.description}
                name="description"
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                label="Description"
              />
              {/* <label>Description</label>
              <input
                type="text"
                value={formState.description}
                name="description"
                onChange={handleChange}
              /> */}
              <TextField
                type="text"
                value={formState.sound}
                name="sound"
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                label="Sound"
              />
              {/* <label>Sound</label>
              <input
                type="text"
                value={formState.sound}
                name="sound"
                onChange={handleChange}
              /> */}
              <TextField
                type="text"
                value={formState.type}
                name="type"
                autoComplete="off"
                margin="normal"
                fullWidth
                required
                onChange={handleChange}
                label="Type"
              />
              {/* <label>Type</label>
              <input
                type="text"
                value={formState.type}
                name="type"
                onChange={handleChange}
              /> */}
              <Button
                type="submit"
                value="Add Card"
                variant="contained"
                style={{ backgroundColor: "gold", color: "black" }}
              >
                Add Card
              </Button>
            </form>
          </Paper>
        </Box>
      </div>

      <Footer />
    </div>
  );
};

export default Mycards;
