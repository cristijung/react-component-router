import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "components/Menu";
import Inicio from "pages/Inicio";
import sobreMim from "pages/SobreMim";
//import PaginaPadrao from "pages/PaginaPadrao";

function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/SobreMim" element={<sobreMim />} />
                    <Route path="/Opiniao" element={<Opiniao/>} />
                    <Route path="*" element={<div>Erro 404 - Página não encontrada</div>} />
                </Routes>
            
            </BrowserRouter>
        </>
    );
}

export default AppRoutes;