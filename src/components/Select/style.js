import styled, { css } from "styled-components";

export const Container = styled.div`
  label {
    font-size: 12px;
  }
`;

export const SelectContainer = styled.div`
  background-color: var(--grey-2);
  color: var(--grey-0);
  border-radius: 6px;
  border: 2px solid var(--grey-0);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}
  select {
    padding: 4px;
    background: var(--background-header-home);
    color: var(--white);
    font-weight: 600;

    border: 1px solid var(--color-primary-dark);
    border-radius: 4px;

    width: 264.66px;
    height: 38.5px;

    &::placeholder {
      color: var(--color-primary-dark);
      font-weight: 600;
    }
  }
`;
