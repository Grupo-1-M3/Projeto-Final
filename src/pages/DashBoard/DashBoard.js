import React, { useState } from "react";
import Searchbar from "../../components/Searchbar";
import { ContainerButton, Container, Card } from "./style";

const DashBoard = () => {
  const [filterFood, setFilterFood] = useState([]);

  const foods = [
    {
      name: "lasanha",
      price: 24,
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/13b5e0deaf19b06816d21e67ad4e211c_XL.jpg",
      category: "Pizzas",
    },
    {
      name: "panqueca",
      price: 20,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeU5kewe6oCECK8P7YxIfnoA_DOZ25T3F8Kw&usqp=CAU",
      category: "Doces",
    },
    {
      name: "spaghetti bolognese",
      price: 19,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3E3rJ3syIaR5nCTGtY7lt0U8FhvbQ29COHw&usqp=CAU",
      category: "Panificadora",
    },
  ];

  const handleSearch = (e) => {
    setFilterFood(
      foods.filter((elem) =>
        elem.name
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
      <Card>
        {filterFood.length
          ? filterFood.map((food) => (
              <div key={food.name}>
                <img src={food.img} alt={food.name} />
                <h3>{food.name}</h3>
                <span>{food.price}</span>
                <p>{food.category}</p>
              </div>
            ))
          : foods.map((food) => (
              <div key={food.name}>
                <img src={food.img} alt={food.name} />
                <h3>{food.name}</h3>
                <span>{food.price}</span>
                <p>{food.category}</p>
              </div>
            ))}
      </Card>
    </div>
  );
};

export default DashBoard;
