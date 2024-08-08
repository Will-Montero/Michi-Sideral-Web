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
    <div>
    <Novedades></Novedades>
    </div>
    <br />
    <br />
    <div>
    <Musica></Musica>
    </div>
    <br />
    <br />
    <div>
    <Eventos></Eventos>
    </div>
    <br />
    <div>
    <Merch></Merch>
    </div>
    <br />
    <hr />
    <Footer></Footer>
     </>
  )
}
