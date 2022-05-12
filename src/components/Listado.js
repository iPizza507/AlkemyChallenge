//dependency
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swtAlert from "@sweetalert/with-react";
//styles
import "../css/bootstrap.min.css";

function Listado() {
  let token = sessionStorage.getItem("token");
  const endPoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=f7a73bd84a681c9e825abf6e596b5fdb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  const [movieList, setmovieList] = useState([]);
  //const algo = `https://api.themoviedb.org/3/movie/${oneMovie.poster_path}?api_key=f7a73bd84a681c9e825abf6e596b5fdb&language=en-US`;
  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        setmovieList(res.data.results);
      })
      .catch((error) => {
        swtAlert(<h2>Error!</h2>);
        console.log(error);
      });
  }, [setmovieList]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row ">
        {movieList.map((oneMovie, i) => {
          return (
            <div className="col-2" key={i}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  alt={`img not found: ${oneMovie.title}`}
                />
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
export default Listado;
