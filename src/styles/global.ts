import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html,body{
        min-height: 100vh;
        background: #000;
        color: #fff;
    }
    html{
        scroll-behavior: smooth;
    }
    html::-webkit-scrollbar {
        width: 5px; 
    }

    html::-webkit-scrollbar-track {
        background-color: transparent; 
    }

    html::-webkit-scrollbar-thumb {
        background-color: tomato;
        border-radius: 0;
    }

    body{
        position: relative;
    }

    ul {
        scroll-behavior: smooth;
        scrollbar-width: none; 
        -webkit-overflow-scrolling: touch; 
    }

  
    ul::-webkit-scrollbar {
        width: 0; 
    }

    ul::-webkit-scrollbar-track {
        background-color: transparent; 
    }

    ul::-webkit-scrollbar-thumb {
        background-color: transparent; 
        border-radius: 0; 
        display: none;
    }

    img{
        pointer-events: none;
    }
    img::selection{
        background: none;
    }
    h2, h1{
        font-weight: 400;
        text-transform: uppercase;
    }
`