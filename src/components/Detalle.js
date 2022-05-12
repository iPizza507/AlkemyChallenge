import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detalle() {
  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    console.log(movieID);
    let URLmovieID = `https://api.themoviedb.org/3/movie/${movieID}?api_key=f7a73bd84a681c9e825abf6e596b5fdb&language=en-US`;
    axios
      .get(URLmovieID)
      .then((res) => {
        let movieData = res.data;
        setMovie(movieData);
        console.log(movieData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        {movie && (
          <>
            <div className="col-4">
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`img not found: ${movie.title}`}
              />
            </div>
            <div className="col-8">
              <h1>Title: {movie.title}</h1>
              <h2>Release date: {movie.release_date}</h2>
              <h3>Review:</h3>
              <p>{movie.overview}</p>
              <h6>Rating: {movie.vote_average}</h6>
              <ul>
                {movie.genres.map((oneGenre) => {
                  return <li key={oneGenre.id}>{oneGenre.name}</li>;
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Detalle;
