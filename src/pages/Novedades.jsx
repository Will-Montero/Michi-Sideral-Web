import "../styles/novedades.css";
import loopEvento from "../assets/images/loopEvento.avif";

export const Novedades = () => {
  return (
    <>
      <br />
      <br />
      <a>
        <div className="card">
          <img src={loopEvento} className="imagen-Lanzamiento" />
          <div className="card-body">
            <h6 className="card-text">Nuestro próximo lanzamiento</h6>
            <h3>Loop</h3>
          </div>
        </div>
      </a>
      <br />

    </>
  );
};
