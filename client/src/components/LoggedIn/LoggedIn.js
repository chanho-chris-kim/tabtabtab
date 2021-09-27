import React from "react";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../Util/Util";
import URLList from "../URLList/URLList";
import "./LoggedIn.scss";

function LoggedIn({ userData, onLogoutSuccess, image }) {
  const { id, name } = userData;
  return (
    <div className="logged-in">
      <div className="logged-in__option">
        <div className="logged-in__profile">
          <img className="logged-in__profile-img" src={image} alt="user"></img>
          <div className="logged-in__profile-text-box">
            <p className="logged-in__profile-text">{`${name}`}</p>
            <p className="logged-in__profile-text">Edit your profile</p>
          </div>
        </div>
        <div className="logged-in__google-button">
          <GoogleLogout
            clientId={clientId}
            buttonText="Log Out"
            onLogoutSuccess={onLogoutSuccess}
          />
        </div>
      </div>
        <URLList id={id} name ={name}/>
    </div>
  );
}

export default LoggedIn;
