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
import { Content } from "./style"


const devs = [
  {
    name: "Rodrigo Silva",
    role: "Product Owner",
    tag: "PO",
    img: "https://ca.slack-edge.com/TQZR39SET-U02U9GQV6DB-02442e5a2fd7-512",
    linkedin: "https://www.linkedin.com/in/rodrigo-de-jesus-silva",
    github: "https://github.com/Rodrigodeveloperjr",
  },
  {
    name: "Fábio Júnior",
    role: "Scrum Master",
    tag: "SM",
    img: "https://ca.slack-edge.com/TQZR39SET-U03060LCKD0-84b8bf18dbcc-512",
    linkedin: "https://www.linkedin.com/in/fjdev",
    github: "https://github.com/fjrjdev",
  },
  {
    name: "Gabrielle Medeiros",
    role: "Tech Lead",
    tag: "TL",
    img: "https://ca.slack-edge.com/TQZR39SET-U0302SZA1R9-21ab9b73f43f-512",
    linkedin: "https://www.linkedin.com/in/gabrielle-m-60bba6133",
    github: "https://github.com/GabrielleMedeirosOliveira",
  },
  {
    name: "Renato Suzuki",
    role: "Quality assurance",
    tag: "QA",
    img: "https://ca.slack-edge.com/TQZR39SET-U02U8V091R7-9c4279a9df1c-512",
    linkedin: "https://www.linkedin.com/in/renato-suzuki",
    github: "https://github.com/renatosuzuki",
  },
  {
    name: "Jefferson Souza",
    role: "Quality assurance",
    tag: "QA",
    img: "https://ca.slack-edge.com/TQZR39SET-U02TWCJDG9H-27460ba8c9ac-512",
    linkedin: "https://www.linkedin.com/in/jefferson-freitas-2954a1a4",
    github: "https://github.com/jefersonokdemais",
  },
  {
    name: "Lais Oliveira",
    role: "Quality assurance",
    tag: "QA",
    img: "https://ca.slack-edge.com/TQZR39SET-U0304KDE54H-13abb78ee401-512",
    linkedin: "https://www.linkedin.com/in/la%C3%ADs-oliveira-6520a9141",
    github: "https://github.com/laiscarvo",
  },
]

const Contato = () => {
  return (
    <Container maxWidth="xl">
      <header>
        <NavBar />
      </header>
      <Content>
        <Typography color="#FFF" variant="h4">Entre em contato</Typography>
        <Grid
          container
          spacing={2}
          columns={19}
          sx={{ padding: "2.5% 0", justifyContent: "center" }}
        >
          {devs.map((item) => (
            <Grid key={item.name} item xs={24} sm={12} md={8} lg={4.8}>
              <Card className="card" sx={{ MaxWidth: "300px", background: "#222", color: "#FFF" }}>
                <CardMedia
                  component="img"
                  height="310px"
                  image={ item.img }
                  alt={ item.name }
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2">
                    {item.tag}
                  </Typography>
                  <Typography variant="body2">
                    {item.role}
                  </Typography>
                </CardContent>
                
                <a href={ item.linkedin } target="_blank">
                  <IconButton sx={{ color: "white" }}>
                      <AiFillLinkedin />    
                  </IconButton>
                </a>

                <a href={ item.github } target="_blank">
                  <IconButton sx={{ color: "white" }}>
                    <AiFillGithub />
                  </IconButton>
                </a>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Contato;
