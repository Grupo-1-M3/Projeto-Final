import { Card } from "./dashboardStyle";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");

const DashBoardCards = () => {

    const [modalIsOpen2, setModalIsOpen2] = useState(false)

    const openModal = () => {
        setModalIsOpen2(true)
    }

    const closeModal = () => {
        setModalIsOpen2(false)
    }

  return (
    <Card>
      <img
        src="https://amopaocaseiro.com.br/wp-content/uploads/2019/12/pao-de-forma-caseiro_02.jpg"
        alt=""
      />
      <span className="name">Name</span>
      <span className="category">Category</span>
      <span className="price">Price</span>
      <span className="description">Description</span>
      <span className="validity">Validity</span>
      <div className="buttonContainer">
        <button className="editar">Editar</button>
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        ></Modal>
        <button className="excluir">Excluir</button>
      </div>
    </Card>
  );
};

export default DashBoardCards;
