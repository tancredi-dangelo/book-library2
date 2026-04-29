import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function WelcomeAlert() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Alert
      className="mx-5"
      variant="success"
      dismissible
      onClose={() => setShow(false)}
    >
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Welcome to this book library. Browse our books by category and find our
        best deals!
      </p>
      <hr />
      <a
        href="#"
        className="text-success text-decoration-none fw-bold mb-0"
        onClick={() => setShow(false)}
      >
        Browse our library
      </a>
    </Alert>
  );
}

export default WelcomeAlert;
