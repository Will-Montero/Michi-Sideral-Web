import { Header } from "./components/Header"
import { Videos } from "./pages/Videos"
import { Novedades } from "./pages/Novedades"
import { Musica } from "./pages/Musica"
import { Eventos } from "./pages/Eventos"
import { Merch } from './pages/Merch'
import { Footer } from "./pages/Footer"
export const AppMichi = () => {
  return (
    <>
    <Header></Header>
    <Videos></Videos>
    <Novedades></Novedades>
    <br />
    <br />
    <br />
    
    <Musica></Musica>
    <br />
    <br />
    <Eventos></Eventos>
    <Merch></Merch>
    <br />
    <br />
    <hr />
    <Footer></Footer>
     </>
  )
}
