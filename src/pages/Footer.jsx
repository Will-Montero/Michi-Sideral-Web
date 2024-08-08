import '../styles/footer.css'
import facebook from '../assets/images/footer/facebook.png'
import instagram from '../assets/images/footer/instagram.png'
import spotify from '../assets/images/footer/spotify.png'
import tiktok from '../assets/images/footer/tik-tok (1).png'
import gmail from '../assets/images/footer/gmail.png'


export const Footer = () => {
  return (
    <footer>
   <section>
    <nav className="iconFooter">
      <a href=""><img src={facebook} alt=""/></a>
      <a href="https://www.instagram.com/michisideral/"><img src={instagram} target="black" alt=""/></a>
      <a href=""><img src={spotify} alt=""/></a>
      <a href=""><img src={tiktok} alt=""/></a>
      <a href=""><img src={gmail} alt=""/></a>
   </nav>
   </section>
</footer>
  )
}
