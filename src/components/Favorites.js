//dependency
import { Link, Navigate } from "react-router-dom";

function Favorites(props) {
  let token = sessionStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/" />}
      <h1>Section Favorites</h1>
      <div className="row ">
        {!props.favorites.length && (
          <div className="col-12 text-danger">Not Found favorites</div>
        )}
        {props.favorites.map((oneMovie, i) => {
          return (
            <div className="col-2 p-2 cardHover" key={i}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={oneMovie.imgURL}
                  alt={`img not found: ${oneMovie.title}`}
                />
                <button
                  className="favorite-btn"
                  //aca le pasamos la prop para que ejecute la funcion
                  onClick={props.addOrRemoveFromFavs}
                  data-movie-id={oneMovie.id}
                >
                  🖤
                </button>

                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">{oneMovie.overview}</p>
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Favorites;
