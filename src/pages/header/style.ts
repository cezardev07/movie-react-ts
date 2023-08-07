import { styled } from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
    background: #111111;
    width: 100%;
    padding: 20px;
    nav{
        max-width: 1800px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        .logo{
            position: relative;
            font-size: 40px;
            font-weight: 600;
            color: #fff;
            text-transform: capitalize;
            span{
                color: tomato;
            }
            span.material-symbols-outlined{
                font-size: 20px;
                white-space: pre-line;
                position: absolute;
            }
        }
        a{
            text-decoration: none;
        }
        .nav-bar{
            a{
                padding: 11px;
                background: tomato;
                color: #fff;
                font-size: 20px;
                border: none;
                border-radius: 5px;
                transition: all .3s ease;
                cursor: pointer;
                text-transform: capitalize;
                display: flex;
                align-items: center;
                justify-content: center;

                text-decoration: none;
            }
            a:hover{
                box-shadow: 0px 0px 10px 3px tomato;
            }
        }
    }
`