import '../styles/eventos.css'
import nirvanaToque from '../assets/images/Eventos/nirvanaToque.jpeg'
import paramoreToque from '../assets/images/Eventos/paramoreToque.jpeg'
export const Eventos = () => {
  return (
    <section className="containerEventos">
  <div className="tituloEventos">
    <h2>Eventos!</h2>
  </div>
  <br/>
  <br/>
 <main className='contenedorImagenes'>
  <div className="cardEventos">
    <img className='imagenEventos' src={paramoreToque} alt=""/>
    <h5 className='parrafoEventos'>Recuerdo de uno de nuestros toque, haciendo un buen tributo a Paramore</h5>
  </div>
  <div className="cardEventos">
    <img className='imagenEventos' src={nirvanaToque} alt=""/>
    <h5 className='parrafoEventos'>inicia como una idea y se hizo realidad, tributo a nirvana</h5>
  </div>
 </main>
</section>
  )
}
