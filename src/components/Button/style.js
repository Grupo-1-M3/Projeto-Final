import styled from "styled-components";

export const StyledButton = styled.button`
  margin-bottom: 10px;
  margin-left: 200px;

  background: var(--color-button-home-hover);
  color: var(--white);
  font-weight: 600;

  border: 1px solid var(--color-primary-dark);
  border-radius: 4px;

  width: 100px;
  height: 38px;
  &:hover {
    background: var(--color-primary-dark);
  }
`;
