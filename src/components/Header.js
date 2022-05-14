//dependency
import { Link } from "react-router-dom";
//components
import Buscador from "./Buscador";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div classNameName="container">
          <h1 className="text-success">Alkeflix</h1>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Listado">
                List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <span className="text-success">
                {props.favorites.length > 0 && (
                  <> Favorites: {props.favorites.length}</>
                )}
              </span>
            </li>
          </ul>
        </div>
        <Buscador></Buscador>
      </nav>
    </header>
  );
}
export default Header;
