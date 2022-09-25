/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./index.css";
import Profile from "./components/Profile.js";
import FindRun from "./components/FindRun";
import Navigation from "./components/Navigation.js";
import RegisterUser from "./components/RegisterUser";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Error from "./components/Error";
import DataProvider from "./providers/DataProvider";
import { authContext } from "./providers/AuthProvider";
import SignIn from "./components/SignIn";

export default function App() {
  const { page } = useContext(authContext);
  return (
    <div>
      <DataProvider>
        <Navigation />
        {page === "Home" && <Homepage />}
        {page === "Profile" && <Profile />}
        {page === "FindRun" && <FindRun />}
        {page === "SignIn" && <SignIn />}
        {page === "Register" && <RegisterUser />}
      </DataProvider>
    </div>
  );
}
