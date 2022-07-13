import logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar";
import { api } from "../../services/api";
import { ContainerButton, Container, Card, ContentContainer } from "./style";

const DashBoard = () => {
  const [filterFood, setFilterFood] = useState([]);
  const [foods, setFoods] = useState([]);
  const token = localStorage.getItem("@TrashNoFood:token");

  const auth = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getProducts = () => {
    api.get("/660/products", auth).then((res) => {
      setFoods(res.data);
      console.log(res)
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (e) => {
    setFilterFood(
      foods.filter(
        (elem) =>
          elem.name
            .toLowerCase()
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/ /g, "")
            .replace(/[^0-9a-zA-Z]/g, "")
            .normalize("NFD")
            .includes(e.target.value.toLowerCase()) ||
          elem.category
            .toLowerCase()
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/ /g, "")
            .replace(/[^0-9a-zA-Z]/g, "")
            .normalize("NFD")
            .includes(e.target.value.toLowerCase())
      )
    );
  };

  const filterByCategory = (categoria) => {
    setFilterFood(foods.filter((food) => food.category === categoria));
  };

  return (
    <div>
      <ContentContainer>
        <div className="vitrineHeader">
          <img src={logo} alt="Trash No Food" className="vitrineLogo" />
          <form>
            <Searchbar
              placeholder="Digite aqui sua pesquisa"
              onChange={handleSearch}
            />
          </form>
        </div>
        <Container>
          <ContainerButton onClick={() => filterByCategory("")}>
            Todos
          </ContainerButton>
          <ContainerButton onClick={() => filterByCategory("Panificadora")}>
            Panificadora
          </ContainerButton>
          <ContainerButton onClick={() => filterByCategory("Doces")}>
            Doces
          </ContainerButton>
          <ContainerButton onClick={() => filterByCategory("Pizzas")}>
            Pizzas
          </ContainerButton>
        </Container>
        <Card>
          {filterFood.length
            ? filterFood.map((food) => (
                <div className="vitrineCard" key={food.id}>
                  <img src={food.img} alt={food.name} />
                  <div className="vitrineInfos">
                    <h2>{food.name}</h2>
                    <span>R$ {food.price}</span>
                    <span>{food.category}</span>
                  </div>
                  <div>
                    <button>Adicionar ao Carrinho</button>
                  </div>
                </div>
              ))
            : foods.map((food) => (
                <div className="vitrineCard" key={food.id}>
                  <img src={food.img} alt={food.name} />
                  <div>
                    <h2>{food.name}</h2>
                    <span>R$ {food.price}</span>
                    <span>{food.category}</span>
                  </div>
                  <div>
                    <button>Adicionar ao Carrinho</button>
                  </div>
                </div>
              ))}
        </Card>
      </ContentContainer>
    </div>
  );
};

export default DashBoard;
