import { styled } from 'styled-components';
import bg_hero from "../../assets/bg-hero.jpg";

export const Container = styled.main`
    max-width: 1800px;
    margin: 0 auto;
    section.hero{
        background-image: url(${bg_hero});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
    section.lancamentos{
        width: 100%;

        .title{
            padding: 20px 0 ;
            width: 100%;
            background: #111111;
            margin: 20px 0;

            h2{
                margin-left: 20px;
                font-size: 25px;
                font-weight: 400;
                text-transform: uppercase;
            }
        }
        .filmes{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
            gap: 20px;
            .filme{
                position: relative;

                width: 100%;
                height: 100%;
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
            .filme:hover{
                box-shadow: 0px 0px 10px 5px tomato;
            }
        }
    }
    section.newsletter{
        width: 100%;
        .title{
            background: #111111;
            text-align: center;
            text-transform: capitalize;
            padding: 20px;
            margin: 20px 0;
            font-size: 30px;
        }
        form{
            margin: 0 auto;
            max-width: 600px;
            display: flex;
            gap: 5px;
            input{
                width: 100%;
                padding: 0 20px;
                border-radius: 5px;
                outline: none;
                font-size: 15px;
            }
            button{
                padding: 10px 20px;
                font-size: 20px;
                border: none;
                cursor: pointer;
                background: red;
                color: white;
                border-radius: 5px;
                transition: all .3s ease;
            }
            button:hover{
                box-shadow: 0px 0px 10px 1px tomato;
                background: tomato;
            }
        }
    }
`