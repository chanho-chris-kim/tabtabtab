import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../../Util/Util";
import "./SignUp.scss";

function SignUp(props) {
  const Data = props.userData;
  const [userName, setUserName] = useState(Data.givenName);
  const [userEmail, setUserEmail] = useState(Data.email);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setUserEmail(e.target.value);
    }
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
  };
  const handleClick = () => {
    if (userName === "") {
      alert("Can't have empty name value");
      return;
    }
    if (userEmail === "") {
      alert("Can't have empty email value");
      return;
    }
    const userInfoQuery = {
      id: Data.googleId,
      name: userName,
      email: userEmail,
    };
    console.log(userInfoQuery);
    axios
      .post(`${url}/users`, userInfoQuery)
      .then((res) => {
        props.handleStatus("LoggedIn", Data);
      })
      .catch((err) => {
        console.log(err);
      });
    setUserEmail("");
    setUserName("");
  };

  const handledEnterKey = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onKeyPress={handledEnterKey}>
        <label htmlFor="user name">Name</label>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          value={userName}
        />
        <label htmlFor="user email">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={userEmail}
        />
        <Link to="/">
          <button type="reset">Cancel</button>
        </Link>
        <button type="button" onClick={handleClick}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
