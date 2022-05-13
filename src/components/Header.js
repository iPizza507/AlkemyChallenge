//dependency
import { Link } from "react-router-dom";
//components
import Buscador from "./Buscador";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="text-succes">Alkeflix</h1>
        <ul>
          <li>
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/listado">
              Listado
            </Link>
          </li>
        </ul>
        <Buscador></Buscador>
      </nav>
    </header>
  );
}
export default Header;
