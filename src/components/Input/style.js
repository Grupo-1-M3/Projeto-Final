import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  label {
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  input {
    background: var(--color-light-green);
    color: var(--color-primary-dark);
    font-weight: 600;
    align-items: center;
    border: 1px solid var(--color-light-green);
    border-radius: 4px;
    &::placeholder {
      color: var(--color-primary-dark);
      font-weight: 600;
    }
  }
`;
