import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1820px;
    margin: 0 auto;
    padding: 0 10px;
    .title{
        width: 100%;
        background: #111111;
        padding: 20px;
        margin: 20px 0;
    }
    .title-form{
        width: 100%;
        padding: 20px;
        margin: 20px 0;
        text-align: center;
    }
    form{
        max-width: 1000px;
        margin: 0 auto;
        .input-wrapper{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            .wrapper{
                display: flex;
                flex-direction: column;
                gap: 10px;
                label{
                    font-size: 18px;
                    text-transform: uppercase;
                    cursor: pointer;
                }
            }
            input, select{
                padding: 20px;
                font-size: 20px;
            }
            select{
                cursor: pointer;
                height: 100%;
                height: 71px;
                border-radius: 5px;
            }
            input{
                background: transparent;
                border: solid 2px tomato;
                color: #ffffff;
                outline: none;
                border-radius: 5px;
            }
            input::placeholder{
                text-transform: capitalize;
            }
            select{
                background: tomato;
                color: white;
                border: none;
                option{
                    padding: 20px;
                    font-size: 20px;
                }
            }
        }
        
        @media (max-width: 634px) {
            .input-wrapper{
                grid-template-columns: repeat(1, 1fr);
                gap: 10px;
            }
        }
        .wrapper-button{
            width: 100%;
            padding-top: 20px;
            text-align: center;
            button{
                width: 100%;
                cursor: pointer;
                background: #06b351;
                color: #fff;
                border: none;
                font-size: 20px;
                text-transform: uppercase;
                padding: 20px;
            }
            button:hover{
                background: #0c9b4b;
            }
            button:active{
                background: #06b351;
            }
        }
    }
    .wrapper-movies{
        ul{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 40px;

            .all-movie{
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
            .all-movie:hover .hover{
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
            
            .all-movie:hover img{
                scale: 1.05;
                filter: blur(5px);
            }
            .all-movie:active{
                scale: .9;
            }
            .all-movie:hover{
                box-shadow: 0px 0px 10px 5px tomato;
            }
        }
    }
`