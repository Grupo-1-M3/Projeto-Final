import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 42px;
  margin-bottom: 42px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerButton = styled.button`
  background: var(--color-light-green);
  color: var(--color-dark-green);
  font-weight: 600;
  height: 30px;
  border-radius: 30px;
  border: 1.5px solid var(--color-light-green);
  transition: 0.5s;
  padding: 0 0.5rem;
  width: 150px;
  margin-right: 8px;

  :hover {
    border: 1.5px solid var(--color-dark-green);
  }
`;

export const Card = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
