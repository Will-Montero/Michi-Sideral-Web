import '../styles/header.css'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
  
    <nav className=''>
      <NavLink to='/musica'>Música</NavLink>
      <NavLink to='/merch'>Merch</NavLink>
      <NavLink to='/eventos'>Eventos</NavLink>
    </nav>
  )
}
