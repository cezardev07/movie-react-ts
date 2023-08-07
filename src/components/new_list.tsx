import { useRef, useEffect, Key} from 'react';
import { Container } from "./style";
import { Link } from "react-router-dom";

export const NewList = ({props}: any) => {
    const lista = useRef<HTMLUListElement | null>(null);
    let size = 0

    const prev = () => {
        const lista_dom = lista.current
            
        if (lista_dom) { 
            size -= 250;
            if (size <= 0) {
                size = 0;
            }
            lista_dom.scrollLeft = size;
        }  
    }

    useEffect(() => {
        if(props.active === true){
            setInterval(() => {
                const lista_dom = lista.current
    
                if (lista_dom) { 
                    size += 250;
                    if (size >= (lista_dom.scrollWidth - 200) / 2) {
                        size = 0;
                    }
                    lista_dom.scrollLeft = size;
                }
            }, 5000)
        }
    },[])

    const next = () => {
        const lista_dom = lista.current
        if (lista_dom) { 
            size += 250;
            if (size >= (lista_dom.scrollWidth - 200) / 2) {
                size = 0;
            }
            lista_dom.scrollLeft = size;
        }
    }

    return(
        <Container className="populares">
            {
                props.maisAssistidos && (
                    props.maisAssistidos.length > 0 && (
                        <div className="title">
                            <h2>{props.title}</h2> 
                            <div className="wrapper">
                                <button onClick={prev}>
                                    <span className="material-symbols-outlined">
                                        chevron_left
                                    </span>
                                </button>
                                <button onClick={next}>
                                    <span className="material-symbols-outlined">
                                        navigate_next
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            {
                props.recomendados && (
                    props.recomendados.length > 0 && (
                        <div className="title">
                            <h2>{props.title}</h2> 
                            <div className="wrapper">
                                <button onClick={prev}>
                                    <span className="material-symbols-outlined">
                                        chevron_left
                                    </span>
                                </button>
                                <button onClick={next}>
                                    <span className="material-symbols-outlined">
                                        navigate_next
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            {
                props.lancamentos && (
                    props.lancamentos.length > 0 && (
                        <div className="title">
                            <h2>{props.title}</h2> 
                            <div className="wrapper">
                                <button onClick={prev}>
                                    <span className="material-symbols-outlined">
                                        chevron_left
                                    </span>
                                </button>
                                <button onClick={next}>
                                    <span className="material-symbols-outlined">
                                        navigate_next
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                )
            }
            <ul ref={lista}>
                {
                    props.type === "recomendados" ? (
                        props.recomendados.map((item: {
                                [x: string]: any; img_movie: string | undefined; 
                            }, id: Key | null | undefined) => (
                            <li key={id}>
                                <Link to={`trailer/embed/${item.url}`} className="filme">
                                    <img src={item.img_movie} alt={`Recomendado ${id}`} />
                                    <div className="hover">
                                        <p>assistir</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : props.type === "mais_assistidos" ? (
                        props.maisAssistidos.map((item: {
                            [x: string]: any; img_movie: string | undefined; 
                        }, id: Key | null | undefined) => (
                        <li key={id}>
                            <Link to={`trailer/embed/${item.url}`} className="filme">
                                <img src={item.img_movie} alt={`Recomendado ${id}`} />
                                <div className="hover">
                                    <p>assistir</p>
                                </div>
                            </Link>
                        </li>
                    ))
                    ) : props.type === "lancamentos" ? (
                        props.lancamentos.map((item: {
                            [x: string]: any; img_movie: string | undefined; 
                        }, id: Key | null | undefined) => (
                        <li key={id}>
                            <Link to={`trailer/embed/${item.url}`} className="filme">
                                <img src={item.img_movie} alt={`Recomendado ${id}`} />
                                <div className="hover">
                                    <p>assistir</p>
                                </div>
                            </Link>
                        </li>
                    ))
                    ) : null
                }
            </ul>
        </Container>
    )
}