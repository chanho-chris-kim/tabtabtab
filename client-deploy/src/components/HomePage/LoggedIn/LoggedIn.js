import { useState } from "react";
import URLList from "../URLList/URLList";
import ProfileModal from "../ProfileModal/ProfileModal";
import arrowIcon from "../../../assets/image/left_icon.png";
import EditProfile from "../EditProfile/EditProfile";
import "./LoggedIn.scss";

function LoggedIn(props) {
  const Token = sessionStorage.getItem('TabTabTabToken');
  if(!Token){
    window.location.href = `/`;
  }
  const userData = props.user
  const setUser = props.setUser
  sessionStorage.setItem('TabTabTabToken', userData.id)
  const { id, name } = userData;
  const [modalHandler, setModalHandler] = useState(false);
  const [EditProfileModalHandler, SetEditProfileModalHandler] = useState(false);
  return (
    <div className="logged-in">
      <div
        className={
          modalHandler === false
            ? "logged-in__icon-background"
            : "logged-in__icon-background--close"
        }
      >
        <img
          className={
            modalHandler === false
              ? "logged-in__modal-button"
              : "logged-in__modal-button--close"
          }
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
          SetEditProfileModalHandler={SetEditProfileModalHandler}
        />
      )}

      {EditProfileModalHandler && (
        <EditProfile
          userData={userData}
          setUser={setUser}
          SetEditProfileModalHandler={SetEditProfileModalHandler}
          setModalHandler={setModalHandler}
        />
      )}
      <URLList id={id} name={name} />
    </div>
  );
}

export default LoggedIn;
