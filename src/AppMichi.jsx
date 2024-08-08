/* import { Header } from "./components/Header"*/

import { Logo } from "./pages/Logo"
import { Novedades } from "./pages/Novedades"
import { Musica } from "./pages/Musica"
import { Eventos } from "./pages/Eventos"
import { Merch } from './pages/Merch'
import { Footer } from "./pages/Footer"
export const AppMichi = () => {
  return (
    <>
   {/*  <Header></Header> */}
    <Logo></Logo>
    <Novedades></Novedades>
    <br />
    <br />
    <Musica></Musica>
    <br />
    <br />
    <Eventos></Eventos>
    <br />
    <Merch></Merch>
    <br />
    <hr />
    <Footer></Footer>
     </>
  )
}
