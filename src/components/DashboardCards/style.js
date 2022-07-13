import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: var(--background-header-home);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 6px;
  color: black;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 200px;
    height: 145px;
  }
  span {
    margin-left: 20px;
  }
  .buttonContainer {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
  }
  .editar,
  .excluir {
    width: 40%;
    height: 30px;
    border-radius: 4px;
    margin: 0 auto;
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .excluir {
    background-color: #fc4444;
  }
  .excluir:hover {
    background-color: #fc4444;
  }
  .editar {
    background-color: #1aa348;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
  }
  .category, .price {
    font-weight: 500;
    color: white;
  }
  .description, .validity {
    font-size: .9rem;
    color: white;
  }
`;
