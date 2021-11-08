import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import url from "../../Util/Util";

function PrivateRoute(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const { component: Component, ...rest } = props;

  useEffect(() => {
    axios
      .get(`${url}/good`, { withCredentials: true })
      .then((res) => {
        axios
          .get(`${url}/users/${res.data.id}`)
          .then((response) => {
            setUser(response.data);
            setIsAuthenticated(true);
            setIsAuthenticating(false);
          })
          .catch(() => {
            const userData = {
              id: res.data.id,
              name: res.data.displayName,
              email: res.data.emails[0].value,
              image: res.data.photos[0].value,
            };
            axios.post(`${url}/users`, userData)
            .then((response2) => {
              setUser(response2.data);
              setIsAuthenticated(true);
              setIsAuthenticating(false);
            });
          });
      })
      .catch((err) => {
        console.log(err);
        setIsAuthenticating(true);
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticating) return <p>Checking authentication</p>;
        return isAuthenticated ? (
          <Component
            user={user}
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated}
            setIsAuthenticating={setIsAuthenticating}
            {...props}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
