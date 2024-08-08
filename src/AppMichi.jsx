/* import { Routes, Route, Navigate } from 'reat-router-dom' */
import { Header } from "./components/Header"
import { Logo } from "./pages/Logo"
import { Novedades } from "./pages/Novedades"
import { Musica } from "./pages/Musica"
import { Eventos } from "./pages/Eventos"
import { Merch } from './pages/Merch'
import { Footer } from "./pages/Footer"
export const AppMichi = () => {
  return (
    <>
    <Header></Header>
    <Logo></Logo>
    <div  id="novedad">
    <Novedades></Novedades>
    </div>
    <br />
    <br />
    <div  id="musica">
    <Musica></Musica>
    </div>
    <br />
    <br />
    <div  id="eventos">
    <Eventos></Eventos>
    </div>
    <br />
    <div >
    <Merch id="merch"></Merch>
    </div>
    <br />
    <hr />
    <Footer></Footer>
     </>
  )
}
