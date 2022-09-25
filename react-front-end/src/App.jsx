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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

export default function App() {
  const { user } = useContext(authContext);
  return (
    <div>
      <DataProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route index element={<Homepage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/runs" element={<FindRun />}></Route>
            <Route path="/register" element={<RegisterUser />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            {/* catch error urls */}
            {/* <Route path="*" element={<Error />}></Route> */}
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}
