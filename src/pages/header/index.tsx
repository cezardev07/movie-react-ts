import { Link } from "react-router-dom";
import { Container } from "./style";

export const Header = () => {
    return(
        <Container>
            <nav>
                <Link to="/" className="logo">
                    <span>m</span>ov<span>i</span>e
                    <span className="material-symbols-outlined">
                    movie
                    </span>
                </Link>

                <div className="nav-bar">
                    <Link to="/admin">
                    <span className="material-symbols-outlined">
                        settings_cinematic_blur
                    </span>
                    </Link>
                </div>
                </nav>
        </Container>
    )
}