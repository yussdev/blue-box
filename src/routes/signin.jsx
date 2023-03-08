import { useState } from "react";
import { Form, Row, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { authApi } from "../services";

export default function SignInPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row  md="2" className="d-flex justify-content-center py-5 ">
      <Form
        className="text-center"
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.elements.username.value;
          const password = e.target.elements.password.value;
          authApi
            .login({ username, password })
            .then((res) => {
              navigate("/");
            })
            .catch((e) => {
              console.log({ e });
              setError(e.response.data.error);
              handleShow();
            });
        }}
      >
        <Form.Group className="mb-3" controlId="reportValue">
          <Form.Control name="username" type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button className="mx-auto" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error - Sign In Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}
