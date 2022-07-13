import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import React from "react";
import NavBar from "../../components/NavBar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const devs = [
  {
    name: "Rodrigo Silva",
    role: "Product Owner",
    tag: "PO",
    img: "null",
    linkedin: "",
    github: "",
  },
  {
    name: "Fábio Júnior",
    role: "Scrum Master",
    tag: "SM",
    img: "null",
    linkedin: "",
    github: "",
  },
  {
    name: "Gabrielle Medeiros",
    role: "Tech Lead",
    tag: "TL",
    img: "null",
    linkedin: "",
    github: "",
  },
  {
    name: "Renato Suzuki",
    role: "Quality assurance",
    tag: "QA",
    img: "null",
    linkedin: "",
    github: "",
  },
  {
    name: "Jefferson Souza",
    role: "Quality assurance",
    tag: "QA",
    img: "null",
    linkedin: "",
    github: "",
  },
  {
    name: "Lais Oliveira",
    role: "Quality assurance",
    tag: "QA",
    img: "null",
    linkedin: "",
    github: "",
  },
];

const Contato = () => {
  return (
    <Container maxWidth="xl">
      <header>
        <NavBar />
      </header>
      <main>
        <Typography color="#FFF">Entre em contato</Typography>
        <Grid
          container
          spacing={1}
          columns={24}
          sx={{ padding: "2.5% 0", justifyContent: "center", mb: 10 }}
        >
          {devs.map((item) => (
            <Grid key={item.name} item xs={24} sm={12} md={8} lg={4.8}>
              <Card sx={{ maxWidth: 300, maxHeight: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.tag}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </CardContent>
                <IconButton onClick={() => console.log("n")}>
                  <AiFillLinkedin />
                </IconButton>
                <IconButton onClick={() => console.log("siu")}>
                  <AiFillGithub />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </Container>
  );
};

export default Contato;
