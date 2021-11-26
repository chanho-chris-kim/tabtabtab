import "./Greeting.scss";
import url from "../../../Util/Util";

function Greeting() {
  const login = () => {
    window.location = `${url}/login`;
  };

  return (
    <div className="greeting__background">
      <div className="greeting">
        <div className="greeting__content">
          <h1 className="greeting__header">
            Start clearing out your tabs with
            <span className="greeting__header--name">TabTabTab</span>
          </h1>
        </div>
        <button onClick={login} className="greeting__button">
          Login / Sign up with google
        </button>
      </div>
    </div>
  );
}

export default Greeting;
