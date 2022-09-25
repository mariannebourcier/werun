/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import DataProvider from "./providers/DataProvider";
import { authContext } from "./providers/AuthProvider";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage.jsx";
import Profile from "./components/Profile";
import FindRun from "./components/FindRun";
import SignIn from "./components/SignIn";
import RegisterUser from "./components/RegisterUser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const { page, user } = useContext(authContext);
  return (
    <div>
      <DataProvider user={user}>
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
