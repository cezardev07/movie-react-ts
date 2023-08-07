import { Link } from "react-router-dom";
import { Container } from "./style";

export const DefaultRouter = () => {
    return (
        <Container>
            <h1>404</h1>
            <Link to="/">page not default, voltar para o inicio</Link>
        </Container>
    )
}