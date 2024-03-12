import fb from "../assets/image/facebook.png";
import insta from "../assets/image/instagram.png";
import wsp from "../assets/image/whatsapp.png";
import tiktok from "../assets/image/tik-tok.png";
import yt from "../assets/image/youtube.png";
import '../style/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>actividad 1</h4>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>actividad 1</h4>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>actividad 2</h4>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>actividad 3</h4>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>actividad 4</h4>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
            <a href="#">
              <p>Prueba</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>logos</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt=""></img>
              </p>
              <p>
                <img src={insta} alt=""></img>
              </p>
              <p>
                <img src={wsp} alt=""></img>
              </p>
              <p>
                <img src={tiktok} alt=""></img>
              </p>
              <p>
                <img src={yt} alt=""></img>
              </p>
            </div>
          </div>
        </div>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} code all rigth reserved</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="#">
              <div>
                <p>Terminos y condiciones</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Terminos y condiciones</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Terminos y condiciones</p>
              </div>
            </a>
            <a href="#">
              <div>
                <p>Terminos y condiciones</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
