import { Link } from "react-router-dom";

function Header(params) {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
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
      </nav>
    </header>
  );
}
export default Header;
