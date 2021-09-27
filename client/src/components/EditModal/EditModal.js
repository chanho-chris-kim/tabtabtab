import { useState } from "react";
import axios from "axios";
import url from "../../Util/Util";
import "./EditModal.scss";

function EditModal({ id, selectedList, setModemHandler }) {
  const [newURLName, setNewURLName] = useState(selectedList.URLName);
  const [newURLPath, setNewURLPath] = useState(selectedList.URLPath);

  const handleChange = (e) => {
    if (e.target.name === "URLName") {
      setNewURLName(e.target.value);
    }
    if (e.target.name === "URLPath") {
      setNewURLPath(e.target.value);
    }
  };

  const handleClick = (_e, handler) => {
    if (handler) {
      console.log(handler);
    }
    if (setNewURLName === "") {
      alert("Can't have empty name value");
      return;
    }
    if (setNewURLPath === "") {
      alert("Can't have empty email value");
      return;
    }
    const editQuery = {
      URLName: newURLName,
      URLPath: newURLPath,
    };
    axios
      .put(`${url}/list/${id}/${selectedList.id}`, editQuery)
      .then(() => {
        setModemHandler(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewURLName("");
    setNewURLPath("");
  };

  const handledEnterKey = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div
      className="edit-modal__background"
      onClick={() => {
        setModemHandler(false);
      }}
    >
      <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
        <p
          className="edit-modal__exit"
          onClick={() => {
            setModemHandler(false);
          }}
        >
          X
        </p>
        <form className="edit-modal__form" onKeyPress={handledEnterKey}>
          <label className="edit-modal__label" htmlFor="url name">
            Tab Name
          </label>
          <input
            className="edit-modal__input"
            type="text"
            name="URLName"
            onChange={handleChange}
            value={newURLName}
          />
          <label className="edit-modal__label" htmlFor="url address">
            Tab Address
          </label>
          <input
            className="edit-modal__input"
            type="text"
            name="URLPath"
            onChange={handleChange}
            value={newURLPath}
          />
          <div className="edit-modal__button-box">
            <button
              className="edit-modal__button"
              type="button"
              onClick={handleClick}
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
