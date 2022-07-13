import React from 'react'

const Product = ({ product }) => {
    
  const newPrice = product.price - (product.price * product.discont / 100)

  return (

    <div className="product">
      <img src={ product.img } alt={ product.name } />
      <span>{ product.discont }% OFF</span>
      <div>
        <h3>{ product.name }</h3>

        <p>{ product.validity }</p>

        <div>
          <span>R$ { newPrice.toFixed(2) }</span>
          <span>R$ <s>{ product.price.toFixed(2) }</s></span>
        </div>
      </div>
    </div>
  )
}

export default Product
