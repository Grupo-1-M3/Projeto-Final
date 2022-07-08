import React, { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import DashBoardCards from "../../components/DashBoardCards/DashBoardCards";
import { DashBoardContainer } from "./style";
import Modal from "react-modal";
import "./modal.css";
Modal.setAppElement("#root");

const DashBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    history.push("/");
  };

  return (
    <DashBoardContainer>
      <header>
        <h1>Trash no, Food</h1>
        <button onClick={logout}>Sair</button>
      </header>
      <section>
        <h2>Olá, #empresa</h2>
        <p>Biografia Empresa</p>
      </section>
      <main>
        <div className="divAdd">
          <button onClick={openModal}>Adicionar Produto</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="headerModal">
            <h2>Adicione seu Produto</h2>
            <span className="X" onClick={closeModal}>
              {" "}
              <FiXCircle />{" "}
            </span>
          </div>
          <input type="text" placeholder="Nome do produto" />
          <input type="text" placeholder="Categoria ex: Panificadora" />
          <input type="number" placeholder="Preço ex: 9.99" />
          <input type="text" placeholder="Descrição" />
          <input type="date" placeholder="validade" />
          <input type="text" placeholder="Imagem do Produto" />
          <button className="enviar" onClick={closeModal}>
            Enviar
          </button>
        </Modal>
        <div className="cardsContainer">
          <DashBoardCards />
          <DashBoardCards />
          <DashBoardCards />
          <DashBoardCards />
          <DashBoardCards />
          <DashBoardCards />
          <DashBoardCards />
          <DashBoardCards />
        </div>
      </main>
    </DashBoardContainer>
  );
};

export default DashBoard;
