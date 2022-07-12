import { CardContainer } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

const ProductCard = ({ product, isRemovable = false }) => {
  const { addOnCart, removeProductOnCart } = useContext(CartContext);

  const { name, price, img, id } = product;

  return (
    <CardContainer>
      <div className="img-div">
        <img src={img} alt="" />
      </div>

      {isRemovable ? (
        <div className="quantity">
          <p className="product-name">{name}</p>
        </div>
      ) : (
        <p className="product-name">{name}</p>
      )}
      <p className="product-price">R${price}</p>
      {isRemovable ? (
        <button data-product-id={id} onClick={() => removeProductOnCart(id)}>
          Remover
        </button>
      ) : (
        <button onClick={() => addOnCart(product)}>Adicionar</button>
      )}
    </CardContainer>
  );
};

export default ProductCard;
