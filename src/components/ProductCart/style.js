import styled from "styled-components";

export const CardContainer = styled.div`
  width: 265px;
  height: 265px;
  margin-top: 25px;
  margin-left: 10px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  color: #fff;
  background-color: #282528;
  &:hover {
    border: 1px solid transparent;
    background-color: #3a343a;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  .img-div {
    max-height: 280px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
  .product-name {
    font-size: 15px;
    font-weight: 500;
  }
  .product-price {
    font-size: 17px;
    font-weight: 500;
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
  @media (max-width: 980px) {
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    .img-div {
      max-width: 100%;
      object-fit: center;
      background-color: inherit;
      transition: all 0s;
    }
    .img {
      max-width: 100%;
      object-fit: center;
    }
  }
`;
