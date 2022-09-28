/* eslint-disable no-unused-vars */
import React from "react";
import Run from "./Run";
import { useLoaderData } from "react-router-dom";

export default function FindRun() {
  const { runs } = useLoaderData();

  const showAvailableRuns = (runs, type) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => <Run key={run.id} run={run} type={type} />);
  };

  return (
    <>
      <h1>All available runs you can join:</h1>
      {showAvailableRuns(runs, "available")}
    </>
  );
}
