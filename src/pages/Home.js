import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

const Home = (props) => {

   const { children, value, index, ...other } = props;


  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50rem",
          p: "1rem",
          m: "1rem",
        }}
      >
        <h1>Mason's App</h1>
        <div
          style={{
            width: "100%",
            height: "50rem",
            p: "1rem",
            m: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              width: "80%",
              p: "1rem",
              m: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ width: "50%", p: "1rem", m: "1rem" }}
            >
              Login
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <p>scroll down</p>
      </div>
      <hr />
      <div
        style={{
          width: "100%",
          m: "1rem",
          p: "1rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <p style={{ width: "20%", p: "1rem", marginTop: "10rem" }}>About</p>
        <p style={{ width: "20%", p: "1rem", marginTop: "10rem" }}>
          Our Mission
        </p>
        <p style={{ width: "20%", p: "1rem", marginTop: "10rem" }}>Contact</p>
      </div>

      <div className="container">
        <div className="card">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              m: "1rem",
              p: "1rem",
              flexWrap: "wrap",
              marginTop: "6rem",
              marginBottom : "10rem"
            }}
          >
            <Paper
              elevation={4}
              sx={{ width: "80%", height: "25rem", p: "1rem", m: "1rem" }}
            >
              <CardContent>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                  dolores laborum amet harum dolorum eos maiores, debitis ipsum
                  aut repudiandae repellat omnis eveniet maxime fuga ullam illum
                  deserunt odio dolorem! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Nisi, blanditiis sequi rerum distinctio qui
                  esse id unde impedit error earum laudantium tempore ea sit,
                  explicabo ad accusamus, neque consectetur! Consectetur.
                  Excepturi soluta distinctio aut porro nesciunt ab accusantium
                  sint suscipit possimus provident, nostrum ipsa sequi cum
                  consectetur quaerat consequuntur alias quo natus aspernatur,
                  cupiditate fuga. Perferendis dignissimos dolorem ratione
                  nobis. Aliquam delectus quibusdam sequi quia expedita modi
                  quas dolor quae officiis molestias culpa alias ratione
                  repudiandae, asperiores hic, officia numquam, fugiat earum
                  quidem? Iste repellat cum laboriosam neque officia magnam.
                  Modi voluptas nisi sed quidem. Minus possimus deserunt
                  voluptatibus modi rem natus quo labore quis assumenda beatae
                  obcaecati animi id, accusantium aut excepturi veritatis! Nobis
                  error iure tempora corrupti ipsa. Quibusdam ipsam iusto beatae
                  veritatis odio id assumenda asperiores maiores mollitia vitae
                  eum tempore commodi provident rerum, ea ab nobis accusantium
                  porro sed rem sequi nihil harum minus. Placeat, provident.
                  Excepturi cum quas enim pariatur dolor reiciendis nulla
                  quibusdam nesciunt saepe nam, omnis quam debitis nihil,
                  aliquid, delectus quos suscipit iusto dolore quo mollitia. Nam
                  inventore ipsum dolor. Alias, ex. Autem molestiae molestias
                  eos voluptates blanditiis magni placeat possimus aspernatur
                  laborum consequatur provident, minima dolorem nulla ea aliquam
                  ut et! Blanditiis, illo itaque voluptates earum veniam eum ea
                  expedita dignissimos. Voluptatem, suscipit! Consequatur amet
                  velit aliquid ipsa odit, earum cumque quibusdam sed eaque,
                  eius voluptatem optio atque aut, perferendis laudantium!
                  Soluta omnis aperiam incidunt mollitia aliquid quisquam
                  consequuntur placeat modi? Doloribus culpa enim nesciunt
                  ducimus, cupiditate, at, voluptates labore consequuntur
                  pariatur magnam fugiat quia dolores. Pariatur, adipisci sint,
                  ipsa nihil, aliquam similique ad cum eveniet maiores inventore
                  labore aperiam quas. Adipisci minus reprehenderit culpa hic
                  error recusandae non similique fugit dolorum optio natus
                  tempore esse magni, temporibus maiores eius, eaque amet
                  laudantium voluptate cupiditate perferendis minima iure
                  officia ea. Magni. Vero magni odio eligendi perspiciatis
                  explicabo ut! Nemo consectetur obcaecati numquam repellendus
                  reiciendis, eveniet asperiores sequi aliquid, soluta suscipit
                  inventore. Sapiente excepturi, aperiam temporibus eaque veniam
                  incidunt quisquam! Quo, ad. Ipsum aperiam suscipit, mollitia
                  laborum sunt eaque quo corrupti minima quidem voluptas,
                  consequatur nostrum maiores earum dicta assumenda ducimus
                  distinctio nulla reiciendis quas delectus. Totam hic vel
                  saepe! Ullam, distinctio. Nulla eveniet excepturi, eius
                  facilis quia temporibus, sed ratione vel, quidem quisquam
                  fugit! Distinctio vitae a voluptate sequi magnam modi.
                </p>
              </CardContent>
            </Paper>
          </Box>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
