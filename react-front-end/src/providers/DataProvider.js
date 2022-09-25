/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const dataContext = createContext();

export default function DataProvider() {
  const [runs, setRuns] = useState({});
  const [runnerRuns, setRunnerRuns] = useState({});
  const [users, setUsers] = useState({});
  const [user, setUser] = useState({});

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

  const data = {
    runs,
    runnerRuns,
    users,
    user,
    setUser,
  };
  return <dataContext.Provider data={data}></dataContext.Provider>;
}
