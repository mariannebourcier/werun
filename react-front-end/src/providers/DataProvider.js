/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";


export const dataContext = createContext();

export default function DataProvider(props) {
  const [runs, setRuns] = useState({});
  const [runnerRuns, setRunnerRuns] = useState({});
  const [users, setUsers] = useState({});
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(() => {
    Promise.all([
      axios.get("/api/runs"),
      axios.get("/api/runs/runner/1"),
      axios.get("/api/users"),
      axios.get("/api/users/1"),
    ])
      .then((response) => {
        const { runs } = response[0].data;
        const { runnerRuns } = response[1].data;
        console.log("All available runs", runs);
        console.log("User ID 1's runs that have participated in:", runnerRuns);
        setRuns(runs);
        setRunnerRuns(runnerRuns);

        const { users } = response[2].data;
        setUsers(users);

        // const { user } = response[3].data;
        // console.log("single user:", user);
        // setUser(user)
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  const login = (email, password) =>{
    return axios
    .post("/api/login", { email, password })
    .then((response) => {
      const { user } = response.data;
      if (!user) {
        console.log("User not found.");
        return false;
      }
      setUser(user);
      return true;
    })
    .catch((error) => {
      console.log(error.response.status);
      return false;
    });
  }

  const signOut = () => {
    axios
      .post("/api/logout")
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  };

  const data = {
    runs,
    runnerRuns,
    users,
    user,
    setUser,
    login,
    email,
    setEmail,
    password,
    setPassword,
    signOut
  };
  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}
