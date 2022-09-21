import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Run.css";

export default function Run(props) {
  const { run } = props;
  const [runImage, setRunImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/366/366998.png"
  );

  return (
    <>
      <Card style={{ width: "60rem" }} className="run">
        <Card.Img className="run-image" src={runImage} />
        <Card.Body>
          <div className="run-heading">
            <Card.Title>{run.name}</Card.Title>
            {run.future_run && (
              <span class="material-symbols-rounded">schedule</span>
            )}
          </div>
          <Card.Text>{run.description}</Card.Text>
          <div className="run-desc">
            <ListGroup variant="flush">
              <ListGroup.Item>Distance: {run.distance} km</ListGroup.Item>
              <ListGroup.Item>Address: {run.location}</ListGroup.Item>
              <ListGroup.Item>Time: {run.time}</ListGroup.Item>
              <ListGroup.Item>Date: {run.date}</ListGroup.Item>
            </ListGroup>
            <Button variant="primary">Join</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
