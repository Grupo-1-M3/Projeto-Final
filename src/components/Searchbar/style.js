import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
`;
export const InputContainer = styled.div`
  border-radius: 30px;
  padding: 0.8rem;
  transition: 0.5s;
  border: 1px solid var(--color-primary);
  background: var(--color-primary);
  width: 230px;
  height: 50px;

  :focus-within {
    border: 1px solid white;
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--color-medium-green);

    &::placeholder {
      color: var(--color-medium-green);
      font-weight: 600;
    }
  }
`;

export const ContainerButton = styled.button`
  background: var(--color-primary);
  color: var(--color-medium-green);
  height: 30px;
  border-radius: 30px;
  border: 1.5px solid var(--color-primary);
  transition: 0.5s;
  padding: 0 0.5rem;
  :hover {
    border: 1.5px solid var(--color-primary);
  }
`;
