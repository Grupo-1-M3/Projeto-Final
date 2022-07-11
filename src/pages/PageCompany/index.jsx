import React, { useState } from "react";
import { Container,HeaderStyled, Content } from "./style";
import bolinha from "../../assets/bolinha.png"
import star from "../../assets/star.png"
import star_yellow from "../../assets/star_yellow.png"
import logo from "../../assets/logo.png"
import { api } from "../../services/api"
import Product from "../../components/Product";


const PageCompany = () => {

  const [ company, setCompany ] = useState({})

  const [ products, setProducts ] = useState([])

  const array = [ 
    Math.floor((Math.random() * 2) + 1),
    Math.floor((Math.random() * 2) + 1),
    Math.floor((Math.random() * 2) + 1),
    Math.floor((Math.random() * 2) + 1),
    Math.floor((Math.random() * 2) + 1),
    Math.floor((Math.random() * 2) + 1)
  ]

  api.get("users/1", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ29AZ2FtaWwuY29tIiwiaWF0IjoxNjU3NTQ4NzM1LCJleHAiOjE2NTc1NTIzMzUsInN1YiI6IjEifQ.cCJYh0CC5Bs_iz33qjTWw-2dRpRmzWMMzwrTh38C0pk"  
    }
  })
  .then(res => setCompany(res.data))

  api.get("users/1?_embed=products", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZHJpZ29AZ2FtaWwuY29tIiwiaWF0IjoxNjU3NTQ4NzM1LCJleHAiOjE2NTc1NTIzMzUsInN1YiI6IjEifQ.cCJYh0CC5Bs_iz33qjTWw-2dRpRmzWMMzwrTh38C0pk"  
    }
  })
  .then(res => setProducts(res.data.products))

  return (
    <Container>

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

            0,9km</p>
          </div>

          <select>
            <option>Entrega</option>
          </select>

          <div className="div">
            <p>4,1</p>
            
            {
              array.map(x => <img src={ star_yellow } alt="star" />)
            }
          </div>
        </div>

        <div className="divBanner">
          <img src={ company.img } alt={ company.name } />

          <p>781 avaliações</p>
        </div>
      </HeaderStyled>

      <Content>
        <h2>Ofertas</h2>

        <div>
            {
              products.map((product, i) => <Product key={ i } product={ product } />)
            }
        </div>
      </Content>
    </Container>
  );
};

export default PageCompany;
