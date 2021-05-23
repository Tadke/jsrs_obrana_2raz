import './App.css';
import Logo from "./cineplexx.png";
import {Link} from "react-router-dom";
import Slikaimg from "./headerimg.png";

function Header() {
  return (
    <div className="Header">
      <img src={Slikaimg} className="headerimg"/>
        <nav className="navigacija">
            <ul>
            <li><Link to="/" className="link">Naslovna</Link></li>
                <li><Link to="/"><img src={Logo} className="logo"/></Link></li>
                <li><Link to="/vise" className="link">Vise o</Link></li>
                <li><Link to="forma" className="link">Prijava</Link></li>
            </ul>
        </nav>
        <h1 className="natpis">NAŠ SVIJET KINA</h1>



    </div>
  );
}

export default Header;