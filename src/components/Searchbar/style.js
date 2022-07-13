import styled, { css } from "styled-components";

export const Container = styled.div`
  /* text-align: left; */
  `;
export const InputContainer = styled.div`
  margin: 0 auto;
  margin-top: 1.5rem;
  border-radius: 30px;
  padding: 0.8rem;
  transition: 0.5s;
  background: #05732A;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: black;
    font-size: 1rem;
    font-weight: 500;
    &::placeholder {
      color: black;
    }
  }
`;

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #05732A;
  border: none;
  color: black;
  height: 30px;
  border-radius: 30px;
  transition: 0.5s;
  padding: 0 0.5rem;
`;
