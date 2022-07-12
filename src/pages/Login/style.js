import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: var(--background-footer);
  color: var(--background-company);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 38px 18px 24px 18px;
  gap: 10px;

  background-color: var(--background-header-home);

  border-radius: 4px;
  box-shadow: var(--box-shadow);
  h1 {
    display: flex;
    justify-content: center;
  }
  button {
    margin-top: 8px;
    margin-bottom: 8px;

    background: var(--color-button-two);
    color: var(--white);
    font-weight: 600;

    border: 1px solid var(--color-primary-dark);
    border-radius: 4px;

    width: 259.9px;
    height: 38.5px;

    &:hover {
      background: var(--color-button-home-hover);
    }
  }

  input {
    background-color: #262626;
    color: var(--white);
    font-weight: 600;

    align-items: center;

    padding: 0.3rem;

    border: 1px solid var(--color-primary-dark);
    border-radius: 4px;

    width: 264.66px;
    height: 38.5px;

    &::placeholder {
      color: var(--white);
      font-weight: 600;
    }
  }
`;
export const ContainerMessage = styled.div`
  text-align: center;
  width: 100%;
  strong {
    font-weight: 500;
  }
`;
