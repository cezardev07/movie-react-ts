import { styled } from "styled-components";

export const Container = styled.div`

    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1{
        font-size: 40px;
    }
    
    a{
        text-decoration: none;
        color: #fff;
        font-size: 15px;
    }
    a:hover{
        color: royalblue;
        text-decoration: underline;
    }
`