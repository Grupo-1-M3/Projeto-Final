import { Card } from "./style";
import Modal from "react-modal";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "./modal.css";
import Input from "../Input";
import formSchema from "./formYup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
Modal.setAppElement("#root");

const DashBoardCards = ({ elem, setProducts }) => {
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const token = localStorage.getItem("@TrashNoFoodPartiner:token");
  const id = Number(localStorage.getItem("@TrashNoFoodPartiner:id"));
  const split = elem.validity.split("-");
  const validity = `${split[2]}/${split[1]}/${split[0]}`;
  const auth = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getProducts = () => {
    api.get(`/users/${id}?_embed=products`, auth).then((res) => {
      setProducts(res.data.products);
    });
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const updateProduct = (infoProduct) => {
    api
      .patch(`/660/products/${elem.id}`, infoProduct, auth)
      .then((_) => {
        toast.success("Produto Atualizado", {
          autoClose: 2000,
        });
        getProducts();
        setModalIsOpen2(false);
      })
      .catch((_) => toast.error("Ops, algo deu errado!"));
  };

  const deleteProduct = () => {
    api
      .delete(`/660/products/${elem.id}`, auth)
      .then((_) => {
        toast.success("Produto excluído!", {
          autoClose: 2000,
        });
        getProducts();
      })
      .catch((_) => toast.error("Ops, algo deu errado!"));
  };

  const openModal = () => {
    setModalIsOpen2(true);
  };

  const closeModal = () => {
    setModalIsOpen2(false);
  };

  return (
    <Card>
      <img src={elem.img} alt={elem.name} />
      <span className="name">{elem.name}</span>
      <span className="category">{elem.category}</span>
      <span className="price">R$ {elem.price}</span>
      <span className="description">{elem.description}</span>
      <span className="validity">{validity}</span>
      <div className="buttonContainer">
        <button className="editar" onClick={openModal}>
          Editar
        </button>
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay2"
          className="modal-content2"
        >
          <form onSubmit={handleSubmit(updateProduct)} className="form">
            <Input
              register={register}
              name="category"
              label="Categoria"
              defaultValue={elem.category}
              type="text"
              placeholder="Panificadora"
            />
            <Input
              register={register}
              name="name"
              label="Nome"
              defaultValue={elem.name}
              type="text"
              placeholder="Pão francês"
            />
            <Input
              register={register}
              name="price"
              label="Preço"
              defaultValue={elem.price}
              type="number"
              placeholder="2.99"
            />
            <Input
              register={register}
              name="description"
              label="Descrição"
              defaultValue={elem.description}
              type="text"
              placeholder="Pão crocante e quentinho"
            />
            <Input
              register={register}
              name="img"
              label="Imagem"
              defaultValue={elem.img}
              type="text"
              placeholder="URL da imagem"
            />
            <Input
              register={register}
              name="validity"
              label="Validade"
              type="date"
              defaultValue={elem.validity}
            />
            <button type="submit" className="salvar">
              Salvar
            </button>
          </form>
        </Modal>
        <button className="excluir" onClick={deleteProduct}>
          Excluir
        </button>
      </div>
    </Card>
  );
};

export default DashBoardCards;
