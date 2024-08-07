import loopEvento from '../assets/images/loopEvento.avif'
import '../styles/novedades.css'
export const Novedades = () => {
  return (
    <>
    <br />
    <br />
    

    <a>
    <div className="card">
    <img src={loopEvento} className="card-img-top"/>
  <div className="card-body">
    <h6 className="card-text">Nuestro próximo lanzamiento</h6>
    <h3>Loop</h3>
     </div>
   </div>
    </a>
    </>
  )
}
