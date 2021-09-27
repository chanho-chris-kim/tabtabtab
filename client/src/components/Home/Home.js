import { useState } from "react";
import axios from "axios";
import url from "../../Util/Util";
import SignUp from "../SignUp/SignUp";
import LoggedIn from "../LoggedIn/LoggedIn";
import Greeting from "../Greeting/Greeting";
import "./Home.scss";

function Home() {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("LoggedOut");

  const onLoginSuccess = (res) => {
    const data = res.profileObj;
    axios
      .get(`${url}/users/${data.googleId}`)
      .then((res) => {
        const user = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        };
        setImage(data.imageUrl);
        setStatus("LoggedIn");
        setUserData(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCheckingToSignup = (res) => {
    const data = res.profileObj;
    axios
      .get(`${url}/users/${data.googleId}`)
      .then((res) => {
        alert(" you already have an id dumb dumb log in");
        const user = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        };
        setImage(data.imageUrl);
        setStatus("LoggedIn");
        setUserData(user);
      })
      .catch(() => {
        setUserData(data);
        setStatus("SignUp");
      });
  };

  const onLogoutSuccess = () => {
    setUserData(null);
    setImage(null);
    setStatus("LoggedOut");
  };

  const onFailure = (res) => {
    console.log("login failed:", res);
    setStatus("Fail");
  };

  const onSignedUpSuccess = (statusValue, data) => {
    axios
      .get(`${url}/users/${data.googleId}`)
      .then((res) => {
        const user = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        };
        setImage(data.imageUrl);
        setStatus("LoggedIn");
        setUserData(user);
      })
      .catch((err) => {
        console.log(err);
      });
    setStatus(statusValue);
  };

  //if logged in
  if (userData && status === "LoggedIn") {
    return (
      <div className="home">
        <LoggedIn userData={userData} 
        onLogoutSuccess={onLogoutSuccess}
        image={image} 
        setUserData={setUserData}/>
      </div>
    );
    //if not logged in
  } else if (status === "LoggedOut") {
    return (
      <Greeting
      onLoginSuccess={onLoginSuccess}
      onCheckingToSignup={onCheckingToSignup}
      onFailure={onFailure}/>
    );
  } else if (status === "SignUp") {
    return (
      <div className="home">
        <SignUp userData={userData} handleStatus={onSignedUpSuccess} />
      </div>
    );
  } else {
    return (
      <div className="home">
        <h1> Login/Signup Fail</h1>
        <h3> Please check your id and password again</h3>
      </div>
    );
  }
}

export default Home;

// login false:

// welcome banner
//     +chrome extension link
// signup button with google
//     -> does axios POST /user after Oauth
// login button
//     -> does axios GET /user after Oauth

// login true:

// logout button
// user edit delete
// url list
//     edit delete
