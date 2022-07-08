import styled from "styled-components";

export const DashBoardContainer = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;

    header {
        height: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;

        @media (max-width: 1301px) {
            padding-right: 1.5rem;
            padding-left: 1.5rem;
        }

        @media (max-width: 510px) {
            flex-direction: column;
            justify-content: space-around;
        }

        button {
            width: 80px;
            height: 25%;
            border: none;
            outline: none;
            background-color: black;
            color: white;
            border-radius: 6px;
        }
    }

    section {
        margin-top: 35px;
        border-bottom: 1px solid black;
        
        h2 {
            margin-bottom: 40px;
            margin-left: 50px;
        }

        p {
            margin-bottom: 50px;
            margin-left: 50px;
        }
    }

    main {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        height: 60%;

        .divAdd {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            
            @media (max-width: 1300px) {
                padding-right: 1.5rem;
            }
        }

        button {
            margin-left: 50px;
            margin-bottom: 40px;

            width: 150px;
            height: 30px;

            border: none;
            border-radius: 6px;

            outline: none;
            background-color: #d3d3d3;

        }
        button:hover {
            background-color: var(--color-light-green); 
        }
        .cardsContainer {
            background-color: var(--color-primary-dark);
            margin: 0 auto;

            width: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;

            height: 500px;
            max-height: 700px;
            overflow: auto;

            margin-bottom: 35px;
            padding: 1rem;
            border-radius: 8px;

            @media (max-width: 315px) {
                width: 220px;
            }

        }
    }
`