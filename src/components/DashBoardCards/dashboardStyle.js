import styled from "styled-components";

export const Card = styled.div`
    width: 200px;
    height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 15px;
    border-radius: 6px;
    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    span {
        margin-left: 20px;
    }
    .buttonContainer {
        display: flex;
        width: 100%;
        height: 40px;
    }
    .editar, .excluir {
        width: 40%;
        margin: 0 auto;
    }
    .excluir {
        background-color: #fc4444;
    }
    .excluir:hover {
        background-color: #fc4444;
    }
    .editar {
        background-color: var(--color-light-green);
    }
`