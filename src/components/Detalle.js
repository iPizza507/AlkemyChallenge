import { Navigate } from "react-router-dom";
function Detalle() {
  let token = sessionStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/" />}
      <h1>DEtasd</h1>;
    </>
  );
}
export default Detalle;
