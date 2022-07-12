import { useState, createContext, useContext } from "react";
import { api } from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleProduct = () => {
    api
      .get("/664/top_products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProduct();

  return (
    <ProductsContext.Provider value={{ products, handleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
