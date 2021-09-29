import { useState } from "react";
import axios from "axios";
import url from "../../../Util/Util";
import './EditProfile.scss'
function EditProfile({ userData, SetEditProfileModalHandler, setUserData,
  setModalHandler, setStatus }){
  const {id, name, email} = userData
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setNewName(e.target.value);
    }
    if (e.target.name === "email") {
      setNewEmail(e.target.value);
    }
  };

  const handleClick = (_e, handler) => {
    if (handler === false) {
      SetEditProfileModalHandler(handler);
    }
    if (setNewName === "") {
      alert("Can't have empty name value");
      return;
    }
    if (setNewEmail === "") {
      alert("Can't have empty email value");
      return;
    }
    const editQuery = {
      name: newName,
      email: newEmail,
    };
    axios
      .put(`${url}/users/${id}`, editQuery)
      .then((res) => {
        SetEditProfileModalHandler(false);
        setUserData(res.data);
        setModalHandler(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewName("");
    setNewEmail("");
  };

  const handledEnterKey = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleDelete = ()=>{
    axios.delete(`${url}/users/${id}`)
    .then(()=>{
      setUserData("");
      setStatus("LoggedOut");
      sessionStorage.removeItem('Token');
    })
  }

  return (
    <div
      className="edit-modal__background"
      onClick={() => {
        SetEditProfileModalHandler(false);
        setModalHandler(false);
      }}
    >
      <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
        <p
          className="edit-modal__exit"
          onClick={() => {
            setModalHandler(false);
            SetEditProfileModalHandler(false);
          }}
        >
          X
        </p>
        <form className="edit-modal__form" onKeyPress={handledEnterKey}>
          <label className="edit-modal__label" htmlFor="user name">
            Name:
          </label>
          <input
            className="edit-modal__input"
            type="text"
            name="userName"
            onChange={handleChange}
            value={newName}
          />
          <label className="edit-modal__label" htmlFor="user email">
            Email Address:
          </label>
          <input
            className="edit-modal__input"
            type="text"
            name="email"
            onChange={handleChange}
            value={newEmail}
          />
          <div className="edit-modal__button-box">
            <button
              className="edit-modal__button"
              type="button"
              onClick={() => {
                handleClick(false);
              }}
            >
              Change
            </button>
          </div>
        </form>
        <button
              className="account-delete"
              onClick={handleDelete}
            >
              Delete Account
            </button>
      </div>
    </div>
  );
}

export default EditProfile;
