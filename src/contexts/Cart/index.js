import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [productsOnCart, setProductsOnCart] = useState([]);

  const addOnCart = (item) => {
    let newProductToCart = {};
    newProductToCart = { ...item };
    newProductToCart.id = Math.floor(Math.random() * 100000);
    let updatedProductCardStore = [...productsOnCart, newProductToCart];
    setProductsOnCart(updatedProductCardStore);
    localStorage.setItem(
      "@TrashNoFood:cart",
      JSON.stringify(updatedProductCardStore)
    );
    toast.success("Produto adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  const removeProductOnCart = (item) => {
    const removed = productsOnCart.filter((product) => product.id !== item);
    setProductsOnCart(removed);
    localStorage.setItem("@TrashNoFood:cart", JSON.stringify(removed));
    toast.success("Produto removido do carrinho!", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const clearStore = () => {
    setProductsOnCart([]);
    localStorage.removeItem("@TrashNoFood:cart");
  };

  return (
    <CartContext.Provider
      value={{
        productsOnCart,
        addOnCart,
        removeProductOnCart,
        setProductsOnCart,
        clearStore,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
