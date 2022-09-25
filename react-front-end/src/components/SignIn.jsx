/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SignInUser.css";
import { authContext } from "../providers/AuthProvider";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setPage } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setPage("Profile");
  };

  return (
    <>
      <Form className="form-container sign-in" onSubmit={handleSubmit}>
        <div className="form-container-text">
          <Form.Text as="h3">HELLO!</Form.Text>
          <Form.Text as="p">Sign in to see all your running events.</Form.Text>
        </div>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
}
