import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  background: linear-gradient(
    var(--background-header-home),
    var(--background-home)
  );

  img {
    width: 120px;
  }
`;

export const Container = styled.div`
  padding: 50px 0;
  background: var(--background-home);

  width: 100%;
  max-width: 1340px;

  margin: 0 auto;

  color: var(--white);

  h2 {
    text-align: center;
    padding: 20px 0;
  }

  .swiper-slide {
    img {
      height: 356px;
      padding: 50px 0;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    padding: 30px;
    flex-wrap: wrap;
  }

  .product {
    cursor: pointer;
    background: var(--background-header-home);
    width: 350px;
    height: 260px;
    border-radius: 5px;
    font-size: 13px;
    margin: 10px;

    color: var(--color-primary);

    img {
      width: 100%;
      height: 150px;
      border-radius: 5px;
    }

    & > span {
      font-size: 11px;
      float: right;
      padding: 5px;
      background: var(--color-button-home-hover);
      margin-top: -4px;
      border-bottom-left-radius: 5px;
    }

    & > div {
      padding: 10px;

      p {
        padding: 15px 0;
      }
    }

    @media screen and (max-width: 320px) {
      & > div p {
        font-size: 11px;
      }
    }

    div > div {
      display: flex;
      justify-content: space-between;
      font-weight: 600;
    }
  }

  .verMais {
    display: flex;
    justify-content: center;

    padding-bottom: 50px;

    button {
      width: 200px;
      margin: 0 auto;

      background: var(--color-button-home);
      border: 1px solid var(--color-button-home);
      color: white;

      padding: 10px 0;
      border-radius: 4px;
      font-weight: bold;

      :hover {
        background: var(--color-button-home-hover);
        border-color: var(--color-button-home-hover);
        transition: 0.5s;
      }
    }
  }
`;

export const Content = styled.div`
  background: var(--background-home);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 20px;
  }

  div > h1 {
    font-size: 48px;
    line-height: 1;
    width: 100%;
    max-width: 411px;
    color: #0bda51;
  }

  div > p {
    padding: 20px 0;
    line-height: 1.8;
    width: 100%;
    max-width: 508px;
  }

  img {
    padding: 50px 0;
  }

  div div > button {
    margin-right: 15px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid var(--color-button-home);
    background: var(--color-button-home);
    color: var(--white);
    font-weight: bold;

    :hover {
      background: var(--color-button-home-hover);
      border-color: var(--color-button-home-hover);
      transition: 0.5s;
    }

    @media screen and (max-width: 300px) {
      font-size: 11px;
    }
  }

  @media screen and (max-width: 650px) {
    img {
      width: 100%;
      padding: 20px 0;
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;

    div {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 425px) {
    div > h1 {
      font-size: 28px;
    }

    div > p {
      font-size: 13px;
    }

    div div {
      padding-top: 0;
    }
  }

  @media screen and (max-width: 320px) {
    div div {
      display: flex;
      justify-content: center;
    }

    div div > button {
      margin: 10px;
    }
  }
`;

export const FooterStyled = styled.footer`
  padding: 20px 20px 5px 20px;
  text-align: center;
  color: var(--white);
  background: var(--background-footer);
  width: 100%;
  & > div {
    height: 366px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .telephone {
    letter-spacing: 1.5px;
  }

  & > p {
    font-size: 13px;
  }

  h2 {
    font-size: 48px;
    line-height: 1.2em;
    font-weight: normal;
    width: 100%;
    max-width: 374px;
  }

  div div > h4 {
    font-size: 25px;
    font-weight: normal;
    padding: 15px 0;
  }

  div div > p {
    line-height: 1.8em;
  }

  div div div > img {
    width: 39px;
    height: 39px;
    margin: 0 10px;

    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    div > div {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    & > div {
      height: 366px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .telephone {
      letter-spacing: 1.5px;
    }

    & > p {
      font-size: 13px;
      color: grey;
    }

    h2 {
      font-size: 28px;
    }
  }
`;
