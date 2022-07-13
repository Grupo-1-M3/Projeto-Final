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

  background-color: var(--background-footer);
  color: var(--white);
`;

export const Form = styled.div`
  width: 100%;
  padding: 38px 18px 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  margin-bottom: 15px;
  min-height: 580px;
  height: max-content;
  max-width: 300px;

  border-radius: 4px;
  box-shadow: var(--box-shadow);

  background: var(--background-header-home);

  input {
    padding: 0.3rem;

    height: 38px;
    width: 265px;

    border-radius: 4px;

    background-color: #262626;
    border: 1px solid var(--color-primary-dark);
    color: var(--white);
    text-align: left;
  }

  button {
    background-color: #3e3b3e;

    border: 1px solid var(--color-primary-dark);
    border-radius: 4px;

    margin: 1rem 0;

    width: 95%;
    height: 38px;
    color: var(--white);

    &:hover {
      background-color: var(--color-button-home-hover);
    }
  }
`;
