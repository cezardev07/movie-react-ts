import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    min-height: calc(100vh - 150px);

    .wrapper-video{
        width: 1300px;
        margin: 0 auto;
        padding: 20px;
        aspect-ratio: 16/9;
        iframe{
            width: 100%;
            height: 100%;
        }
    }
`
