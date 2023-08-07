import { styled } from "styled-components"

export const Container = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title{
        width: 100%;
        background: #111111;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
            font-size: 25px;
            text-transform: capitalize;
            margin-left: 20px;
            font-weight: 400;
            text-transform: uppercase;
        }
        .wrapper{
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            button{
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                cursor: pointer;
                background: #000;
                border: none;
                color: #fff;
                text-transform: capitalize;
                border-radius: 5px;
            }
            button:hover{
                box-shadow: 0px 0px 10px 1px #dddddd3b;
            }
            button:active{
                scale: .9;
            }
        }
    }
    ul{
        width: 100%;
        /* overflow: hidden; */
        overflow-x: auto;
        display: flex;
        flex-direction: row;
        gap: 40px;
        li{
            list-style: none;
            /* .filme{
                width: 250px;
                height: 350px;
                cursor: pointer;
                transition: all .3s ease;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .filme:hover{
                filter: blur(5px);
                scale: 1.05;
            } */

            
            .filme{
                position: relative;

                width: 250px;
                height: 350px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                overflow: hidden;
                transition: all .3s ease;
                overflow: hidden;
                border-radius: 5px;
                
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all .3s ease;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hover{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 1;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: transparent;
                    transition: all .3s ease;
                    p{
                        color: transparent;
                        cursor: default;
                        padding: 10px;
                        font-size: 16px;
                        text-transform: uppercase;
                        border-radius: 5px;
                        transition: all .3s ease;
                    }
                    p::selection{
                        background: transparent;
                    }
                }
                
            }
            .filme:hover .hover{
                background: #11111180;
                cursor: pointer;
                p{
                    background: tomato;
                    color: white;
                    cursor: pointer; 
                }
                p::selection{
                    background: tomato;
                }
                p:hover{
                    filter: brightness(90%);
                }
            }
            
            .filme:hover img{
                scale: 1.05;
                filter: blur(5px);
            }
            .filme:active{
                scale: .9;
            }
        }
    }
`