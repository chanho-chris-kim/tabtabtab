import axios from "axios";
import url from "../../../Util/Util";
import "./ProfileModal.scss";
function ProfileModal({ userData, SetEditProfileModalHandler }) {
    const { name, image } = userData;

    const handleLogout = () =>{
      axios
      .get(`${url}/logout`)
      .then(() => {
        sessionStorage.removeItem('TabTabTabToken');
        window.location = `/`;
      })
      .catch((err) => {
        console.log(err)
      });    

    }

  return (
    <div className="profileModal">
      <div className="profileModal__option">
        <div className="profileModal__profile">
          <img
            className="profileModal__profile-img"
            src={image}
            alt="user"
          ></img>
          <div className="profileModal__profile-text-box" onClick={()=>{SetEditProfileModalHandler(true)}}>
            <p className="profileModal__profile-text">{`${name}`}</p>
            <p className="profileModal__profile-text">Edit your profile</p>
          </div>
        </div>
        <button className="profileModal__google-button" onClick={handleLogout}>
        Log Out</button>
      </div>
    </div>
  );
}

export default ProfileModal;
