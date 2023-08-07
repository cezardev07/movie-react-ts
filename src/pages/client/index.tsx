import { Container } from "./style";
import { NewList } from "../../components/new_list";
import { MyContext } from "../../context/provider";
import { Key, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Client = () => {
    const {maisAssistidos, recomendados, lancamentos} = useContext<any>(MyContext)

    const [allMovies, setAllMovies] = useState<any>([])

    useEffect(() => {
        setAllMovies([...maisAssistidos, ...recomendados, ...lancamentos])
    }, [maisAssistidos, recomendados, lancamentos])

    return(
        <Container>
            <section className="hero"></section>
            <NewList props={{maisAssistidos,title:"mais assistidos", active : true, type:"mais_assistidos"}}/>
            <NewList props={{recomendados, title:"recomendados", active : false, type:"recomendados"}}/>
            <NewList props={{lancamentos, title:"lançamentos", active : true, type:"lancamentos"}}/>
            
            {
                allMovies.length > 0 && (
                    <section className="lancamentos">
                        <div className="title">
                            <h2>filmes da semana</h2>
                        </div>
                        <div className="filmes">
                            {
                                allMovies.map((movie: {
                                        [x: string]: any; img_movie: string | undefined; name: string | undefined; 
                                    }, i: Key | null | undefined) => {
                                    return(
                                        <Link to={`trailer/embed/${movie.url}`} key={i} className="filme">
                                            <img src={movie.img_movie} alt={movie.name} />
                                            <div className="hover">
                                                <p>assistir</p>
                                            </div>
                                        </Link> 
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            }
        </Container>
    )
}