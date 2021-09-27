import "./Greeting.scss";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../Util/Util";

function Greeting({ onLoginSuccess, onCheckingToSignup, onFailure }) {
  return (
    <div className="greeting__background">
      <div className="greeting">
          <div className="greeting__content">
            <h1 className="greeting__header">Start clear out your tabs with <span className="greeting__header--name">TabTabTab</span></h1>
          </div>
        <div className="greeting__buttons">
          <div className="greeting__button">
            <GoogleLogin
              clientId={clientId}
              buttonText="Signup with google"
              onSuccess={onCheckingToSignup}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="greeting__button">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with google"
              onSuccess={onLoginSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
