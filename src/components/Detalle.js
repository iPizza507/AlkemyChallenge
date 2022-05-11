import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Detalle() {
  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {
    console.log(movieID);
    let URLmovieID = `https://api.themoviedb.org/3/movie/${movieID}?api_key=f7a73bd84a681c9e825abf6e596b5fdb&language=en-US`;
    axios
      .get(URLmovieID)
      .then((res) => {
        let movieData = res.data;
        console.log(movieData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <h1>Nro id pelicula: {movieID}</h1>;<h2>Title: {}</h2>
    </>
  );
}
export default Detalle;
