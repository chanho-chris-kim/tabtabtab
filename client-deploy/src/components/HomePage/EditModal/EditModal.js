import { useState } from "react";
import axios from "axios";
import url from "../../../Util/Util";
import "./EditModal.scss";

function EditModal({ id, selectedList, setModalHandler }) {
  const [newURLName, setNewURLName] = useState(selectedList.URLName);
  const [newURLPath, setNewURLPath] = useState(selectedList.URLPath);
  const [nameValidation, setNameValidation] = useState(true);
  const [addressValidation, setAddressValidation] = useState(true);
  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    if (e.target.name === "URLName") {
      setNewURLName(e.target.value);
    }
    if (e.target.name === "URLPath") {
      setNewURLPath(e.target.value);
    }
  };

  const handleClick = () => {
    if (newURLName === "") {
      setNameValidation(false)
      return;
    }
    if (newURLPath === "") {
      setAddressValidation(false)
      return;
    }
    const editQuery = {
      URLName: newURLName,
      URLPath: newURLPath,
    };
    axios
      .put(`${url}/list/${id}/${selectedList.id}`, editQuery)
      .then(() => {
        setModalHandler(false);
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
        setModalHandler(false);
      }}
    >
      <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
        <p
          className="edit-modal__exit"
          onClick={() => {
            setModalHandler(false);
          }}
        >
          X
        </p>
        <form className="edit-modal__form" onKeyPress={handledEnterKey}>
          <label className="edit-modal__label" htmlFor="url name">
            Tab Name
          </label>
          <p className={nameValidation===true ?"edit-modal__input--valid-text" : "edit-modal__input--invalid-text"}>Please provide a name of this tab</p>
          <input
            className={nameValidation===true ? "edit-modal__input" : "edit-modal__input--invalid"}
            type="text"
            name="URLName"
            onChange={handleChange}
            value={newURLName}
          />
          <label className="edit-modal__label" htmlFor="url address">
            Tab Address
          </label>
          <p className={addressValidation===true ?"edit-modal__input--valid-text" : "edit-modal__input--invalid-text"}>Please provide a valid web address</p>
          <input
            className={addressValidation===true ? "edit-modal__input" : "edit-modal__input--invalid"}
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
