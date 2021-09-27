import { useState } from "react";
import axios from "axios";
import url from "../../Util/Util";
import "./EditModal.scss";

function EditModal({ id, selectedList, setModemHandler}) {

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
      <>
    <form onKeyPress={handledEnterKey}>
      <label htmlFor="url name">tab Name</label>
      <input
        type="text"
        name="URLName"
        onChange={handleChange}
        value={newURLName}
      />
      <label htmlFor="url address">tab Address</label>
      <input
        type="text"
        name="URLPath"
        onChange={handleChange}
        value={newURLPath}
      />
      <button
        type="reset"
        onClick={() => {
            setModemHandler(false);
        }}
      >
        Cancel
      </button>
      <button type="button" onClick={handleClick}>
        Confirm
      </button>
    </form>
    </>
  );
}

export default EditModal;
