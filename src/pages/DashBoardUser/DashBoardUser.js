import React, { useEffect, useState } from "react";
import { useUser } from "../../contexts/User";
import { useProducts } from "../../contexts/Products";

import Searchbar from "../../components/Searchbar";

import { ContainerButton, Container, Card } from "./style";
import { useHistory } from "react-router-dom";

const DashBoard = () => {
  const { user, accessToken } = useUser();
  const { products, handleProduct } = useProducts();

  const [filterFood, setFilterFood] = useState([]);

  const history = useHistory();

  if (!accessToken) {
    history.push("/");
  }

  const handleSearch = (e) => {
    setFilterFood(
      products.filter(
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
    setFilterFood(products.filter((food) => food.category === categoria));
  };

  return (
    <div>
      <h1>DashBoard page</h1>
      <div>
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
      <div>
        <p>Bem-vindo, {user?.name || ""}!</p>{" "}
      </div>
      <Card>
        <ul>
          {filterFood.length
            ? filterFood.map((food) => (
                <div key={food.name}>
                  <img src={food.img} alt={food.name} />
                  <h3>{food.name}</h3>
                  <span>{food.price}</span>
                  <p>{food.category}</p>
                </div>
              ))
            : products?.map((food) => (
                <div key={food.name}>
                  <img src={food.img} alt={food.name} />
                  <h3>{food.name}</h3>
                  <span>{food.price}</span>
                  <p>{food.category}</p>
                </div>
              ))}
        </ul>
      </Card>
    </div>
  );
};

export default DashBoard;
