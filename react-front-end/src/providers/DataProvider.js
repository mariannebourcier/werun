/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const dataContext = createContext();

export default function DataProvider(props) {
  const [runs, setRuns] = useState({});
  const [runnerRuns, setRunnerRuns] = useState({});

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
        setRuns(runs);
        setRunnerRuns(runnerRuns);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  const data = {
    runs,
    runnerRuns,
  };
  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}
