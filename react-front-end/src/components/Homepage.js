import React, { useContext } from "react";
import { dataContext } from "../providers/DataProvider";

export default function Homepage() {
  const { user, runnerRuns } = useContext(dataContext);
  return (
  <div>{user.email}</div>
  )
}