import axios from "axios";
import url from "../../../Util/Util";
import LoggedIn from "../LoggedIn/LoggedIn";
import Greeting from "../Greeting/Greeting";
import { useEffect } from "react";
import "./Home.scss";


function Home({status, setStatus, userData, setUserData}) {
  useEffect(()=>{
    const token = sessionStorage.getItem('Token');
    if (!token){
      setStatus("LoggedOut");
    } else{
      axios
      .get(`${url}/users/${token}`)
      .then((res) => {
        const user = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          image: res.data.image
        };
        setStatus("LoggedIn");
        setUserData(user);
      })
      .catch((err) => {
        console.log(err);
      });
      setStatus("LoggedIn");

    }
  }, [setStatus,setUserData]);

  const onLoginSuccess = (res) => {
    const data = res.profileObj;
    axios
      .get(`${url}/users/${data.googleId}`)
      .then((res) => {
        sessionStorage.setItem('Token',data.googleId)
        const user = {
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          image: res.data.image
        };
        setStatus("LoggedIn");
        setUserData(user);
      })
      .catch(() => {
//if user doesn't exist 
//make an axios post and create the account 
      const userInfoQuery = {
        id: data.googleId,
        name: data.givenName,
        email: data.email,
        image: data.imageUrl
      };
      axios
        .post(`${url}/users`, userInfoQuery)
        .then((res) => {
          setUserData(res.data[0]);
          sessionStorage.setItem('Token',data.googleId)
          setStatus("LoggedIn");
        })
        .catch((err) => {
          console.log(err);
        });
      });
    }

  const onLogoutSuccess = () => {
    sessionStorage.removeItem('Token');
    setStatus("LoggedOut");
    setUserData(null);
  };

  const onFailure = (res) => {
    console.log("login failed:", res);
    setStatus("Fail");
  };

  //if logged in
  if (userData && status === "LoggedIn") {
    return (
      <div className="home">
        <LoggedIn 
        userData={userData} 
        onLogoutSuccess={onLogoutSuccess}
        setUserData={setUserData}
        setStatus={setStatus}/>
      </div>
    );
    //if not logged in
  } else if (status === "LoggedOut") {
    return (
      <Greeting
      onLoginSuccess={onLoginSuccess}
      onFailure={onFailure}/>
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
