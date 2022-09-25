import axios from "axios";
import React, { useState, createContext } from "react";

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    axios
      .post("/api/login", { email, password })
      .then((response) => {
        const { user } = response.data;
        if (!user) {
          setUser(null);
        }
        if (user) {
          setAuth(true);
          setUser(user);
        }
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  const logout = () => {
    axios
      .post("/api/logout")
      .then(() => {
        setUser(null);
        setAuth(false);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  const data = {
    auth,
    user,
    login,
    logout,
  };
  return (
    <authContext.Provider value={data}>{props.children}</authContext.Provider>
  );
}
