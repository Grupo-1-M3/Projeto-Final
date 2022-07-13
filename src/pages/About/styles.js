import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.justify ? props.justify : "flex-start"};
    align-items: ${(props) => props.align ? props.align : "center"};
    
    width: 100%;
    max-width: ${(props) => props.width};
    min-height: ${(props) => props.heigth ? props.heigth : "100vh"};

    background: rgb(33, 33, 33);
    color: #fff;

    p{
        color: #ffffef;
    }
`

export const ImageCard = styled.div`
    position: relative;
    width: 100%;
    height: max-content;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        position: absolute;
        font-size: 6vh;
        text-shadow: 1px 1px 1px #000;
    }

    @media(max-width: 1000px){
        h1{font-size: 4vh}
    }
`

export const Image = styled.img`
    width: 100%;
    max-width: ${(props) => props.width};
    max-height: 480px;

    object-fit: cover;
    opacity: 0.5;

`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    min-height: 300px;
    max-width: 750px;
    padding: 0.7rem;

    background: rgb(33, 33, 33);
    color: #fff;

    p{
        color: #ffffef;
    }
`
export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    
    width: 100%;
    min-height: 100px;
    gap: 0.1rem;

    background: #000;
    color: #fff;

    img{
        object-fit: contain;
        width: 30px;
        cursor: pointer;
        &:hover{
            zoom: 105%;
        }
    }
    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    .copyright{
        color: grey;
    }

`
