import axios from "axios";
import { useState, useEffect } from "react";
import url from "../../Util/Util";
import EditModal from "../EditModal/EditModal";
import "./URLList.scss";

function URLList({ id, name }) {
  const [list, setList] = useState(null);
  const [modemHandler, setModemHandler] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  const linkHandler = (url) => {
    window.open(url);
  };

  const editHandler = (handler, selectedList) => {
    setModemHandler(handler);
    setSelectedList(selectedList);
  };

  const deleteHandler = (selectedUrlID) => {
    axios.delete(`${url}/list/${id}/${selectedUrlID}`).then(()=>{
        axios.get(`${url}/list/${id}`).then((res) => {
            setList(res.data);
          });
    })
  };

  useEffect(() => {
    axios.get(`${url}/list/${id}`).then((res) => {
      setList(res.data);
    });
  }, list);

  return (
    <ul className="home-URL-list">
      <div className="home-URL-list__header">
        <h3 className="home-URL-list__header-title">
          {`Here's your saved tabs, ${name}`}
        </h3>
      </div>
      {list &&
        list.map((data) => {
          return (
            <li key={data.id} className="home-URL-list__item">
              <p
                className="home-URL-list__title"
                onClick={() => {
                  linkHandler(data.URLPath);
                }}
              >
                {data.URLName}
              </p>
              <p
                className="home-URL-list__edit"
                onClick={() => {
                  editHandler(true, data);
                }}
              >
                edit
              </p>
              <p
                className="home-URL-list__delete"
                onClick={() => {
                  deleteHandler(data.id);
                }}
              >
                X
              </p>
            </li>
          );
        })}
        {modemHandler && <EditModal id={id} selectedList={selectedList} setModemHandler={setModemHandler}/>}
    </ul>
  );
}

export default URLList;
