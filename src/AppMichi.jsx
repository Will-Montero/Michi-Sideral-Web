import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Logo } from "./pages/Logo";
import { Novedades } from "./pages/Novedades";
import { Musica } from "./pages/Musica";
import { Eventos } from "./pages/Eventos";
import { Merch } from "./pages/Merch";
import { Footer } from "./pages/Footer";
export const AppMichi = () => {
  return (
    <>
      <Header></Header>
      <Logo></Logo>
      <Routes>
        <Route path='/novedades' element={<Novedades></Novedades>}></Route>
        <Route path='/musica' element={<Musica></Musica>}></Route>
        <Route path='/eventos' element={<Eventos></Eventos>}></Route>
        <Route path='/merch' element={<Merch></Merch>}></Route>
        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
};
