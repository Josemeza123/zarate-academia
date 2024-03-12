import { Link } from "react-router-dom";
import logo from "../assets/logozarate.png";

const NavBar = () => {
  return (
    <>
      <img src={logo} alt="logo"/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/">Programas</Link>
        </li>
        <li>
          <Link to="/Nosotros">Intranet</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
