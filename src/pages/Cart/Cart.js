import React, { useContext, useState, useEffect } from "react";
import { ContainerCart, ContainerWarning } from "./style";
import ProductCard from "../../components/ProductCart";
import { CartContext } from "../../contexts/Cart";
import Total from "../../components/Total";
import Header from "../../components/Header";
import HomeTeste from "../PaginaTest";
import SearchNavBar from "../../components/SearchNavBar";

const Cart = () => {
  const { productsOnCart, setProductsOnCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      productsOnCart.reduce((total, item) => {
        return total + Number(item.price);
      }, 0)
    );
  }, [productsOnCart]);

  useEffect(() => {
    const cartProductListInMemory = localStorage.getItem("@TrashNoFood:cart");
    if (cartProductListInMemory) {
      setProductsOnCart(JSON.parse(cartProductListInMemory));
    }
  }, []);

  return (
    <>
      <SearchNavBar isCart />
      <ContainerCart>
        {/*  <HomeTeste /> */}
        <div>
          {productsOnCart.length > 0 ? (
            <>
              <ul>
                {productsOnCart.map((product, i) => (
                  <ProductCard key={i} product={product} isRemovable={true} />
                ))}
              </ul>
              <Total total={total} />
            </>
          ) : (
            <ContainerWarning>
              {productsOnCart.map((product, i) => (
                <ProductCard key={i} product={product} isRemovable={true} />
              ))}
              <h1>Ops não tem nada aqui!</h1>
            </ContainerWarning>
          )}
        </div>
      </ContainerCart>
    </>
  );
};

export default Cart;
