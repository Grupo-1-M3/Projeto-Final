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

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  .vitrineHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;

    form {
      margin-bottom: 1.5rem;
    }

    .vitrineLogo {
      width: 100px;
      height: 100px;
    }
  }
`

export const ContainerButton = styled.button`
  background: #04812E;
  color: black;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
  height: 30px;
  border-radius: 30px;
  border: none;
  transition: 0.5s;
  padding: 0 0.5rem;
  width: 150px;
  margin-right: 8px;
  :hover {
    color: white;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 550px;
  max-height: 800px;
  overflow: auto;

  .vitrineCard {
    /* background-color: var(--background-header-home); */
    background-color: #04812E;
    width: calc((100% - 4rem)/4);
    height: 300px;
    border-radius: 4px;
    font-size: .8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 1.5rem;

    .vitrineInfos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 95px;
    }

    img {
      width: 100%;
      height: 120px;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }

    button {
      border: none;
      border-radius: 4px;
      height: 25px;
      width: 150px;
      outline: none;
      color: white;
      margin-bottom: 1rem;
    }
  }
`;
