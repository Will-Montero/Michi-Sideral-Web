
import '../styles/logo.css';
import LogoHome from '../assets/images/LogoHome.png';

export const Logo = () => {
  return (
    <div className='div'>
      <img className='imagenLogo' src={LogoHome}  ></img>
        <h1 className="content">Michi Sideral</h1>
    </div>
  );
};