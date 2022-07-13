import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 651px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .vitrineFiltro {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 650px) {
    height: 165px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .vitrineFiltro {
      width: 80%;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 360px) {
    .vitrineFiltro {
      width: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1316px) {
    margin-left: 1.5rem;
    padding-right: 1.5rem;
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
  align-items: center;
  height: 700px;
  max-height: 800px;
  overflow: auto;
  gap: 1rem;

  .vitrineCard {
    background-color: var(--background-header-home);
    color: white;
    box-sizing: border-box;
    width: calc((100% - 3rem)/4);
    height: 300px;
    border-radius: 4px;
    font-size: .8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1166px) {
      width: calc((100% - 2rem)/3)
    }

    @media (max-width: 750px) {
      width: calc((100% - 1rem)/2)
    }

    @media (max-width: 442px) {
      width: 100%
    }

    .vitrineInfos {
      padding-left: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 95px;
      text-align: left;

      h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        font-size: .85rem;
      }

      .vitrinePrice {
        font-size: .95rem;
        font-weight: 600;
      }
    }

    img {
      width: 100%;
      height: 130px;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }

    .vitrineButtonContainer {
      width: 100%;
      text-align: left;
      padding-left: 1rem;
    }

    button {
      border: none;
      border-radius: 4px;
      height: 25px;
      width: 150px;
      outline: none;
      color: black;
      margin-bottom: 1rem;
      background-color: #04812E;
    }

    button:hover {
      color: white;
    }
  }
`;
