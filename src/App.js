//library
import { Routes, Route } from "react-router-dom";

//components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
//styles
import "./css/bootstrap.min.css";
import "./css/app.css";

function App() {
  const addOrRemoveFromFavs = () => {
    console.log("funciono");
  };
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/listado"
          element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
