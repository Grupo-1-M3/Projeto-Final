import React, {  useState } from 'react'

const Product = ({ product }) => {
    
    const number = () => {
        return Math.floor((Math.random() * 90) + 1)
    }
    
    const [ desconto, setDesconto ] = useState(number)
                
    return (

      <div className="product">
        <img src={ product.img } alt={ product.name } />
        <span>{ desconto }% OFF</span>
        <div>
          <h3>{ product.name }</h3>

          <p>{ product.validity }</p>

          <div>
            <span>R$ { desconto.toFixed(2) }</span>
            <span>R$ <s>{ product.price }</s></span>
          </div>
        </div>
      </div>
    )
}

export default Product
