function Buscador() {
  return (
    <form className="d-flex align-item-center">
      <label className="form-label mx-2">
        <input type="text" name="keyword"></input>
      </label>
      <button className="btn btn-succes ml-2" type="submit">
        Search
      </button>
    </form>
  );
}
export default Buscador;
