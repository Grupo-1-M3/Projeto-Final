import React, { useState } from "react";
import { Container,HeaderStyled, Content } from "./style";
import bolinha from "../../assets/bolinha.png"
import star from "../../assets/star.png"
import star_yellow from "../../assets/star_yellow.png"
import logo from "../../assets/logo.png"
import { api } from "../../services/api"
import Product from "../../components/Product";
import { useEffect } from "react";
import Stars from "../../components/Stars";


const PageCompany = () => {

  const [ company, setCompany ] = useState({})

  const [ load, setLoad ] = useState(true)

  const [ products, setProducts ] = useState([])

  useEffect(() => {

    setLoad(true)

    api.get("users/3", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ localStorage.getItem("toke") }`
      }
    })
    .then(res => setCompany(res.data))
    .finally(() => setLoad(false))
  
  }, [])

  useEffect(() => {

    setLoad(true)

    api.get("users/3?_embed=products", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ localStorage.getItem("toke") }`
      }
    })
    .then(res => setProducts(res.data.products))
    .finally(() => setLoad(false))

  }, [])
  
  return (
    
      <Container>

      {
        load === true && (
          <div className="telaLoad">
            <p>Loading...</p>
          </div>
        )
      }

      <div className="divLogo">
        <img src={ logo } alt="Logo" />

        <button className="botaoVoltar">X</button>
      </div>

      <HeaderStyled>
        <div>
          <h2>{ company.name }</h2>

          <div>
            <p>{ company.category }

            <img src={ bolinha } alt="bolinha" />

            { company.km }km</p>
          </div>

          <section>Entrega</section>

          <div className="div">
            <p>{ company.star }</p>
            
            <Stars contStar={ company.star } star={ star } star_yellow={ star_yellow } />
          </div>
        </div>

        <div className="divBanner">
          <img src={ company.img } alt={ company.name } />

          <p>{ company.reviews } avaliações</p>
        </div>
      </HeaderStyled>

      <Content>
        <h2>Ofertas</h2>

        <div>
            {
              products.map(product => <Product key={ product.id } product={ product } />)
            }
        </div>
      </Content>
    </Container>
  )
}

export default PageCompany
