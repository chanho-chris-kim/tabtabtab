import React from "react";
import URLList from "../URLList/URLList";
import ProfileModal from "../ProfileModal/ProfileModal";
import "./LoggedIn.scss";

function LoggedIn({ userData, onLogoutSuccess, image }) {
  const { id, name } = userData;
  return (
    <div className="logged-in">
      <p className="logged-in__modal-button">←</p>
      <ProfileModal userData={userData} onLogoutSuccess={onLogoutSuccess} image={image}/>
        <URLList id={id} name ={name}/>
    </div>
  );
}

export default LoggedIn;
