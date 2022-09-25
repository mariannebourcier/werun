import React, { useContext } from "react";
import { dataContext } from "../providers/DataProvider";

export default function Homepage() {
  const { user } = useContext(dataContext);
  return (
  <div>{user && user.email}</div>
  )
}