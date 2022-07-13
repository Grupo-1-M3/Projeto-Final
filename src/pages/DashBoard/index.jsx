import logo from "../../assets/logo_dashboard.png";
import React, { useState, useEffect } from "react";
import { FiXCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DashBoardCards from "../../components/DashboardCards/index";
import { DashBoardBg, DashBoardContainer } from "./style";
import Input from "../../components/Input";
import "./modal.css";
import { api } from "../../services/api";
import formSchema from "./formYup";
Modal.setAppElement("#root");

const DashBoardPJ = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [infos, setInfos] = useState([]);
  const [products, setProducts] = useState([]);

  const history = useHistory();
  const token = localStorage.getItem("@TrashNoFood:token");
  const id = Number(localStorage.getItem("@TrashNoFood:id"));

  const auth = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getProducts = () => {
    api.get(`/users/${id}?_embed=products`, auth).then((res) => {
      setProducts(res.data.products);
      setInfos(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = ({ category, name, price, description, img, validity }) => {
    const product = {
      category,
      name,
      price,
      description,
      img,
      validity,
      userId: id,
    };
    api
      .post("/660/products", product, auth)
      .then((_) => {
        toast.success("Produto adicionado!");
        getProducts();
        reset();
      })
      .catch((_) => toast.error("Algo deu errado, verifique os dados!"));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("@TrashNoFood:token");
    localStorage.removeItem("@TrashNoFood:id");
    history.push("/");
  };

  return (
    <DashBoardBg>
      <DashBoardContainer>
        <header className="dashboardHeader">
          <img src={logo} alt="" />
          <button onClick={logout}>Sair</button>
        </header>

        <section className="dashboardSection">
          <h2>Olá, {infos.name}</h2>
          <p>{infos.bio}</p>
        </section>

        <main className="dashboardMain">
          <div className="divAdd">
            <button onClick={openModal} className="dashboardMain--button">
              Adicionar Produto
            </button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="headerModal">
              <h2 className="titleModal">Adicione seu Produto</h2>
              <span className="X" onClick={closeModal}>
                {" "}
                <FiXCircle />{" "}
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register}
                name="category"
                error={errors.category?.message}
                label="Categoria"
                type="text"
                placeholder="Panificadora"
              />
              <Input
                register={register}
                name="name"
                error={errors.name?.message}
                label="Nome"
                type="text"
                placeholder="Pão francês"
              />
              <Input
                register={register}
                name="price"
                error={errors.price?.message}
                label="Preço"
                type="text"
                placeholder="2.99"
              />
              <Input
                register={register}
                name="description"
                error={errors.description?.message}
                label="Descrição"
                type="text"
                placeholder="Pão crocante e quentinho"
              />
              <Input
                register={register}
                name="img"
                error={errors.img?.message}
                label="Imagem"
                type="text"
                placeholder="URL da imagem"
              />
              <Input
                register={register}
                name="validity"
                error={errors.validity?.message}
                label="Validade"
                type="date"
              />
              <button className="enviar dashboardMain--button" type="submit">
                Enviar
              </button>
            </form>
          </Modal>

          <div className="cardsContainer">
            {products.length === 0 ? (
              <h2>Você não tem produtos adicionados</h2>
            ) : (
              products.map((elem) => (
                <DashBoardCards
                  elem={elem}
                  setProducts={setProducts}
                  key={elem.id}
                />
              ))
            )}
          </div>
        </main>
      </DashBoardContainer>
    </DashBoardBg>
  );
};

export default DashBoardPJ;
