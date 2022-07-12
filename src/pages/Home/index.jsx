import React, { useState } from "react"
import { HeaderStyled, Container, Content, FooterStyled } from "./style"
import Logo from "../../assets/logo.png"

import Principal from "../../assets/foto_principal.png"
import Ifood from "../../assets/ifood.png"
import Pizza_hut from "../../assets/pizza_hut.jpg"
import Hellmanns from "../../assets/hellmanns.png"
import Burger_king from "../../assets/burger_king.png"
import Habibs from "../../assets/habibs.png"
import McDonalds from "../../assets/mcdonalds.png"
import Instagram from "../../assets/instagram.png"
import WhatsApp from "../../assets/whatsapp.png"
import Twitter from "../../assets/twitter.png"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper"
import { useHistory } from "react-router-dom"
import { api } from "../../services/api"

import React from "react";
import { HeaderStyled, Container, Content, FooterStyled } from "./style";
import Logo from "../../assets/Nossa Logo.png";

import Principal from "../../assets/foto_principal.png";
import Ifood from "../../assets/ifood.png";
import Pizza_hut from "../../assets/pizza_hut.jpg";
import Hellmanns from "../../assets/hellmanns.png";
import Burger_king from "../../assets/burger_king.png";
import Habibs from "../../assets/habibs.png";
import McDonalds from "../../assets/mcdonalds.png";
import Instagram from "../../assets/instagram.png";
import WhatsApp from "../../assets/whatsapp.png";
import Twitter from "../../assets/twitter.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Home = () => {
  const history = useHistory();

  const [ products, setProducts ] = useState([])

  const companys = [ Ifood, Pizza_hut, Hellmanns, Burger_king, Habibs, McDonalds ]

  api.get("664/top_products")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))

  const prices = [6, 7, 8, 3, 5, 2];

  return (
    <>
      <NavBar />
      <Content>
        <div>
          <h1>#1 DO BRASIL CONTRA O DESPERDÍCIO DE ALIMENTOS.</h1>

          <p>
            Salve alimentos de
            <strong> restaurantes, padarias e hortifrutis </strong>
            com até
            <strong> 70% de desconto</strong>, e faça parte deste movimento
            sustentável que combate o<strong> desperdício de alimentos.</strong>
          </p>

          <div>
            <button onClick={() => history.push("/login")}>Compre já</button>
            <button onClick={() => history.push("/loginPartiner")}>
              Seja parceiro
            </button>
          </div>
        </div>

        <img src={Principal} alt="" />
      </Content>

      <Container>
        <h2>Produtos com maiores descontos hoje</h2>

        <div className="content">
          {prices.map((price, index) => (
            <div className="product" key={index}>
              <img
                src="https://panattos.com.br/uploads/produtos/2017/07/pao-frances-fermentacao-curta-massa-congelada.jpg"
                alt="pão"
              />
              <span>50% desconto</span>
              <div>
                <h3>Pão</h3>
          {
            products.map(product => {

              const desconto = product.price - (product.price * 75 / 100)

              return (
                <div className="product">
                  <img src={ product.img } alt={ product.name } />
                  <span>75% OFF</span>
                  <div>
                    <h3>{ product.name }</h3>

                    <p>Data de vencimento: { product.validity }</p>

                    <div>
                      <span>R$ { desconto.toFixed(2).replace(".", ",") }</span>
                      <span>R$ <s>{ product.price.toFixed(2).replace(".", ",") }</s></span>
                    </div>
                  </div>
                </div>
              )
            })
          }    
            
               <p>Descrição do produto</p>

                <div>
                  <span>R$ {price.toFixed(2)}</span>
                  <span>
                    R$ <s>{price / 2}</s>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="verMais">
          <button onClick={ () => history.push("/login") }>Ver mais</button>
        </div>

        <h2>APOIADORES</h2>

        <div>
          <Swiper
            loop={true}
            grabCursor={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {companys.map((company, i) => (
              <SwiperSlide key={i}>
                <img src={company} alt="Empresa parceira" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      <FooterStyled>
       <div>  
          <h2>Ajude a combater o desperdício.</h2>
          
        <div>
          <h2>Ajude a combatemos o desperdício.</h2>

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
    </>
  );
};

export default Home;
