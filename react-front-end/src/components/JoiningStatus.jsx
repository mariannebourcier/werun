import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

export default function JoiningStatus(props) {
  const { joinButtonPressed, setJoinButtonPressed } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (joinButtonPressed === true) {
      let timer = setTimeout(() => {
        setJoinButtonPressed(false);
        navigate("/profile");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [joinButtonPressed]);

  return (
    <>
      <Modal
        className="joining-status-modal"
        size="lg"
        show={joinButtonPressed}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="joining-status-header">
          <Modal.Title>THANK YOU FOR JOINING A RUN!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="joining-status-message">
          <p>
            You will now be directed to your profile page. You will receive a
            text message confirming the address of the run and other relevant
            information!
          </p>
          <p>
            Reach out to us for more information at
            hello@werun.com.
          </p>
          <Spinner className="status-spinner" animation="border" />
        </Modal.Body>
      </Modal>
    </>
  );
}
