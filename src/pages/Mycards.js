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
    <>
      <div>
        <Link to="/dashboard">
          <Button variant="contained" sx={{ width: "50%", mt: "1rem" }}>
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", m: "1rem", p: "1rem", flexWrap: "wrap" }}
        >
          {props.cards.map((c) => (
            <Paper
              elevation={4}
              sx={{ width: "20%", height: "20rem", p: "1rem", m: "1rem" }}
              key={c._id}
            >
              <CardContent>
                <p>{c.title}</p>
                <img
                  src={c.picture}
                  alt="picture"
                  srcset=""
                  style={{ height: "10rem" }}
                />
                <p>{c.description}</p>
                {/* <p>Sound: {c.sound}</p> */}
                {/* <p>Type: {c.title}</p> */}
                <Button variant="contained" type="submit" onClick={ () => removeCard(c._id) }>
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
              <Button type="submit" value="Add Card" variant="contained">
                Add Card
              </Button>
            </form>
          </Paper>
        </Box>
      </div>

      <Footer />
    </>
  );
};

export default Mycards;
