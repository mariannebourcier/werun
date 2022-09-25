/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const dataContext = createContext();

export default function DataProvider(props) {
  const [runs, setRuns] = useState({});
  const [runnerRuns, setRunnerRuns] = useState({});
  const { user } = props;
  
  // Get all available runs as soon as app
  // renders
  useEffect(() => {
    Promise.all([axios.get("/api/runs")])
      .then((response) => {
        const { runs } = response[0].data;
        setRuns(runs);
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }, []);

  // Get runs for a specific runner based on 
  // authorization.
  useEffect(() => {
      const { id } = user;
      if ( id ) {
        const url = `/api/runs/runner/${id}`;
        axios
          .get(url)
          .then((response) => {
            const { runnerRuns } = response.data;
            setRunnerRuns(runnerRuns);
          })
          .catch((error) => {
            console.log(error.response.status);
          });
      }
      
  }, [user]);

  const data = {
    runs,
    runnerRuns,
  };
  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}
