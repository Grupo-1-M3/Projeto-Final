import NavBar from "../../components/NavBar";
import { BoxText, Container, Image, ImageCard, Footer} from "./styles";

import Image_Family from "../../assets/image-family.jpg"
import Sonho from "../../assets/sonho.jpg"
import Instagram from "../../assets/instagram.png";
import WhatsApp from "../../assets/whatsapp.png";
import Twitter from "../../assets/twitter.png";

import { FooterStyled } from "../Home/style";

const About = () =>{
    return (
        <Container>
            <NavBar/>
            <ImageCard>
                <Image src={Image_Family} alt="Imagem de família"/>
                <h1>Quem somos</h1>
            </ImageCard>
            <Container heigth="250px" width="1000px" align="flex-start">
                <BoxText>
                <h2>Trabalhamos para melhorar o planeta Terra e proprocionar comida acessível em todo o mundo.</h2>
                <p>Venha e faça parte de um grupo de pessoas que se preocupa com o lar em que vive
                    e busca amenizar o lixo no planeta e também com o desperdiçio de alimentos.
                </p>
                </BoxText>
            </Container>
            <ImageCard>
                <Image src={Sonho} alt="Imagem de família"/>
                <h1>Um sonho</h1>
            </ImageCard>
            <Container heigth="250px" width="1000px" align="flex-end">
                <BoxText>
                    <h2>Nosso maior desejo é alcançar um grande número de empresas e juntos conseguir mudar a forma de produzir e consumir alimentos no mundo.</h2>
                    <p>Acreditamos ser possivel construir um mundo totalmente novo, sustentável, eficiente, com oportunidades para todos. Seja um de nossos
                        parceiros, reduza o disperdício de alimentos em sua organização, colabore para um mundo diferente para as novas gerações e venha viver 
                        conosco este sonho.
                    </p>
                </BoxText>
            </Container>

            <FooterStyled>
                <div>
                    <h2>Ajude a combater o desperdício.</h2>

                    <div>
                        <div>
                            <h4>Contatos</h4>

                            <p className="telephone">+55 11 9532-4335</p>
                            <p>contato@trashnofood.com</p>

                            <h4>Nossas Redes</h4>

                            <div>
                                <img src={Instagram} alt="Instagram" />
                                <img src={Twitter} alt="Twitter" />
                                <img src={WhatsApp} alt="WhatsApp" />
                            </div>
                        </div>
                    </div>
                </div>

                <p>© 2022 TrashNoFood - Todos os direitos reservados.</p>
            </FooterStyled>
        </Container>
    )
}

export default About
