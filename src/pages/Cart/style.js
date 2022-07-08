import styled from "styled-components";

export const ContainerCart = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #181818;
  > div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 10px;
  }
  > div > ul {
    width: 100%;
    display: flex;
    gap: 25px;
    margin-left: 70px;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media (max-width: 755px) {
    > div {
      flex-direction: column-reverse;
      align-items: center;
    }
    > div > ul {
      width: 300px;
      margin-left: auto;
      overflow: scroll;
      height: 500px;
    }
  }
  @media (max-width: 425px) {
    > div > ul {
      width: 300px;
      margin-left: 1px;
      overflow: scroll;
      height: 500px;
    }
  }
  @media (max-width: 370px) {
    > div > ul {
      width: 300px;
      margin-left: auto;
      overflow: scroll;
      height: 500px;
    }
  }
`;

export const ContainerWarning = styled.section`
  width: 100%;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0bda51;
`;
