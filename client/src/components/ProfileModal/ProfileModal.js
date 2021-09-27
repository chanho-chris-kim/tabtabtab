import { GoogleLogout } from "react-google-login";
import { clientId } from "../../Util/Util";
import "./ProfileModal.scss";
function ProfileModal({userData, onLogoutSuccess ,image}) {
    const { id, name } = userData;

  return (
    <div className="profileModal">
      <div className="profileModal__option">
        <div className="profileModal__profile">
          <img
            className="profileModal__profile-img"
            src={image}
            alt="user"
          ></img>
          <div className="profileModal__profile-text-box">
            <p className="profileModal__profile-text">{`${name}`}</p>
            <p className="profileModal__profile-text">Edit your profile</p>
          </div>
        </div>
        <div className="profileModal__google-button">
          <GoogleLogout
            clientId={clientId}
            buttonText="Log Out"
            onLogoutSuccess={onLogoutSuccess}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
