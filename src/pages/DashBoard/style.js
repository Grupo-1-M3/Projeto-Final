import styled, { keyframes } from "styled-components";

export const DashBoardBg = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #000000;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px)
    }
    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const DashBoardContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
  animation: ${appearFromLeft} 1.2s;
  .dashboardHeader {
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    @media (max-width: 1301px) {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }
    @media (max-width: 510px) {
      flex-direction: column;
      justify-content: space-around;
      button {
        margin-bottom: 10px;
      }
    }
    img {
      width: 120px;
      height: 120px;
    }
    button {
      width: 80px;
      height: 40px;
      border: none;
      outline: none;
      background-color: #05732a;
      color: white;
      border-radius: 6px;
      font-size: 1rem;
    }
    button:hover {
      background-color: #04812e;
    }
  }
  .dashboardSection {
    margin-top: 35px;
    border-bottom: 1px solid white;
    color: white;

    h2 {
      margin-bottom: 40px;
      margin-left: 50px;
    }
    p {
      margin-bottom: 50px;
      margin-left: 50px;
    }
  }
  .dashboardMain {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    height: 60%;
    .divAdd {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      @media (max-width: 1300px) {
        padding-right: 1.5rem;
      }
    }
    .dashboardMain--button {
      margin-left: 50px;
      margin-bottom: 40px;
      width: 150px;
      height: 40px;
      border: none;
      border-radius: 6px;
      outline: none;
      background-color: #05732a;
      color: white;
      font-size: 1rem;
    }
    .dashboardMain--button:hover {
      background-color: #04812e;
    }
    .cardsContainer {
      background-color: #069c38;
      color: white;
      margin: 0 auto;
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      height: 500px;
      max-height: 700px;
      overflow: auto;
      margin-bottom: 35px;
      padding: 1rem;
      border-radius: 8px;
      @media (max-width: 315px) {
        width: 220px;
      }
    }
  }
`;
