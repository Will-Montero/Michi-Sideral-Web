import '../styles/musica.css'
import espacio from '../assets/images/cardCanciones/espacio1.jpg'
import fractales from '../assets/images/cardCanciones/fractales.jpg'
import fractales2 from '../assets/images/cardCanciones/fractales2.jpg'
import psicodelia from '../assets/images/cardCanciones/psicodelia.jpg'
export const Musica = () => {
  return (
    
       <div className="reproductor">
        <div className="tituloMusica">
            <h2>Temas</h2>
        </div>
        
        <section className="containerReproductor">
            <div className="card" >
                <img src={espacio} alt="Imagen de ejemplo"/>
                <div className="card-content">
                  <h3>Rompecabezas</h3>
                  <p>Michi Sideral</p>
                </div>
                <div className="player">
                  <audio controls className="player-controls">
                    <source className="source" src="./img/WhatsApp Audio 2024-06-24 at 1.55.17 PM (1).mpeg" />
                  </audio>
                </div>
              </div>
              <div className="card"  >
                <img src={fractales}alt="Imagen de ejemplo"/>
                <div className="card-content">
                  <h3>Jalea Sideral</h3>
                  <p>Michi Sideral</p>
                </div>
                <div className="player">
                  <audio controls className="player-controls">
                    <source className="source" src="./img/WhatsApp Audio 2024-06-24 at 1.55.17 PM (1).mpeg" type="audio/mpeg"/>
                  </audio>
                </div>
              </div>
              <div className="card" >
                <img src={fractales2} alt="Imagen de ejemplo"/>
                <div className="card-content">
                  <h3>Loop</h3>
                  <p>Michi Sideral</p>
                </div>
                <div className="player">
                  <audio controls className="player-controls">
                    <source className="source" src="./img/WhatsApp Audio 2024-06-24 at 1.55.17 PM (1).mpeg" type="audio/mpeg"/>
                  </audio>
                </div>
              </div>
              <div className="card" >
                <img src={psicodelia} alt="Imagen de ejemplo"/>
                <div className="card-content">
                  <h3>Acides</h3>
                  <p>Michi Sideral</p>
                </div>
                <div className="player">
                  <audio controls  className="player-controls">
                    <source className="source" src="./img/WhatsApp Audio 2024-06-24 at 1.55.17 PM (1).mpeg" type="audio/mpeg"/>
                  </audio>
                </div>
              </div>
        </section>
    </div>
    
  )
}
