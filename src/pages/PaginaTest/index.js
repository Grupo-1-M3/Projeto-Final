import { HomeContainer, UlContainer } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";
import ProductCard from "../../components/ProductCart";

const HomeTeste = () => {
  const { products } = useContext(ProductsContext);
  return (
    <HomeContainer>
      <UlContainer>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </UlContainer>
    </HomeContainer>
  );
};
export default HomeTeste;
