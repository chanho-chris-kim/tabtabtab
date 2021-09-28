import { useState } from "react";
import URLList from "../URLList/URLList";
import ProfileModal from "../ProfileModal/ProfileModal";
import arrowIcon from "../../assets/image/left_icon.png";
import EditProfile from "../EditProfile/EditProfile";
import "./LoggedIn.scss";

function LoggedIn({ userData, onLogoutSuccess, image, setUserData }) {
  const { id, name, email } = userData;
  const [modalHandler, setModalHandler] = useState(false);
  const [EditProfileModalHandler, SetEditProfileModalHandler] = useState(false);

  return (
    <div className="logged-in">
      <div className={modalHandler === false ?"logged-in__icon-background" : "logged-in__icon-background--close"}>
      <img
        className={modalHandler === false ?"logged-in__modal-button" :"logged-in__modal-button--close"}
        src={arrowIcon}
        alt="open profile"
        onClick={() => {
          setModalHandler(!modalHandler);
        }}
      />
      </div>
      {modalHandler && (
        <ProfileModal
          userData={userData}
          onLogoutSuccess={onLogoutSuccess}
          image={image}
          SetEditProfileModalHandler={SetEditProfileModalHandler}
        />
      )}
      
      {EditProfileModalHandler && <EditProfile 
      id={id}
      name={name}
      email={email}
      SetEditProfileModalHandler={SetEditProfileModalHandler}
      setUserData={setUserData}
      setModalHandler={setModalHandler}
      />}
      <URLList id={id} name={name} />
    </div>
  );
}

export default LoggedIn;