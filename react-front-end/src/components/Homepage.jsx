import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Homepage.css";
import logo from "./logo.png";
import Button from "react-bootstrap/Button"

export default function Homepage() {
  
  return (
    <div>
      <div className="home-intro">
      <img src={logo} className="logo" alt="logo" />
        <p>Welcome to WeRun</p>
        <p>We help you get connected to runs near you.</p>
      </div>

      <div className="home-runs">
        <div className="home-join">
          <img className="map-logo" src="https://cdn-icons-png.flaticon.com/512/819/819865.png" alt="map-icon" />
          <p>Find a run near you </p>
          <Button variant="primary" type="submit">
            Find
          </Button>
        </div>
        <div className="home-plan">
          <img className="map-logo" src="https://cdn-icons-png.flaticon.com/512/2953/2953336.png" alt="run-icon" />
          <p>Create a run</p>
          <Button variant="primary" type="submit">
             Create
          </Button>
        </div>
      </div>

     
    </div>
  
  )
}