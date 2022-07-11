import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background: var(--color-primary);
    color: var(--color-primary);
`
export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    
    padding: 38px 18px 24px 18px;
    gap: 10px;

    background-color: var(--color-medium-green);

    border-radius: 4px; 
    box-shadow: var(--box-shadow);
    h1{
        display: flex;
        justify-content: center;
    }
    button {
        margin-top: 8px;
        margin-bottom: 8px;

        background: var(--color-light-green);
        color: var(--color-primary-dark);
        font-weight: 600;

        border: 1px solid var(--color-light-green);
        border-radius: 4px;

        width: 259.9px;
        height: 38.5px;

    }
    input {
        background: var(--color-light-green);
        color: var(--color-primary-dark);
        font-weight: 600;

        align-items: center;

        padding: .3rem;

        border: 1px solid var(--color-light-green);
        border-radius: 4px;

        width: 264.66px;
        height: 38.5px;
        
        &::placeholder {
        
            color: var(--color-primary-dark);
            font-weight: 600;
        }
    }
`
export const ContainerMessage = styled.div`
    text-align: center;
    width: 100%;
    strong {
        font-weight: 500;
    }
`