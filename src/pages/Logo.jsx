
import '../styles/logo.css';
import LogoHome from '../assets/images/LogoHome.png';

export const Logo = () => {
  return (
    <div className='div'>
      <br />
       <h1 className="content">Michi Sideral</h1>
       <br />
      <img className='imagenLogo' src={LogoHome}  ></img>
       
    </div>
  );
};