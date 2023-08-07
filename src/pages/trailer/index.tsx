import { useParams } from "react-router-dom";
import { Container } from "./style";

export const Trailer = () => {
    const { url } = useParams()

    return(
        <Container>
            <div className="wrapper-video">
                <iframe 
                    src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                ></iframe>
            </div>
        </Container>
    )
}