import React, { useContext } from "react";
import { ContainerTotal } from "./style";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../contexts/Cart";

const Total = ({ total }) => {
  const { clearStore } = useContext(CartContext);

  const history = useHistory();
  const finishOrder = () => {
    history.push("/");
    clearStore();
    toast.success("Compra finalizada com sucesso!");
  };

  return (
    <ContainerTotal>
      <h4>Resumo da compra:</h4>
      <section>
        <p>Valor Total R$ {total.toFixed(2)}</p>
      </section>
      <button onClick={finishOrder}>Finalizar Pedido</button>
    </ContainerTotal>
  );
};

export default Total;
