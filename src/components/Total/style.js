import styled from "styled-components";

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 360px;
  padding: 10px;
  box-shadow: 0px 0px 13px 0px black;
  border-radius: 8px;
  background-color: #282528;
  border: var(--color-primary-50) 2px solid;
  margin: 20px;
  margin-right: 4rem;
  color: white;
  h1 {
    font-size: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  button {
    transition: 0.3s;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    font-size: 16px;
    width: 100%;
    padding: 8px 0;
    background-color: #0bda51;
    &:hover {
      background-color: #33c163;
    }
  }

  @media (max-width: 425px) {
    width: 250px;
    margin-right: 1rem;
  }
`;
