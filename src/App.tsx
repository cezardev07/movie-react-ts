import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Client } from "./pages/client/index";
import { DefaultRouter } from "./pages/404/index";
import { Admin } from "./pages/admin";
import { Trailer } from "./pages/trailer";
import { Header } from "./pages/header";

export const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/movie-react-ts/" element={<Client/>}/>
        <Route path="/movie-react-ts/admin" element={<Admin/>}/>
        <Route path="/movie-react-ts/trailer/embed/:url" element={<Trailer/>}/>
        <Route path="*" element={<DefaultRouter/>}/>
      </Routes>
    </BrowserRouter>
  )
}