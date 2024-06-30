import "../assets/styles/header.css";
import logoMolokai from "../assets/imgs/imgHeader/Logo Molokai.png";
import logoUnimet from "../assets/imgs/imgHeader/LogoUnimet.png";
import LogoCarrito from "../assets/imgs/imgHeader/LogoCarrito.png";
import Usuario from "../assets/imgs/imgHeader/Usuario.png";
import Barra from "../assets/imgs/imgHeader/Barra.png";

const Header = () => {
  return (

    <header className="header">
      <div className="top-bar">
        <div className="uni-logo">
          <img src={logoUnimet} alt="Universidad Metropolitana" />
        </div>
        <div className="auth-links">
          <a  href="/Profile"><img src={Usuario} alt="Usuario" className="user-icon" /></a>
        </div>
      </div>
      <div className="main-header">
        <div className="brand">
          <h1>MOLOKA'I</h1>
        </div>
        <div className="logoMolokai">
          <a href="/LandingPage"><img src={logoMolokai} alt="Logotipo de MOLOKA'I" /></a>
        </div>
        <nav>
          <a href="/LandingPage" className="init">INICIO</a>
          <a href="#nosotros" className="init">NOSOTROS</a>
          <a href="/Entradas" className="menu-btn">
            MENÚ
          </a>
        </nav>
        <div className="cart">
          <a href="/Carro">
          <img src={LogoCarrito} alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
