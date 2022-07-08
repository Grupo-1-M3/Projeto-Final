import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: rgba(33, 33, 33, 0.98);
  color: #0bda51;
  box-shadow: 0 5px 3px -3px #ddd;
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    svg {
      color: #0bda51;
      transition: 0.3s;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 764px) {
    max-width: 100vw;
  }
`;
