import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 0 6% 4% 6%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    justify-content: center;
    width: 100vw;
    max-width: 100%;
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
