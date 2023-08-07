import { 
    useContext, 
    useState 
} from "react"
import { MyContext } from "../../context/provider"
import { Container } from "./style"

export const Admin = () => {
    const [img, setImg] = useState<string>()
    const [name, setName] = useState<string>()
    const [urlYoutube, setUrlYoutube] = useState<string>()
    const [select, setSelect] = useState<string>()

    const { 
        maisAssistidos,
        setMaisAssistidos,
        recomendados,
        setRecomendados,
        lancamentos,
        setLancamentos
    } = useContext(MyContext)

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        
        const type = select === undefined || select === "recomendados" ? "recomendados" : select
        const url = urlYoutube

        if (url !== undefined) {
            // Extrair o código do vídeo
            const newUrlVideo = url.match(/(?:\?|&)v=([^&]+)/);
            if (newUrlVideo) {
                const videoCode = newUrlVideo[1];
                const newMovie = {
                    img_movie: img,
                    name,
                    url: videoCode
                }
                type === "recomendados" && setRecomendados((prevMovie: any) => [...prevMovie, newMovie])
        
                type === "mais_assistidos" && setMaisAssistidos((prevMovie: any) => [...prevMovie, newMovie])
                
                type === "lancamentos" && setLancamentos((prevMovie: any) => [...prevMovie, newMovie])        
            }
        }
        alert("seu filme foi publicado em " + type)
        setImg("")
        setName("")
        setUrlYoutube("")
    }

    const handleRemoveMovieMaisAssistidos = (id: number) => {
        const filterMovie = maisAssistidos.filter((_movie, i) => i !== id)
        setMaisAssistidos(filterMovie)
    }

    const handleRemoveMovieRecomendados = (id: number) => {
        const filterMovie = recomendados.filter((_movie, i) => i !== id)
        setRecomendados(filterMovie)
    }

    const handleRemoveMovieLancamentos = (id: number) => {
        const filterMovie = lancamentos.filter((_movie, i) => i !== id)
        setLancamentos(filterMovie)
    }

    return(
        <Container>
            <div className="title-form">
                <h1>Criar novo filme</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <div className="wrapper">
                        <label htmlFor="img">imagem url:</label>
                        <input id="img" value={img} onChange={({target}) => setImg(target.value)} required type="url" placeholder="imagem url"/>
                    </div>
                    <div className="wrapper">
                        <label htmlFor="name">nome filme:</label>
                        <input id="name" value={name} onChange={({target}) => setName(target.value)} required type="text"placeholder="nome" />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="url">url trailer YouTube:</label>
                        <input id="url" value={urlYoutube} onChange={({target}) => setUrlYoutube(target.value)} required type="url" placeholder="url trailer YouTube"/>
                    </div>
                    <div className="wrapper">
                        <label htmlFor="category">categoria:</label>
                        <select id="category" required onChange={({target}) => setSelect(target.value)} defaultValue="recomendados">
                            <option value="lancamentos">
                                lançamentos
                            </option>
                            <option value="mais_assistidos">
                                mais assistidos
                            </option>
                            <option value="recomendados">
                                recomendados
                            </option>
                        </select>
                    </div>
                </div>
                <div className="wrapper-button">
                    <button type="submit">publicar</button>
                </div>
            </form>
            <div className="wrapper-movies">
                {
                    maisAssistidos.length > 0 && (
                        <div className="title">
                            <h2>mais assistidos</h2>
                        </div>
                    )
                }
                <ul>
                    {
                        maisAssistidos.map((movie, i) => {
                            return(
                                <div key={i} className="all-movie" onClick={() => handleRemoveMovieMaisAssistidos(i)}>
                                    <img src={movie.img_movie} alt={movie.name} />
                                    <div className="hover">
                                        <p>remover</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
                {
                    recomendados.length > 0 && (                        
                        <div className="title">
                            <h2>recomentados</h2>
                        </div>
                    )
                }
                <ul>      
                    {
                        recomendados.map((movie, i) => {
                            return(
                                <div key={i} className="all-movie" onClick={() => handleRemoveMovieRecomendados(i)}>
                                    <img src={movie.img_movie} alt={movie.name} />
                                    <div className="hover">
                                        <p>remover</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
                {
                    lancamentos.length > 0 && (
                        <div className="title">
                            <h2>lancamentos</h2>
                        </div>
                    )
                }
                <ul>
                    {
                        lancamentos.map((movie, i) => {
                            return(
                                <div key={i} className="all-movie" onClick={() => handleRemoveMovieLancamentos(i)}>
                                    <img src={movie.img_movie} alt={movie.name} />
                                    <div className="hover">
                                        <p>remover</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </Container>
    )
}