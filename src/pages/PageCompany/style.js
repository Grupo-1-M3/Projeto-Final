import styled from "styled-components"


<<<<<<< Updated upstream
export const Container = styled.div`

    color: var(--white);
    max-width: 1496px;
    width: 100%;

    .divLogo {
        position: relative;
        display: flex;
        justify-content: center;
        height: 280px;

        & > img {
            min-width: 200px;
            object-fit: contain;
        }
        
        button {
            width: 45px;
            height: 45px;
            border-radius: 50%;

            color: var(--white);

            background: var(--background-header-home);
            border: 1px solid var(--background-header-home);
        }

        .botaoVoltar {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2000;
            margin: 15px 0 0 15px;

            font-weight: bold;
            font-size: 22px;
        }
    }

    .telaLoad {
        height: 100vh;
        width: 100%;
        background: var(--color-box-shadow);
        z-index: 2000;
        position: fixed;
        backdrop-filter: blur(2px);

        display: flex;
        justify-content: center;
        align-items: center;
        
        p {
            font-size: 28px;
            color: var(--white);
        }
    }

    @media (min-width: 2000px) {
        margin: 0 auto;
    }
`

export const HeaderStyled = styled.header`

    img {
        width: 100%;
        height: 280px;

        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

export const Container = styled.div`

    padding: 20px;

    ::before {
        content: "";
        height: 0.5px;
        width: 100%;
        max-width: 1103px;

        display: flex;
        justify-content: center;

        margin: 0 auto;

        background: var(--white);
    }

    .listProduct {
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    .product {
        width: 256px;
        height: 204px;

        background: red;

        img {
            width: 100%;
            height: 112.09px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        div > p {
            display: flex;
            flex-direction: column;
            font-size: 9px;

            time {
                font-size: 12px;
            }

            
        }
    }
`

export const Content = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;

    div {
        display: flex;
        flex-direction: column;
    }

    div > h2 {
        font-size: 20.8px;
        font-weight: 500;
    }

    div div, div div > p {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div div p > img {
        margin: 0 8px;
        width: 4px;
        height: 4px;
    }
    
    div div > p {
        font-size: 13px;
        padding-bottom: 10px;
    }

    div > section {
        width: 78px;
        height: 32px;
        border-radius: 5px;
        
        cursor: default;

        align-items: center;
        display: flex;
        justify-content: center;
        
        padding: 0 5px;
        color: var(--color-select-company);
        
        border: 1px solid var(--background-button-company);
        background: var(--background-button-company);

        :hover {
            color: var(--white);
            border: 1px solid #04812E;
            background: #04812E;
        }
    }

    & > div > img {
        width: 79px;
        height: 73px;
        border-radius: 50%;
        margin-bottom: 5px;    
    }

    div div > img {
        width: 12px;
    }

    .div {
        
        align-items: center;

        p {
            font-size: 10px;
            padding-top: 10px;
            padding-right: 5px;
        }
    }

    .divBanner {
        align-items: flex-end;
    }

    & > div > p {
        padding-top: 3px;
        font-size: 7px;
        text-align: end;
    }
`

export const Content = styled.div`

    padding: 30px;

    &::before {
        content: "";
        width: 100%;
        max-width: 1200px;
        height: 0.5px;
        border: 0;
        background: var(--white);
        margin: 0 auto;
        display: block;
    }

    h2 {
        padding: 20px 0;
    }

    & > div {

        display: flex;
        justify-content: unset;
        overflow-x: auto;

        &::-webkit-scrollbar {
            height: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--color-primary-dark);
            border-radius: 25px;

            :hover {
                background: var(--background-button-company);
            }
        }

        &::-webkit-scrollbar-track-piece {
            background: transparent;
        }

        .product {
            background: var(--background-header-home);
            height: 260px;
            border-radius: 5px;
            font-size: 13px;
            margin: 10px;

            width: 100%;
            max-width: 290px;

            color: var(--color-primary);

            img {
                height: 150px;
                border-radius: 5px;
                
                width: 100%;
                min-width: 290px;
            }

            & > span {
                background: var(--color-box-shadow);
                float: right;
                margin-top: -3px;
                padding: 5px;
                border-bottom-left-radius: 5px;
            }

            & > div {

                padding: 10px;

                p {
                    padding: 15px 0;
                }
            }

            div > div {
                display: flex;
                justify-content: space-between;
                font-weight: 600;
            }
        }
    }

    @media screen and (max-width: 700px) {
        
        & > div {
            display: flex;
            align-items: center;
            flex-direction: column;

            overflow: unset;

            .product {
                width: 100%;

                img {
                    min-width: unset;
                }
            }
        }
=======
    padding: 28px 20px 20px 20px;

    & > div {
        padding: 15px;
    }

    div > h2 {
        font-size: 23px;
    }

    div > .divCategoria {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 5px 0 15px 0;
        font-size: 13px;

        img {
            margin: 0 10px;
        }
    }

    div > select {
        width: 78px;
        height: 32px;
        background: var(--background-select);
        border-radius: 5px;
        color: var(--color-select);
        padding: 0 3px;
        margin-left: 5px;
    }

    div > .divAvaliacao {

        display: flex;
        align-items: center;
        padding: 10px 0;

        span {
            font-size: 10px;
            margin-right: 5px;
        }
    }

    & > .div > div > img {
        width: 79px;
        height: 73px;
        border-radius: 50%;

        margin-bottom: 10px;
        float: right;
    }

    & > div > button {
        width: 194px;
        height: 32px;
        border-radius: 5px;
        color: var(--color-select);
        background: var(--background-select);
        padding: 0 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 12.83px;

        img {
            margin: 0 5px;
        }
    }

    & > div > span {
        font-size: 7px;
        float: right;
        padding: 10px 0;
    }

    @media screen and (max-width: 425px) {

>>>>>>> Stashed changes
    }
`
