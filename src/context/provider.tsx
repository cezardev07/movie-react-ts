import React, { 
    createContext, 
    useState 
} from "react";

import movie_1 from "../assets/movie-1.png";
import movie_2 from "../assets/movie-2.png";
import movie_3 from "../assets/movie-3.png";
import movie_4 from "../assets/movie-4.png";
import movie_5 from "../assets/movie-5.png";
import movie_6 from "../assets/movie-6.png";
import movie_7 from "../assets/movie-7.png";
import movie_8 from "../assets/movie-8.png";
import series_1 from "../assets/series-1.png";

import upcoming_1 from "../assets/upcoming-1.png";
import upcoming_2 from "../assets/upcoming-2.png";
import upcoming_3 from "../assets/upcoming-3.png";

interface TypeContext{
    url: string;
    name: string;
    img_movie: string;
}

interface TypeChildren{
    children: React.ReactNode
}

export const MyContext = createContext<{
    maisAssistidos: TypeContext[];
    setMaisAssistidos: React.Dispatch<React.SetStateAction<TypeContext[]>>;
    recomendados: TypeContext[];
    setRecomendados: React.Dispatch<React.SetStateAction<TypeContext[]>>;
    lancamentos: TypeContext[];
    setLancamentos: React.Dispatch<React.SetStateAction<TypeContext[]>>;
}>({
    maisAssistidos: [],
    setMaisAssistidos: () => {},
    recomendados: [],
    setRecomendados: () => {},
    lancamentos: [],
    setLancamentos: () => {}
});

export const Provider = ({children}: TypeChildren) => {
    const [maisAssistidos, setMaisAssistidos] = useState<TypeContext[]>([
        {
            url: "rsQEor4y2hg",
            name:"batman",
            img_movie: movie_5
        },
        {
            url: "dZRqB0JLizw",
            name:"death nile",
            img_movie: movie_7
        },
        {
            url: "ydox4Iy8pCY",
            name:"kings man",
            img_movie: movie_8
        },
        {
            url: "X2m-08cOAbc",
            name:"free guy",
            img_movie: movie_4
        },
        {
            url: "IE8HIsIrq4o",
            name:"adam project",
            img_movie: movie_3
        },
        {
            url: "S55qvOKW5T0",
            name:"morbius",
            img_movie: movie_2
        },
        {
            url: "A2SjVRziC7M",
            name:"sonic 2",
            img_movie: movie_1
        },
        {
            
            url: "eHp3MbsCbMg",
            name:"uncharted",
            img_movie: movie_6
        },
        {
            
            url: "rsQEor4y2hg",
            name:"the northman",
            img_movie: upcoming_1
        },
        {
            
            url: "idU-bx2x1a8",
            name:"doctor strage",
            img_movie: upcoming_2
        },
        {
            
            url: "ye63hQLDj4k",
            name:"memory",
            img_movie: upcoming_3
        },
        {
            
            url: "ZPCJvTq9wiU",
            name:"moonking",
            img_movie: series_1
        },
    ])
    const [recomendados, setRecomendados] = useState<TypeContext[]>([
        {
            url: "A2SjVRziC7M",
            name:"sonic 2",
            img_movie: movie_1
        },
        {
            url: "S55qvOKW5T0",
            name:"morbius",
            img_movie: movie_2
        },
        {
            url: "IE8HIsIrq4o",
            name:"adam project",
            img_movie: movie_3
        },
        
        {
            url: "X2m-08cOAbc",
            name:"free guy",
            img_movie: movie_4
        },
        {
            url: "rsQEor4y2hg",
            name:"batman",
            img_movie: movie_5
        },
        {
            url: "eHp3MbsCbMg",
            name:"uncharted",
            img_movie: movie_6
        },
        {
            url: "dZRqB0JLizw",
            name:"death nile",
            img_movie: movie_7
        },
        {
            url: "ydox4Iy8pCY",
            name:"kings man",
            img_movie: movie_8
        },
    ])
    const [lancamentos, setLancamentos] = useState<TypeContext[]>([
        {
            
            url: "eHp3MbsCbMg",
            name:"uncharted",
            img_movie: movie_6
        },
        {
            
            url: "rsQEor4y2hg",
            name:"the northman",
            img_movie: upcoming_1
        },
        {
            
            url: "idU-bx2x1a8",
            name:"doctor strage",
            img_movie: upcoming_2
        },
        {
            url: "rsQEor4y2hg",
            name:"batman",
            img_movie: movie_5
        },
        {
            url: "dZRqB0JLizw",
            name:"death nile",
            img_movie: movie_7
        },
        {
            url: "ydox4Iy8pCY",
            name:"kings man",
            img_movie: movie_8
        },
        {
            url: "X2m-08cOAbc",
            name:"free guy",
            img_movie: movie_4
        },
        {
            url: "IE8HIsIrq4o",
            name:"adam project",
            img_movie: movie_3
        },
        {
            url: "S55qvOKW5T0",
            name:"morbius",
            img_movie: movie_2
        },
        {
            
            url: "ye63hQLDj4k",
            name:"memory",
            img_movie: upcoming_3
        },
        {
            
            url: "ZPCJvTq9wiU",
            name:"moonking",
            img_movie: series_1
        },
    ])

    return(
        <MyContext.Provider value={{
                maisAssistidos,
                setMaisAssistidos,
                recomendados,
                setRecomendados,
                lancamentos,
                setLancamentos
            }}>
            {children}
        </MyContext.Provider>
    )
}