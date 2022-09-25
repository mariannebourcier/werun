/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/SignInUser.css";
import { dataContext } from "../providers/DataProvider";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { email, password, setEmail, setPassword, login } =
    useContext(dataContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginStatus = login(email, password);
    loginStatus && navigate("/profile");
    !loginStatus && navigate("/");
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
