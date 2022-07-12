import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  margin: 0 auto;

  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  background-color: #000000;
`;

export const Form = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  margin-bottom: 15px;
  min-height: 580px;
  height: max-content;
  max-width: 300px;

  border-radius: 10px;
  box-shadow: 0 0 10px 1px var(--color-dark-green);

  background: var(--color-medium-green);

  input {
    padding: 0.3rem;

    height: 38px;
    width: 265px;

    border-radius: 8px;

    background-color: #e5f2ff;
    border: none;
    outline: none;
  }

  button {
    background-color: #05732a;

    border: none;
    border-radius: 15px;

    margin: 1rem 0;

    width: 95%;
    height: 30px;
    color: #000;
  }

  button:hover {
    background-color: #04812e;
  }
`;
