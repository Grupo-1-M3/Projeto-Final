import styled from "styled-components"


export const Content = styled.div`

    h4 {
        text-align: center;
        padding: 20px 0;
    }

    .card {

        :hover {

            transform: scale(1.01);
        }

        img:hover {
            
            transition: 1.5s;
            opacity: .6;
            height: 400px;
        }

        button:hover {
            
            opacity: .5;
        }
    }
`