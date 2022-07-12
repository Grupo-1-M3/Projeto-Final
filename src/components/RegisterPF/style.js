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
/* 
--white: #FAFAFA;
--color-primary: #f2e8c4;
--color-primary-dark: #616668;
--color-light-green: #98d9b6;
--color-medium-green: #3ec9a7;
--color-dark-green: #2b879e;
--background-company: #F5F5F5;
--background-home: #181818;
--background-header-home: rgba(33, 33, 33, 0.98);
--color-button-home: #282528;
--color-button-home-hover: #4CBB17;
--background-footer: #000;
--color-box-shadow: rgba(0, 0, 0, 0.25);

--radius-inputs-buttons: 0.3rem;
--box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
--container-size: 1200px; 
*/

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
  box-shadow: var(--box-shadow);

  background: var(--color-button-home);

  input {
    padding: 0.3rem;

    height: 38px;
    width: 265px;

    border-radius: 4px;

    background-color: #262626;
    border: 1px solid var(--color-primary-dark);
    color: var(--white);

  }

  button {
    background-color: #3E3B3E;

    border: 1px solid var(--color-primary-dark);
    border-radius: 4px;

    margin: 1rem 0;

    width: 95%;
    height: 38px;
    color: var(--white);

    &:hover{
    background-color: var(--color-dark-green);
  }
  }

`;