//dependecy
import swtAlert from "@sweetalert/with-react";

//styles
import "../css/bootstrap.min.css";

function Buscador() {
  const submitHundler = (e) => {
    e.preventDefault();

    const keyboard = e.currentTarget.keyword.value;

    if (keyboard.length === 0) {
      swtAlert(<h2>Error</h2>);
    }
  };

  return (
    <form className="d-flex align-item-center" onSubmit={submitHundler}>
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
