/* eslint-disable no-unused-vars */
import React, { useContext} from "react";
import Run from "./Run";
import { dataContext } from "../providers/DataProvider";

export default function FindRun() {
  const { runs } = useContext(dataContext);

  const showAvailableRuns = (runs) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => (
      <Run key={run.id} run={run} userFlag={false} />
    ));
  };

  return (
    <>
      <h1>All available runs you can join:</h1>
      {showAvailableRuns(runs)}
    </>
  );
}
